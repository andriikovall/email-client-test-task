import { Navigate, Route, Routes, useParams } from "react-router";
import { Main } from "./screens";
import { Suspense } from "react";
import { EmailsList } from "./screens/Main/components/EmailsList";

export const RootNavigation = () => {
  const { folderSlug } = useParams();
  console.log("folderSlug:", folderSlug);
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/folders/:folderSlug" Component={EmailList} />
        {/* <Route path="email/:emailId?" Component={Main} /> */}
      </Route>
    </Routes>
  );
};

const EmailList = () => {
  const { folderSlug } = useParams();
  // todo: THIS SUKA WORKS
  return (
    <div className="col-4 h-100 overflow-scroll border-end" key={folderSlug}>
      <Suspense fallback={<div>Loading emails...</div>}>
        <EmailsList />
      </Suspense>
    </div>
  );
};
