import { bind } from "@react-rxjs/core";
import { EmailsService } from "../../../../../services/emails.service";
import type { FoldersViewProps } from "./Folders.view";

const [useFolders] = bind(EmailsService.getFolders$())

export const useFoldersController = (): FoldersViewProps => {
  const folders = useFolders();

  return {
    folders
  };
};

