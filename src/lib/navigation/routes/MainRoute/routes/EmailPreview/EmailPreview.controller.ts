import { useParams } from "react-router";
import type { EmailPreviewViewProps } from "./EmailPreview.view";
import { EmailsService } from "../../../../../services/emails.service";
import { of } from "rxjs";
import { bind } from "@react-rxjs/core";

const [useEmail] = bind((emailId: string | undefined) => {
  if (!emailId) {
    return of(undefined);
  }
  return EmailsService.getEmailById(emailId);
});

export const useEmailPreviewController = (): EmailPreviewViewProps => {
  const { emailId } = useParams();

  const email = useEmail(emailId);

  console.log("email:", email);

  return {
    email,
    onMarkAsReadOrUnread: () => {
      // todo: add this to props
      throw new Error("Function not implemented.");
    },
    onDelete: () => {
      // todo: add this to props
      throw new Error("Function not implemented.");
    },
  };
};
