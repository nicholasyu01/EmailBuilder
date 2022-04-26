import React, { useState, useEffect, useMemo, useContext } from "react";
import { EditorContext } from "../../context/EditorContext";
import { API_HOST } from "../../utils/api";
import axios from "axios";
import {
  Input,
  List,
  CheckBox,
  StandardListItem,
  Label,
  ListMode,
  Text,
  Toolbar,
  Form,
  FormItem,
  Title,
  TitleLevel,
  ToolbarSpacer,
  MessageStrip,
  Select,
  Link,
  Option,
  Button,
  BusyIndicator,
} from "@ui5/webcomponents-react";
import { senderProfileResults } from "../../scripts/senderProfilesResult";

export function CreateEmailPanel(props) {
  const { editorState, setEditorState, pttState, setPttState } =
    useContext(EditorContext);
  const {} = props;
  const [folderData, setFolderData] = useState();
  const [selectedFolder, setSelectedFolder] = useState();
  const [selectedReply, setSelectedReply] = useState();
  const [sendFormFail, setSendFormFail] = useState(false);
  const [sendFormSuccess, setSendFormSuccess] = useState(false);
  const [formFillMiss, setFormFillMiss] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [url, setUrl] = useState(false);
  const [sameEmail, setSameEmail] = useState(false);
  const [invalidEmailFail, setInvalidEmailFail] = useState(false);
  const [serverFail, setServerFail] = useState(false);
  const [folderDataStatus, setFolderDataStatus] = useState(false);
  const [emailName, setEmailName] = useState();

  useEffect(() => {
    if (pttState) {
      editorState.on("modal:open", (props) => {
        if (editorState.Modal.getTitle() === "Create Email") {
          setFolderDataStatus(false);
          clearWarnings();
          setSelectedReply(senderProfileResults[0].ReplyToEmail);
          axios
            .get(`${API_HOST}/api/ptt/getAssetsById?` + "id=" + pttState) // to get marketoProgramId
            .then((data) => {
              console.log(data);
                axios
                  .get(`${API_HOST}/api/getFoldersPerProgram`, {
                    params: { id: data?.data[0].marketoProgramId },
                  })
                  .then((req) => {
                    console.log(req)
                      setFolderData(req.data);
                      setSelectedFolder(req.data[0].id);
                      setFolderDataStatus(true);
                  });
            })
            .catch((error) => {
              setServerFail(true);
              setFolderData();
              setFolderDataStatus(true);
              console.log(error);
            });
        }
      });
    }
  }, [pttState]);

  const onFolderChange = (e) => {
    setSelectedFolder(e.detail.selectedOption.value);
  };

  const clearWarnings = () => {
    setSendFormFail(false);
    setSendFormSuccess(false);
    setFormFillMiss(false);
    setInvalidEmailFail(false);
    setServerFail(false);
    setSameEmail(false)
  };

  const onReplyChange = (e) => {
    console.log(e.detail.selectedOption.value);
    setSelectedReply(e.detail.selectedOption.value);
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const submit = (e) => {
    setLoaderStatus(true);
    clearWarnings();
    if (!validateEmail(document.getElementById("fromEmail").value)) {
      setInvalidEmailFail(true);
      setLoaderStatus(false);
      return;
    }
    if (
      document.getElementById("fromName").value != "" &&
      document.getElementById("subject").value != "" &&
      document.getElementById("name").value != ""
    ) {
      const fromEmail = document.getElementById("fromEmail").value;
      const fromName = document.getElementById("fromName").value;
      const subject = document.getElementById("subject").value;
      var operational = new Boolean(false);

      if (document.getElementById("operational").checked) {
        operational = true;
      }

      const name = document.getElementById("name").value;
      let finalData = {
        name: name,
        folder: selectedFolder, // need this id
        template: 1,
        fromEmail: fromEmail,
        fromName: fromName,
        replyEmail: selectedReply, // need this address
        subject: subject,
        operational: `${operational}`,
      };

      console.log(finalData);
      axios
        .post(`${API_HOST}/api/createEmail`, finalData)
        .then((res) => {
          console.log("create email", res);
          if (res.data.success === false) {
            if (
              res.data.errors[0].message ===
              "Email with the same name already exists"
            ) {
              setSameEmail(true);
              setLoaderStatus(false);
            }
          } else {
            if (res.data.success === true) {
              setUrl(res.data.result[0].url);
              const body = {
                type: "Text",
                value: editorState.runCommand("gjs-get-inlined-html"),
                emailID: res.data.result[0]?.id,
              };
              console.log(body);
              axios
                .post(`${API_HOST}/api/updateEmail`, body)
                .then(function (response) {})
                .catch(function (error) {
                  setServerFail(true);
                  console.log(error);
                });
              setSendFormSuccess(true);
              setLoaderStatus(false);
            } else {
              setSendFormFail(true);
              setLoaderStatus(false);
            }
          }
        })
        .catch((err) => {
          setServerFail(true);
          console.log(err);
        });
    } else {
      setFormFillMiss(true);
      setLoaderStatus(false);
    }
  };

  const onCloseBtn = () => {
    clearWarnings();
    editorState.Modal.close();
    editorState.Modal.open({
      title: "Export to Marketo",
      content: document.getElementById("ExportPanelContainer"),
    });
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div id="CreateEmailPanelContainer">
          <Form>
            <FormItem label={"*From Email"}>
              <Input
                className="fromEmail"
                id="fromEmail"
                value="sap@mail.sap.com"
                style={{ width: "100%" }}
                required
              />
            </FormItem>
            <FormItem label={"*Email Name"}>
              <Input
                className="name"
                id="name"
                required
                style={{ width: "100%" }}
                onInput={(e) => {
                  //   console.log(e.target.highlightValue);
                  setEmailName(e.target.highlightValue);
                }}
              />
            </FormItem>
            <FormItem label={"*From Name"}>
              <Input
                className="fromName"
                id="fromName"
                style={{ width: "100%" }}
                required
              />
            </FormItem>
            <FormItem label={"*Folder"}>
              <BusyIndicator
                active={!folderDataStatus ? true : false}
                size="Medium"
                text="Loading"
              >
                <Select
                  id="folder"
                  onChange={onFolderChange}
                  style={{ width: "100%" }}
                >
                  {folderData?.map((i) => {
                    return <Option value={i.id}>{i.name}</Option>;
                  })}
                </Select>
              </BusyIndicator>
            </FormItem>
            <FormItem label={"*Reply-to Address"}>
              <Select
                id="replyEmail"
                onChange={onReplyChange}
                style={{ width: "100%" }}
              >
                {senderProfileResults.map((i) => {
                  return (
                    <Option value={i.ReplyToEmail}>{i.ReplyToEmail}</Option>
                  );
                })}
              </Select>
            </FormItem>
            <FormItem label={"*Subject"}>
              <Input
                className="subject"
                id="subject"
                style={{ width: "100%" }}
                required
              />
            </FormItem>
            <FormItem label={"Operational"}>
              <CheckBox className="operational" id="operational" />
            </FormItem>
          </Form>
          <Toolbar toolbarStyle="Clear">
            <ToolbarSpacer />
            <BusyIndicator active={loaderStatus} size="Medium" text="Loading">
              {sendFormSuccess ? (
                <MessageStrip
                  design="Positive"
                  onClose={() => {
                    setSendFormSuccess(false);
                  }}
                >
                  Email is created successfully, click <Link href={url} target="_blank"> {emailName} </Link> to open it in Marketo.
                  
                </MessageStrip>
              ) : (
                ""
              )}
              {sendFormFail ? (
                <MessageStrip
                  design="Negative"
                  onClose={() => {
                    setSendFormFail(false);
                  }}
                >
                  Failed to create the email
                </MessageStrip>
              ) : (
                ""
              )}
              {formFillMiss ? (
                <MessageStrip
                  design="Warning"
                  onClose={() => {
                    setFormFillMiss(false);
                  }}
                >
                  Please fill all the required fields before submitting
                </MessageStrip>
              ) : (
                ""
              )}
              {sameEmail ? (
                <MessageStrip
                  design="Negative"
                  onClose={() => {
                    setSameEmail(false);
                  }}
                >
                  Failed to create the email. Email with the same name already
                  exists, please choose a different name
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
                  Invalid Email Address
                </MessageStrip>
              ) : (
                ""
              )}
              {serverFail ? (
                <MessageStrip
                  design="Negative"
                  onClose={() => {
                    setServerFail(false);
                  }}
                >
                  The connection to Marketo is currently down. Please create a
                  ticket with a category of IMAS_MKT_EXEC.
                </MessageStrip>
              ) : (
                ""
              )}
            </BusyIndicator>
            <Button onClick={onCloseBtn} design="Default">
              Close
            </Button>
            <Button id="submit" onClick={submit} design="Emphasized">
              Submit
            </Button>
          </Toolbar>
        </div>
      </div>
    </>
  );
}
export default CreateEmailPanel;
