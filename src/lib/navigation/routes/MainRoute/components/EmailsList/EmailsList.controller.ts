import { useParams } from "react-router";
import type { EmailsListViewProps } from "./EmailsList.view";
import { EmailsService } from "../../../../../services/emails.service";
import { bind } from "@react-rxjs/core";
import { DEFAULT_FOLDER_SLUG } from "../../../../../constants/folders";
import type { Email } from "../../../../../types";
import { useObservableAction } from "../../../../../utils/useObservableAction";

const [useEmails] = bind((folder: string) =>
  EmailsService.getEmailsByFolder(folder)
);

export const useEmailsListController = (): EmailsListViewProps => {
  const { folderSlug: folderSlugParam } = useParams();

  const folder = folderSlugParam ?? DEFAULT_FOLDER_SLUG;

  const emails = useEmails(folder);

  const [onReadOrUnread] =
    useObservableAction((email: Email) => {
      return EmailsService.markAsReadOrUnread(email.id);
    });

  const [onDelete] = useObservableAction(
    (email: Email) => {
      return EmailsService.deleteEmail(email);
    }
  );

  if (!folderSlugParam) {
    return {
      emails: [],
      onReadOrUnread,
      onDelete,
    };
  }

  return {
    emails,
    onReadOrUnread,
    onDelete,
  };
};
