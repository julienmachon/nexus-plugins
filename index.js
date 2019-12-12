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
    <h2>Sample vue plugin</h2>
    <RenderComponent url="/sample-vue/dist/index.js" />
    <h2>Sample react plugin without bundled 3rd party</h2>
    <RenderComponent url="/no-bundled-deps/dist/index.js" />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
