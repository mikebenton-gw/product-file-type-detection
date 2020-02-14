import {usePromiseTracker} from "react-promise-tracker";
import React from "react";

function LoadingIndicator(props) {
  if (!props.loading)
    return null;

  return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
  );
}

export default LoadingIndicator;
