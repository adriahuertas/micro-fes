import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Form from "./Form";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl bg-yellow-200">
    <h1>Remote App 2</h1>
    <div className="p-5">
      <Form />
    </div>
  </div>
);

export default App

ReactDOM.render(<App />, document.getElementById("app"));
