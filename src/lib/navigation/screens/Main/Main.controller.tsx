import { useParams } from "react-router";

export const useMainController = (): MainViewProps => {
  const { emailId, folderSlug } = useParams();

  return {
    emailId,
    folderSlug,
    // todo: on presses
  };
};
