import { BehaviorSubject } from "rxjs";
import type { Email } from "../types";

class EmailsServiceClass {
    private readonly emails: BehaviorSubject<Email[]> = new BehaviorSubject<Email[]>([]);

    public readonly emails$ = this.emails.asObservable();
}

export const EmailsService = new EmailsServiceClass();