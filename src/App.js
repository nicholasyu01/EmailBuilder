import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Editor from "./views/Editor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EditorContext } from "./context/EditorContext";
import Home from "./views/Home";
import { ShellBar } from "@ui5/webcomponents-react";

function App() {
  const [editorState, setEditorState] = useState();
  const [pttState, setPttState] = useState();
  const [programID, setProgramID] = useState();

  return (
    <>
      <ShellBar
        primary-title="Email Builder"
        // secondary-title="draft 1"
        // show-co-pilot
        // show-product-switch
        // show-notifications
        // notifications-count="22"
      >
        <img
          slot="logo"
          src="https://fm.sap.com/images/2008/SAPLogo.gif"
          width="73"
          height="36"
          alt="SAP"
          border="0"
        />
      </ShellBar>
      <Router>
        <Switch>
          <EditorContext.Provider
                       value={{
                        editorState,
                        setEditorState,
                        pttState,
                        setPttState,
                        programID,
                        setProgramID
                      }}
          >
            <Route exact path="/" component={Editor}></Route>
            <Route exact path="/home" component={Home}></Route>
          </EditorContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;