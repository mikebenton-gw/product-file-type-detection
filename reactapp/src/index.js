import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";
import FileTypeDetectionSwag from "./components/fileTypeDetectionSwag";

import {
    HashRouter as Router,
    Route,
} from "react-router-dom";

var Root = () => {
  return (
  <Router basename='/'>
    <Route path="/drop"><App /></Route>
    <Route path="/" exact><FileTypeDetectionSwag /></Route>
  </Router>);
}

ReactDOM.render(<Root />, document.getElementById("root"));
