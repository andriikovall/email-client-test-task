import { useParams } from "react-router";
import type { EmailPreviewViewProps } from "./EmailPreview.view";
import { EmailsService } from "../../../../../services/emails.service";
import { of } from "rxjs";
import { bind } from "@react-rxjs/core";
import { sanitizeHTML } from "./utils/sanitizeHtml";
import { useMemo } from "react";
import { useObservableAction } from "../../../../../utils/useObservableAction";

const [useEmail] = bind((emailId: string | undefined) => {
  if (!emailId) {
    return of(undefined);
  }
  return EmailsService.getEmailById(emailId);
});

export const useEmailPreviewController = (): EmailPreviewViewProps => {
  const { emailId } = useParams();

  const email = useEmail(emailId);

  const [onReadOrUnread, { loading: isReadOrUnreadLoading }] = useObservableAction(() => {
    if (!email) {
      return of(undefined);
    }
    return EmailsService.markAsReadOrUnread(email.id);
  });

  const [onDelete, { loading: isDeleteLoading }] = useObservableAction(() => {
    if (!email) {
      return of(undefined);
    }
    return EmailsService.deleteEmail(email);
  });

  const sanitizedEmailHTML = useMemo(() => {
    if (!email) {
      return "";
    }
    return sanitizeHTML(email.content);
  }, [email]);

  return {
    email,
    sanitizedEmailHTML,
    onMarkAsReadOrUnread: onReadOrUnread,
    onDelete,
    loading: isReadOrUnreadLoading || isDeleteLoading,
  };
};
