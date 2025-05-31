import { useParams } from "react-router";
import type { EmailPreviewViewProps } from "./EmailPreview.view";
import { EmailsService } from "../../../../../services/emails.service";
import { of } from "rxjs";
import { bind } from "@react-rxjs/core";
import { sanitizeHTML } from "./utils/sanitizeHtml";
import { useCallback, useMemo } from "react";

const [useEmail] = bind((emailId: string | undefined) => {
  if (!emailId) {
    return of(undefined);
  }
  return EmailsService.getEmailById(emailId);
});

export const useEmailPreviewController = (): EmailPreviewViewProps => {
  const { emailId } = useParams();

  const email = useEmail(emailId);

  const onMarkAsReadOrUnread = useCallback(() => {
    if (!emailId) {
      return;
    }
    console.log('emailId: IN CONTROLLER', emailId);
    EmailsService.markAsReadOrUnread(emailId);
  }, [emailId]);

  const onDelete = useCallback(() => {
    if (!emailId) {
      return;
    }
    EmailsService.deleteEmail(emailId);
  }, [emailId]);

  const sanitizedEmailHTML = useMemo(() => {
    if (!email) {
      return "";
    }
    return sanitizeHTML(email.content);
  }, [email]);

  return {
    email,
    sanitizedEmailHTML,
    onMarkAsReadOrUnread,
    onDelete,
  };
};
