import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";


// import Remote2App from "remote2/App"

import RemoteApp1 from "remote/App"
import RemoteApp2 from "remote2/App"

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl bg-gray-300">
    <h1>Host App</h1>
    <RemoteApp1 />
    <RemoteApp2 />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
