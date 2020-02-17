import React, { useState } from "react";
import "../App.css";
import logo from "../logo.svg";
import ProcessFile from "../components/ProcessFile"

function App() {
  var [apiKey, setApiKey] = useState("v1j1jXSdPo8Z7iRW4H34va89ho9mt6KV5y9zezVn");

  var onApiKeyChange = event => {
      setApiKey(event.target.value);
  }

    return (
      <>
        <div className="app file-drop">
          <div className="app-header">
            <div className="logo"><img src={logo} alt="Logo" height="90" /></div>
          </div>
          <input type="text" placeholder="Api Key" onInput={onApiKeyChange} hidden />
          <ProcessFile apiKey={apiKey}/>
        </div>
      </>
    );
}

export default App;
