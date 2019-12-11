import React from "react";
import ReactDOM from "react-dom";

import RenderComponent from "./RenderComponent";

const App = () => (
  <>
    <h1>Nexus Plugins</h1>
    <h2>Hello world plugin</h2>
    <RenderComponent url="/hello-world/dist/index.js" />
    <h2>Sample react plugin</h2>
    <RenderComponent url="/sample-react/dist/index.js" />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
