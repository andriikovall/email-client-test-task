import { Navigate, Route, Routes } from "react-router";
import { MainRoute } from "./routes";
import { EmailPreview } from "./routes/MainRoute/routes/EmailPreview";
import { DEFAULT_FOLDER_SLUG } from "../constants/folders";

export const RootNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/folders/${DEFAULT_FOLDER_SLUG}`} />} />
      <Route path="/folders/:folderSlug" Component={MainRoute}>
        <Route path="email/:emailId?" Component={EmailPreview} />
      </Route>
    </Routes>
  );
};
