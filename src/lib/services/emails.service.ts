import {
  BehaviorSubject,
  combineLatest,
  delay,
  map,
  Observable,
  of,
  tap,
} from "rxjs";
import type { Email, Folder } from "../types";
import { MOCK_EMAILS } from "./mocks/emails";
import { MOCK_FOLDERS } from "./mocks/folders";

// todo: multicast
class EmailsServiceClass {
  public readonly emails$ = new BehaviorSubject<Email[]>(MOCK_EMAILS);

  public getEmailsByFolder(folder: string): Observable<Email[]> {
    return this.emails$.pipe(
      delay(2000),
      // todo: check for default folder logic
      map((emails) =>
        emails.filter(
          (email) => email.folderSlug === folder && !email.isDeleted
        )
      )
    );
  }

  public getEmailById(id: string): Observable<Email | undefined> {
    return this.emails$.pipe(
      delay(1000),
      map((emails) => emails.find((email) => email.id === id))
    );
  }

  public markAsReadOrUnread(id: string): void {
    const currentEmails = this.emails$.getValue();
    const newEmails = currentEmails.map((email) =>
      email.id === id ? { ...email, isRead: !email.isRead } : email
    );
    // todo: think about suspending and loading
    this.emails$.next(newEmails);
  }

  public deleteEmail(id: string): void {
    const currentEmails = this.emails$.getValue();
    const newEmails = currentEmails.filter((email) => email.id !== id);
    // todo: think about suspending and loading
    this.emails$.next(newEmails);
  }

  public getFolders(): Observable<Folder[]> {
    return combineLatest([of(MOCK_FOLDERS), this.emails$]).pipe(
      map(([folders, emails]) =>
        folders.map((folder) => ({
          ...folder,
          count: emails.filter((email) => email.folderSlug === folder.slug)
            .length,
        }))
      )
    );
  }
}

export const EmailsService = new EmailsServiceClass();
