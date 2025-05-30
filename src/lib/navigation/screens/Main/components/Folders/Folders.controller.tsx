import { state, useStateObservable } from "@react-rxjs/core";
import { EmailsService } from "../../../../../services/emails.service";
import type { FoldersViewProps } from "./Folders.view";

export const useFoldersController = (): FoldersViewProps => {
  const folders = useStateObservable(state(EmailsService.getFolders()));

  return {
    folders
  };
};

