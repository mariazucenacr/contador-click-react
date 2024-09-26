import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { ContadorApp } from "./ContadorApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContadorApp value={0} />
  </StrictMode>
);
