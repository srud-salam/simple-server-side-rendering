import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";

const render = ReactDOMServer.renderToString(React.createElement(App));
// const render = ReactDOMServer.renderToNodeStream(React.createElement(App));
export default render;
