import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import "grapesjs/dist/css/grapes.min.css";
import Button from "../components/Button";
import config from "../utils/config";
import AssetManager from "../components/blocks/AssetManager";
import { EditorContext } from "../context/EditorContext";
import { API_HOST } from "../utils/api";
import TopNav from "../components/TopNav";
import PTTAssets from "../components/blocks/PTTAssets";
import PTTPanel from "../components/panels/PTTPanel";
import ExportPanel from "../components/panels/ExportPanel";
import ImportPanel from "../components/panels/ImportPanel";
import HeadlineText from "../components/HeadlineText";
import LinkValPanel from "../components/panels/LinkValPanel";
import CreateEmailPanel from "../components/panels/CreateEmailPanel";
import SendSampleEmail from "../components/panels/SendSampleEmail";
import AddParameterPanel from "../components/panels/AddParameterPanel";
import FooterSelector from "../components/FooterSelector";

const containerStyle = {
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'stretch',
  // height:'100%'
};

const blocksStyle = {
  //   flexGrow: 1,
};

const gjsStyle = {

};

function Editor() {
  const { editorState, setEditorState } = useContext(EditorContext);

  useEffect(() => {
    if (!editorState) { // solves double editor load bug
      const editor = config();

      setEditorState(editor);
    }
  }, []);

  return (
    <>
      <TopNav />
      <div style={containerStyle}>
        <div id="blocks" style={blocksStyle}></div>
        <div id="editor" style={gjsStyle}></div>
      </div>
      <Button />
      <AssetManager />
      <PTTAssets />
      <PTTPanel />
      <ExportPanel />
      <ImportPanel />
      <HeadlineText />
      <LinkValPanel />
      <CreateEmailPanel />
      <SendSampleEmail />
      <AddParameterPanel />
      <FooterSelector />
    </>
  );
}

export default Editor;
