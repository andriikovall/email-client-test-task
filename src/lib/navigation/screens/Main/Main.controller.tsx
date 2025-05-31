import { useParams } from "react-router";
import type { MainViewProps } from "./Main.view";
import { DEFAULT_FOLDER_SLUG } from "../../../constants/folders";

export const useMainController = (): MainViewProps => {
  const { folderSlug: folderSlugParam } = useParams();

  const folder = folderSlugParam ?? DEFAULT_FOLDER_SLUG;

  return {
    folderSlug: folder,
    // todo: on presses
  };
};
