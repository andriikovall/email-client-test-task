import { memo, Suspense } from "react";
import { connectController } from "../../../utils/connectController";
import { Folders } from "./components";
import { EmailsList } from "./components/EmailsList";
// todo: pretty import paths
import { useMainRouteController } from "./MainRoute.controller";
import { Outlet } from "react-router";

export type MainRouteViewProps = {
  folderSlug: string;
  emailId: string | undefined;
};

const MainRouteView = (props: MainRouteViewProps) => {
  const { folderSlug, emailId } = props;

  return (
    <div className="row h-100">
      <div className="col-3 h-100 overflow-y-scroll border-end bg-body-tertiary">
        <Suspense fallback={<div className="text-center p-4">Loading folders...</div>}>
          <Folders />
        </Suspense>
      </div>
      <div className="col-4 h-100 overflow-y-scroll border-end" key={folderSlug}>
        <Suspense fallback={<div className="text-center p-4">Loading emails...</div>}>
          <EmailsList />
        </Suspense>
      </div>
      <div className="col-5 h-100 overflow-y-scroll">
        <Suspense fallback={<p className="text-center p-4">Loading email preview...</p>} key={emailId}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export const MainRoute = memo(
  connectController(useMainRouteController, MainRouteView)
);
