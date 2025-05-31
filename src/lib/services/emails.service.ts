import { BehaviorSubject, combineLatest, delay, map, Observable, of, tap } from "rxjs";
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
      map((emails) => emails.filter((email) => email.folderSlug === folder)),
    );
  }

  public getEmailById(id: string): Observable<Email | undefined> {
    return this.emails$.pipe(
      delay(1000),
      map((emails) => emails.find((email) => email.id === id))
    );
  }

  public markAsReadOrUnread(id: string): Observable<void> {
    return this.emails$.pipe(
      delay(1000),
      map((emails) =>
        emails.map((email) =>
          email.id === id ? { ...email, isRead: !email.isRead } : email
        )
      ),
      tap((emails) => this.emails$.next(emails)),
      map(() => undefined)
    );
  }

  public deleteEmail(id: string): Observable<void> {
    return this.emails$.pipe(
      delay(1000),
      map((emails) => emails.filter((email) => email.id !== id)),
      tap((emails) => this.emails$.next(emails)),
      map(() => undefined)
    );
  }

  public getFolders(): Observable<Folder[]> {
    return combineLatest([of(MOCK_FOLDERS), this.emails$]).pipe(
      map(([folders, emails]) =>
        folders.map((folder) => ({
          ...folder,
          count: emails.filter((email) => email.folderSlug === folder.slug).length,
        }))
      )
    );
  }
}

export const EmailsService = new EmailsServiceClass();
