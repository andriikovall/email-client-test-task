import { memo, Suspense } from "react";
import { connectController } from "../../../utils/connectController";
import { Folders } from "./components";
import { EmailsList } from "./components/EmailsList";
// todo: pretty import paths
import { useMainRouteController } from "./MainRoute.controller";
import { Outlet } from "react-router";

export type MainRouteViewProps = {
  folderSlug: string;
};

const MainRouteView = (props: MainRouteViewProps) => {
  const { folderSlug } = props;

  return (
    <div className="row h-100">
      <div className="col-3 h-100 overflow-scroll border-end bg-body-tertiary">
        <Suspense fallback={<div>Loading folders...</div>}>
          <Folders />
        </Suspense>
      </div>
      <div className="col-4 h-100 overflow-scroll border-end" key={folderSlug}>
        <Suspense fallback={<div>Loading emails...</div>}>
          <EmailsList />
        </Suspense>
      </div>
      <div className="col-5 h-100 overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export const MainRoute = memo(connectController(useMainRouteController, MainRouteView));
