import { useParams } from "react-router";
import type { MainViewProps } from "./Main.view";

export const useMainController = (): MainViewProps => {
  const { emailId, folderSlug } = useParams();

  return {
    emailId,
    folderSlug,
  };
};
