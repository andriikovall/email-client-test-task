import { Route, Routes, Navigate } from "react-router";
import { Main } from "./screens";
import { EmailsList } from "./screens/Main/components/EmailsList";
import { EmailPreview } from "./screens/Main/components/EmailPreview";
import { DEFAULT_FOLDER_SLUG } from "../constants/folders";

export const RootNavigation = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/folders/:folderSlug" Component={Main}>
        <Route path="email/:emailId?" Component={EmailPreview} />
      </Route>
    </Routes>
  );
};
