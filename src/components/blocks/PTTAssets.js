import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import { EditorContext } from "../../context/EditorContext";
import {
  Input,
  List,
  StandardListItem,
  ListMode,
  Text,
  Toolbar,
  Title,
  TitleLevel,
  ToolbarSpacer,
  Select,
  Option,
  Button,
  BusyIndicator,
  MessageStrip,
} from "@ui5/webcomponents-react";
import { API_HOST } from "../../utils/api";

const assetStyle = {
  width: "100px",
};

function PTTAssets(props) {
  const {
    editorState,
    setEditorState,
    pttState,
    setPttState,
    programID,
    setProgramID,
  } = useContext(EditorContext);
  const {} = props;
  const [inputId, setInputId] = useState();
  const [pttData, setPttData] = useState();
  const [component, setComponent] = useState();

  useEffect(() => {
    console.log("PPT Manager", editorState);
    if (editorState) {
      editorState.on("block:drag:stop", (block) => {
        console.log("block", block);
        setComponent(block);
        if (block?.attributes?.type === "link") {
          openModal(editorState);
        }
      });
      editorState.on("component:selected", (component) => {
        if (component.attributes.type === "link") {
          openModal(editorState);
          setComponent(component);
        }
      });
    }
  }, [editorState]);

  const openModal = (editor) => {
    editor.Modal.open({
      title: "Add Link", // string | HTMLElement
      content: document.getElementById("pttContainer"),
      attributes: { class: "my-class" },
    });
  };

  useEffect(() => { // TODO change this to on Modal open and set loader state
    if(pttState){
      setPttData()
      
      axios
      .get(`${API_HOST}/api/ptt/getAssetsById?id=${pttState}`)
      .then((data) => {
        setPttData(data?.data);
        //setProgramID(data?.data[0].marketoProgramId);
      })      
      .catch((error) => {
        console.log(error);
      });
    } else {
      setPttData()
    }
  }, [pttState]);

  const onCloseBtn = () => {
    editorState.Modal.close();
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div id="pttContainer">
          <div>
            {pttState ? <MessageStrip design='Positive'>Current PTT ID: {pttState} </MessageStrip> : <MessageStrip design='Warning'>Please select PTT Id</MessageStrip>}
          </div>
          <div id="results">
            {pttData ? (
              pttData?.map((i) => {
                return (
                  <List>
                    <StandardListItem
                      onClick={(e) => {
                        console.log(e.target.innerText);
                        component.setAttributes({ href: e.target.innerText });
                        editorState.Modal.close();
                      }}
                    >
                      <div style={{ fontSize: 15 }}>{i.promotionalUrl}</div>
                    </StandardListItem>
                  </List>
                );
              })
            ) : (
              <div style={{ width: "100%" }}>
                <BusyIndicator
                  active={pttState ? true : false}
                  // children={}
                  // delay={}
                  size="Large"
                  text="Loading"
                  // waitForDefine={}
                />
              </div>
            )}
          </div>
          <Button onClick={onCloseBtn} design="Default">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}

export default PTTAssets;