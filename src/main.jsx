import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//cuando se llama al componente solo por funcion
//import  PrimerComponente from "./PrimerComponente";
//cuando llamamos a un componente con la funcion de flecha:
// import {PrimerComponente}  from "./PrimerComponente";
import "./styles.css";
import { ContadorApp } from "./ContadorApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContadorApp value={0} />
  </StrictMode>
);
