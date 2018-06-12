import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./styles.css";
import PomoHeader from "./componentes/PomoHeader";

function App() {
  return (
    <div className="App">
      <PomoHeader work={true} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
