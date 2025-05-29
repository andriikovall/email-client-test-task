import { Route, Routes } from "react-router";
import { Main } from "./screens";

export const RootNavigation = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      {/* for the future */}
    </Routes>
  );
};
