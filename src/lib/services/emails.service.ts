import {
  BehaviorSubject,
  combineLatest,
  delay,
  filter,
  map,
  Observable,
  of,
  tap,
} from "rxjs";
import type { Email, Folder } from "../types";
import { MOCK_EMAILS } from "./mocks/emails";
import { MOCK_FOLDERS } from "./mocks/folders";
import { randomNumber } from "../utils/randomNumber";
import { SUSPENSE } from "@rx-state/core";
import { filterSuspense } from "../utils/rxjs-operators";
import { isSuspense } from "../utils/isSuspense";

const getEmails = (): Observable<Email[]> => of(MOCK_EMAILS).pipe(delay(2000));

class EmailsServiceClass {

  private readonly emails$ = new BehaviorSubject<Email[] | SUSPENSE>(SUSPENSE);

  constructor() {
    getEmails().subscribe((emails) => this.emails$.next(emails));
  }

  public getEmailsByFolder$(folder: string): Observable<Email[]> {
    return this.emails$.pipe(
      filterSuspense(),
      map((emails) => this.filterEmailsByFolderAndDeleted(emails, folder)),
      map((emails) => this.sortEmails(emails))
    );
  }

  public getEmailById$(id: string): Observable<Email | undefined> {
    return this.emails$.pipe(
      // bth I don't like this filtering everywhere, there must be a better way to do this
      filterSuspense(),
      map((emails) => emails.find((email) => email.id === id))
    );
  }

  public markAsReadOrUnread$(id: string): Observable<void> {
    const currentEmails = this.emails$.getValue();
    if (isSuspense(currentEmails)) {
      return of(undefined);
    }
    const newEmails = currentEmails.map((email) =>
      email.id === id ? { ...email, isRead: !email.isRead } : email
    )

    return of(undefined).pipe(
      delay(1000),
      tap(() => this.emails$.next(newEmails)),
    )
  }

  public deleteEmail$(email: Email): Observable<void> {
    const currentEmails = this.emails$.getValue();
    if (isSuspense(currentEmails)) {
      return of(undefined);
    }

    if (
      !confirm(
        `Are you sure you want to delete the email from ${email.from.email}?`
      )
    ) {
      return of(undefined);
    }

    const newEmails = currentEmails.filter((e) => e.id !== email.id);

    return of(undefined).pipe(
      delay(1000),
      tap(() => this.emails$.next(newEmails)),
    )
  }

  public getFolders$(): Observable<Folder[]> {
    return combineLatest([of(MOCK_FOLDERS), this.emails$]).pipe(
      filter(([, emails]) => !isSuspense(emails)),
      map(([folders, emails]) =>
        folders.map((folder) => ({
          ...folder,
          // the suspense is already checked in the filter operator above, putting `as` consciously
          count: this.filterEmailsByFolderAndDeleted(emails as Email[], folder.slug)
            .length,
        }))
      )
    );
  }

  public addMockEmail(): void {
    const currentEmails = this.emails$.getValue();
    if (isSuspense(currentEmails)) {
      return;
    }

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
