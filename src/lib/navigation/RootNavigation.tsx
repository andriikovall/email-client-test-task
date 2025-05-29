import { Route, Routes } from "react-router";
import { Main } from "./screens";

export const RootNavigation = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/folders/:folderSlug" Component={Main}>
        <Route
          path="email/:emailId?"
          Component={Main}
        />
      </Route>
    </Routes>
  );
};
