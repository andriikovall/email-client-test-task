import { useParams } from "react-router";
import type { EmailsListViewProps } from "./EmailsList.view";
import { EmailsService } from "../../../../../services/emails.service";
import { bind } from "@react-rxjs/core";
import { DEFAULT_FOLDER_SLUG } from "../../../../../constants/folders";

const [useEmails] = bind((folder: string) =>
  EmailsService.getEmailsByFolder(folder)
);

export const useEmailsListController = (): EmailsListViewProps => {
  const { folderSlug: folderSlugParam } = useParams();

  const folder = folderSlugParam ?? DEFAULT_FOLDER_SLUG;

  const emails = useEmails(folder);

  if (!folderSlugParam) {
    return {
      emails: [],
      folderSlug: folder,
    };
  }

  return {
    emails,
    folderSlug: folder,
  };
};
