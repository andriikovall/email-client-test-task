import { useParams } from "react-router";
import { DEFAULT_FOLDER_SLUG } from "../../../constants/folders";
import type { MainRouteViewProps } from "./MainRoute.view";

export const useMainRouteController = (): MainRouteViewProps => {
  const { folderSlug: folderSlugParam } = useParams();

  const folder = folderSlugParam ?? DEFAULT_FOLDER_SLUG;

  return {
    folderSlug: folder,
    // todo: on presses
  };
};
