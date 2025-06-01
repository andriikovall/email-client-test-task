import { Navigate, Route, Routes } from "react-router";
import { MainRoute } from "./routes";
import { EmailPreview } from "./routes/MainRoute/routes/EmailPreview";
import { DEFAULT_FOLDER_SLUG } from "../constants/folders";

export const RootNavigation = () => {
  const defaultPath = `/folders/${DEFAULT_FOLDER_SLUG}`;
  return (
    <Routes>
      <Route path="/" element={<Navigate to={defaultPath} />} />
      <Route path="/folders/:folderSlug" Component={MainRoute}>
        <Route path="email?/:emailId?" Component={EmailPreview} />
      </Route>
      <Route path="*" element={<Navigate to={defaultPath} />} />
    </Routes>
  );
};
