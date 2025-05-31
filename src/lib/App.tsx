import { memo } from "react";
import { Header } from "./components";
import { RootNavigation } from "./navigation";

const AppView = () => {
  return (
    <div className="h-100 d-flex flex-column">
      <Header />
      <div className="flex-grow-1 overflow-hidden">
        <RootNavigation />
      </div>
    </div>
  );
}

export const App = memo(AppView);
