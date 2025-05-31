import { Header } from "./components";
import { RootNavigation } from "./navigation";

function App() {
  return (
    <div className="h-100 d-flex flex-column">
      <Header onAddEmail={() => {}} />
      <div className="flex-grow-1 overflow-hidden">
        <RootNavigation />
      </div>
    </div>
  );
}

export default App;
