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
import { randomNumber } from "../utils/randomNumber";

class EmailsServiceClass {
  public readonly emails$ = new BehaviorSubject<Email[]>(MOCK_EMAILS);

  public getEmailsByFolder$(folder: string): Observable<Email[]> {
    return this.emails$.pipe(
      map((emails) => this.filterEmailsByFolderAndDeleted(emails, folder)),
      map((emails) => this.sortEmails(emails))
    );
  }

  public getEmailById$(id: string): Observable<Email | undefined> {
    return this.emails$.pipe(
      map((emails) => emails.find((email) => email.id === id))
    );
  }

  public markAsReadOrUnread$(id: string): Observable<void> {
    const currentEmails = this.emails$.getValue();
    const newEmails = currentEmails.map((email) =>
      email.id === id ? { ...email, isRead: !email.isRead } : email
    )

    return of(undefined).pipe(
      delay(1000),
      tap(() => this.emails$.next(newEmails)),
    )
  }

  public deleteEmail$(email: Email): Observable<void> {
    if (
      !confirm(
        `Are you sure you want to delete the email from ${email.from.email}?`
      )
    ) {
      return of(undefined);
    }
    const currentEmails = this.emails$.getValue();
    const newEmails = currentEmails.filter((e) => e.id !== email.id);

    return of(undefined).pipe(
      delay(1000),
      tap(() => this.emails$.next(newEmails)),
    )
  }

  public getFolders$(): Observable<Folder[]> {
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

  public addMockEmail(): void {
    const currentEmails = this.emails$.getValue();
    const randomEmail = MOCK_EMAILS[randomNumber(0, MOCK_EMAILS.length - 1)];
    const id = Math.random().toString(36).substring(2, 16);
    const newEmails = [...currentEmails, { ...randomEmail, id, date: new Date().toISOString() }];
    this.emails$.next(newEmails);
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
