import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./CounterApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <CounterApp />
    </div>
  </StrictMode>
);
