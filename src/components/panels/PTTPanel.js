import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import { EditorContext } from "../../context/EditorContext";
import { getCustomTokens } from "../../scripts/token";

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
  Icon,
  Form,
  FormItem,
  MessageStrip,
  BusyIndicator,
} from "@ui5/webcomponents-react";
// import "@ui5/webcomponents-icons";
// import "@ui5/webcomponents-icons-tnt";
import "@ui5/webcomponents-icons/dist/decline";
import { API_HOST } from "../../utils/api";

const assetStyle = {
  width: "100px",
};

function PTTPanel(props) {
  const { editorState, setEditorState, pttState, setPttState } =
    useContext(EditorContext);
  const {} = props;
  const [inputId, setInputId] = useState();
  const [pttData, setPttData] = useState();
  const [component, setComponent] = useState();
  const [pttAlertSuccess, setPttAlertSuccess] = useState(false);
  const [pttAlertInvalid, setPttAlertInvalid] = useState(false);
  const [pttAlertNoInput, setPttAlertNoInput] = useState(false);
  const [pttAlertUnavailable, setPttAlertUnavailable] = useState(false);
  const [loader, setLoader] = useState(false);
  const [pttAlertApiError, setPttAlertApiError] = useState(false);

  useEffect(() => {
    if (editorState) {
      editorState.on("modal:open", (props) => {
        if (editorState.Modal.getTitle() === "Set PTT ID") {
          clearWarnings();
        }
      });
    }
  }, [editorState]);

  const clearWarnings = () => {
    setPttAlertSuccess(false);
    setPttAlertInvalid(false);
    setPttAlertUnavailable(false);
    setPttAlertNoInput(false);
    setPttAlertApiError(false);
  };

  const onSearchBtn = () => {
    clearWarnings();
    console.log(inputId);

    if (inputId === undefined || inputId === "") { 
      setPttAlertNoInput(true);
      return;
    }

    if (!/^[0-9]+$/.test(inputId)) { // if input not a number
      setPttState();
      setPttAlertInvalid(true);
    } else {
      setLoader(true);
      axios
        .get(`${API_HOST}/api/ptt/searchPTT?` + "pttid=&pttname=") //gets all ptt assets
        .then((data) => {
          console.log(data);
          if (data.status === 200) { // success
            setLoader(false);
            const pttLocalAsset = data?.data?.find( (pttAsset) => pttAsset.tacticId === parseInt(inputId));
            if (pttLocalAsset) {
              setPttAlertSuccess(true);
              setPttState(inputId);
              getCustomTokens(inputId, editorState);
            } else {
              setPttState();
              setPttAlertUnavailable(true);
            }
          } else { // fail
            setLoader(false);
            setPttAlertApiError(true);
          }
        })
        .catch((err) => {
          setLoader(false);
          setPttAlertApiError(true);
        });
    }
  };

  const onCloseBtn = () => {
    editorState.Modal.close();
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div id="PttPanelContainer">
          <Form>
            <FormItem label={"* PTT Id"}>
              <Input
                id="searchInput"
                placeholder="Enter PTT Id"
                showClearIcon={true}
                style={{ width: "100%" }}
                value={inputId}
                onInput={(e) => {
                  //   console.log(e.target.highlightValue);
                  setInputId(e.target.highlightValue);
                }}
                required
                tooltip="Email Address"
              >
                <Icon
                  slot="icon"
                  name="decline"
                  interactive={true}
                  onClick={(e) => {
                    setInputId("");
                    setPttState();
                    clearWarnings();
                  }}
                />
              </Input>
            </FormItem>
          </Form>
          <br />
          <Toolbar toolbarStyle="Clear">
            <Text>
              Current PTT ID: {pttState ? pttState : "No ptt id selected"}
            </Text>
            <ToolbarSpacer />
            <BusyIndicator active={loader} size="Medium" text="Loading">
              <Text>
                {pttAlertSuccess ? (
                  <MessageStrip
                    design="Positive"
                    onClose={() => {
                      setPttAlertSuccess(false);
                    }}
                  >
                    Current PTT ID: {pttState}
                  </MessageStrip>
                ) : (
                  ""
                )}
                {pttAlertInvalid ? (
                  <MessageStrip
                    design="Negative"
                    onClose={() => {
                      setPttAlertInvalid(false);
                    }}
                  >
                    Invalid PTT Id
                  </MessageStrip>
                ) : (
                  ""
                )}
                {pttAlertUnavailable ? (
                  <MessageStrip
                    design="Warning"
                    onClose={() => {
                      setPttAlertUnavailable(false);
                    }}
                  >
                    PTT not found in the records
                  </MessageStrip>
                ) : (
                  ""
                )}
                {pttAlertNoInput ? (
                  <MessageStrip
                    design="Warning"
                    onClose={() => {
                      setPttAlertNoInput(false);
                    }}
                  >
                    Please Input PTT Id
                  </MessageStrip>
                ) : (
                  ""
                )}
                {pttAlertApiError ? (
                  <MessageStrip
                    design="Negative"
                    onClose={() => {
                      setPttAlertApiError(false);
                    }}
                  >
                    Failed to connect to the server
                  </MessageStrip>
                ) : (
                  ""
                )}
              </Text>
            </BusyIndicator>
            <Button onClick={onCloseBtn} design="Default">
              Close
            </Button>
            <Button onClick={onSearchBtn} design="Emphasized">
              Submit
            </Button>
          </Toolbar>

          <div id="results">
            {/* {pttData?.map((i) => {
              return (
                <List>
                  <StandardListItem
                    onClick={(e) => {
                        console.log(e.target.innerText)
                        setPttState(e.target.innerText);

                    }}  
                  >
                      <div style={{ fontSize: 15 }}>
                        {i?.tacticId}
                      </div>
                    </StandardListItem>
                </List>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PTTPanel;
