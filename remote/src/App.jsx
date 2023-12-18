import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Counter from "./Counter";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl bg-indigo-300" >
    <h1>Remote App 1</h1>

    <div className="p-5"><Counter /></div>
  </div>
);

export default App
ReactDOM.render(<App />, document.getElementById("app"));
