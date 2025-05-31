import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Subscribe } from "@react-rxjs/core";
import { App } from "./lib/App";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Subscribe>
        <App />
      </Subscribe>
    </BrowserRouter>
  </StrictMode>
);
