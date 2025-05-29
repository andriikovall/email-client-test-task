import { useSearchParams } from "react-router";
import type { MainViewProps } from "./Main.view";

export const useMainProps = (): MainViewProps => {
  const [searchParams] = useSearchParams();
  const emailId = searchParams.get('emailId');
  const folderSlug = searchParams.get('folderSlug');

  return {
    emailId,
    folderSlug,
  };
};
