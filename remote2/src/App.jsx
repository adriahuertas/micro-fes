import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Form from "./Form";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h1>Remote 2</h1>
    <Form />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
