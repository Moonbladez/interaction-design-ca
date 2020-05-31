import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app/App";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
