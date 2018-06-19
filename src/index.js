import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./styles.css";
import { Body } from "./componentes/Body";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
