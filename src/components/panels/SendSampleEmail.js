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
  MessageStrip,
  BusyIndicator,
  CheckBox,
  Form,
  FormItem,
  Icon,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/decline";
import { API_HOST } from "../../utils/api";

function SendSampleEmail(props) {
  const { editorState, setEditorState, pttState, setPttState } =
    useContext(EditorContext);
  const {} = props;
  const [inputAddress, setInputAddress] = useState();
  const [sendSampleSuccess, setSendSampleSuccess] = useState(false);
  const [sendSampleFail, setSendSampleFail] = useState(false);
  const [invalidEmailFail, setInvalidEmailFail] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [textOnlyInput, setTextOnlyInput] = useState(false);

  useEffect(() => {
    if (editorState) {
      editorState.on("modal:open", (props) => {
        if (editorState.Modal.getTitle() === "Send Sample Email") {
          clearWarnings();
        }
      });
    }
  }, [editorState]);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const clearWarnings = () => {
    setSendSampleSuccess(false);
    setSendSampleFail(false);
    setInvalidEmailFail(false);
  };


  const onSearchBtn = () => {
    clearWarnings();

    // validate email input
    if (!validateEmail(inputAddress)) {
      setInvalidEmailFail(true);
      return;
    }

    setLoaderStatus(true);

    console.log(inputAddress);
    // check for to input address
    // export canvas to Marketo (predefined email program)
    const body = {
      type: "Text",
      value: editorState.runCommand("gjs-get-inlined-html"),
      emailID: 1951, // TODO: replace with predefined email program
    };

    axios.post(`${API_HOST}/api/updateEmail`, body).then((res) => {
      if (res.data.success === true) {
        const body = {
          emailAddress: inputAddress,
          textOnly: textOnlyInput,
          emailID: 1951,
        };
        axios.post(`${API_HOST}/api/sendSample`, body).then((res) => {
          if (res.data.success === true) {
            setSendSampleSuccess(true);
            setLoaderStatus(false);
          } else {
            setSendSampleFail(true);
            setLoaderStatus(false);
          }
        });
      } else {
        setSendSampleFail(true);
        setLoaderStatus(false);
      }
    });
  };

  const onCloseBtn = () => {
    editorState.Modal.close();
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div id="SendSampleContainer">
          <Form>
            <FormItem label={"* Email Address"}>
              <Input
                id="toInput"
                placeholder="Enter To Address"
                showClearIcon={true}
                style={{ width: "100%" }}
                value={inputAddress}
                onInput={(e) => {
                  //   console.log(e.target.highlightValue);
                  setInputAddress(e.target.highlightValue);
                }}
                required
                tooltip="Email Address"
              >
                <Icon 
                  slot="icon"  
                  name="decline"
                  interactive={true}
                  onClick={(e) => {
                    // console.log('decline', e)
                    setInputAddress('');
                  }}
                />
              </Input>
            </FormItem>
            <FormItem label={"Send Text Only"}>
              <CheckBox
                id="textOnly"
                onChange={(e) => {
                  // console.log(e.target._state.checked)
                  setTextOnlyInput(e.target._state.checked);
                }}
                tooltip="Only sends text"
              />
            </FormItem>
          </Form>
          <Toolbar toolbarStyle="Clear">
            <ToolbarSpacer />
            <BusyIndicator active={loaderStatus} size="Medium" text="Loading">
              {sendSampleSuccess ? (
                <MessageStrip
                  design="Positive"
                  onClose={() => {
                    setSendSampleSuccess(false);
                  }}
                >
                  Sample Email Sent Successfully
                </MessageStrip>
              ) : (
                ""
              )}
              {sendSampleFail ? (
                <MessageStrip
                  design="Negative"
                  onClose={() => {
                    setSendSampleFail(false);
                  }}
                >
                  Failed to Send Sample Email
                </MessageStrip>
              ) : (
                ""
              )}
              {invalidEmailFail ? (
                <MessageStrip
                  design="Warning"
                  onClose={() => {
                    setInvalidEmailFail(false);
                  }}
                >
                  Invalid Email address
                </MessageStrip>
              ) : (
                ""
              )}
            </BusyIndicator>
            <Button onClick={onCloseBtn} design="Default">
              Close
            </Button>
            <Button onClick={onSearchBtn} design="Emphasized">
              Send
            </Button>
          </Toolbar>
        </div>
      </div>
    </>
  );
}

export default SendSampleEmail;
