import { useParams } from "react-router";
import type { EmailsListViewProps } from "./EmailsList.view";
import { EmailsService } from "../../../../../services/emails.service";
import { state, useStateObservable } from "@react-rxjs/core";

const getEmails = state((folder: string) =>
  EmailsService.getEmailsByFolder(folder)
);

export const useEmailsListController = (): EmailsListViewProps => {
  const { folderSlug } = useParams();
  const emails = useStateObservable(getEmails(folderSlug ?? "inbox"));

  if (!folderSlug) {
    return {
      emails: [],
    };
  }

  return {
    emails,
  };
};
