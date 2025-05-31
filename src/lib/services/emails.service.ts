import {
  BehaviorSubject,
  combineLatest,
  delay,
  map,
  Observable,
  of,
} from "rxjs";
import type { Email, Folder } from "../types";
import { MOCK_EMAILS } from "./mocks/emails";
import { MOCK_FOLDERS } from "./mocks/folders";

class EmailsServiceClass {
  public readonly emails$ = new BehaviorSubject<Email[]>(MOCK_EMAILS);

  public getEmailsByFolder(folder: string): Observable<Email[]> {
    return this.emails$.pipe(
      delay(2000),
      // todo: check for default folder logic
      map((emails) => this.filterEmailsByFolderAndDeleted(emails, folder)),
      map((emails) => this.sortEmails(emails))
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

  public deleteEmail(email: Email): void {
    if (
      !confirm(
        `Are you sure you want to delete the email from ${email.from.email}?`
      )
    ) {
      return;
    }
    const currentEmails = this.emails$.getValue();
    const newEmails = currentEmails.filter((e) => e.id !== email.id);
    // todo: think about suspending and loading
    this.emails$.next(newEmails);
  }

  public getFolders(): Observable<Folder[]> {
    return combineLatest([of(MOCK_FOLDERS), this.emails$]).pipe(
      map(([folders, emails]) =>
        folders.map((folder) => ({
          ...folder,
          count: this.filterEmailsByFolderAndDeleted(emails, folder.slug)
            .length,
        }))
      )
    );
  }

  private sortEmails(emails: Email[]): Email[] {
    return [...emails].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  private filterEmailsByFolderAndDeleted(
    emails: Email[],
    folder: string
  ): Email[] {
    return emails.filter(
      (email) => email.folderSlug === folder && !email.isDeleted
    );
  }
}

export const EmailsService = new EmailsServiceClass();
