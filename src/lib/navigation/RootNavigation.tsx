import { Route, Routes } from "react-router";
import { MainRoute } from "./routes";
import { EmailPreview } from "./routes/MainRoute/routes/EmailPreview";

export const RootNavigation = () => {
  return (
    <Routes>
      <Route path="/" Component={MainRoute} />
      <Route path="/folders/:folderSlug" Component={MainRoute}>
        <Route path="email/:emailId?" Component={EmailPreview} />
      </Route>
    </Routes>
  );
};
