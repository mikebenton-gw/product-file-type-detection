import React from "react";
import SwaggerUI from "swagger-ui-react"
import yam from "../api/api.yaml"; 
import "../App.css";
import logo from "../logo.svg";

var FileTypeDetectionSwag = () => <SwaggerUI url={window.location.origin + yam} />

export default FileTypeDetectionSwag;