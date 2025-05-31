import { memo, Suspense } from "react";
import { connectController } from "../../../utils/connectController";
import { Folders } from "./components";
import { EmailPreview } from "./components/EmailPreview";
import { EmailsList } from "./components/EmailsList";
// todo: pretty import paths
import { useMainController } from "./Main.controller";
import { Outlet, useParams } from "react-router";

const MainView = () => {
  const { folderSlug } = useParams();
  return (
    <div className="row h-100">
      <div className="col-3 h-100 overflow-scroll border-end bg-body-tertiary">
        <Suspense fallback={<div>Loading folders...</div>}>
          <Folders />
        </Suspense>
      </div>
      {/* <div className="col-4 h-100 overflow-scroll border-end" key={folderSlug}>
        <Suspense fallback={<div>Loading emails...</div>}>
          <EmailsList />
        </Suspense>
      </div> */}
      <Outlet />
      {/* <div className="col-5 h-100 overflow-scroll">
        <Suspense fallback={<div>Loading email preview...</div>}>
          <EmailPreview />
        </Suspense>
      </div> */}
    </div>
  );
};

export const Main = memo(connectController(useMainController, MainView));
