import { memo, Suspense } from "react";
import { connectController } from "../../../utils/connectController";
import { Folders } from "./components";
import { EmailsList } from "./components/EmailsList";
// todo: pretty import paths
import { useMainController } from "./Main.controller";
import { Outlet } from "react-router";

export type MainViewProps = {
  folderSlug: string;
};

const MainView = (props: MainViewProps) => {
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

export const Main = memo(connectController(useMainController, MainView));
