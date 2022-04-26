import React, { useState, useEffect, useMemo, useContext } from "react";
import { EditorContext } from "../../context/EditorContext";
import { API_HOST } from "../../utils/api";
import axios from "axios";
import {
  Input,
  List,
  StandardListItem,
  Label,
  ListMode,
  Text,
  Toolbar,
  Title,
  Form,
  FormItem,
  TitleLevel,
  ToolbarSpacer,
  Select,
  Option,
  Button,
  BusyIndicator,
  MessageStrip,
} from "@ui5/webcomponents-react";

export function ExportPanel(props) {
  const { editorState, setEditorState, pttState, setPttState } =
    useContext(EditorContext);
  const {} = props;
  const [selectedEmail, setSelectedEmail] = useState();
  const [emailData, setEmailData] = useState();
  const [programID, setProgramID] = useState();
  const [tokenDefaultValue, setTokenDefaultValue] = useState();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateFail, setUpdateFail] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [emailNotSelected, setEmailNotSelected] = useState(false);
  const [emailDataStatus, setEmailDataStatus] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [emailListFail, setEmailListFail] = useState(false);

  useEffect(() => {
    if (editorState) {
      editorState.on("modal:open", (props) => {
        if (editorState.Modal.getTitle() === "Export to Marketo") {
          setTokenDefaultValue(false);
          validateTokenDefaultValue();
          if (pttState) {
            setEmailDataStatus(false);
            clearWarnings();
            setProgramID();
            setEmailData();
            axios
              .get(`${API_HOST}/api/ptt/getAssetsById?` + "id=" + pttState) // to get marketoProgramId
              .then((data) => {
                console.log(data);
                setProgramID(data?.data[0].promotionalTacticName);
                axios
                  .get(`${API_HOST}/api/getFoldersPerProgram`, {
                    // get folders of the program
                    params: { id: data?.data[0].marketoProgramId },
                  })
                  .then((response) => {
                    const folderID = response.data[0].id;
                    getEmailsPerFolderId(folderID).then((response) => {
                        let _emailList = emailDataList(response);
                        console.log('email List' + _emailList)
                        setEmailData(_emailList);
                        setEmailDataStatus(true)
                    }
                    );
                  })
                  .catch((error) => {
                    console.log(error);
                    setApiError(true);
                    setEmailDataStatus(true);
                    setEmailData();
                    setProgramID(" ");
                  });
              })
              .catch((error) => {
                console.log(error);
                setApiError(true);
                setEmailDataStatus(true);
                setEmailData();
                setProgramID(" ");
              });
          }
        }
      });
    }
  }, [editorState, pttState]);

  const validateTokenDefaultValue = () => {
    var div = document.createElement("div");
    div.innerHTML = editorState.runCommand("gjs-get-inlined-html");

    const tokenValue = div.innerText.includes("INSERT DEFAULT VALUE");

    if (tokenValue) {
      console.log("contains default value");
      setTokenDefaultValue(true);
    }
  };

  const emailDataList = (response) => {
    const emailList = [];
    console.log(response)
    const emailInfo = response.result;
    if (emailInfo != null && emailInfo.length > 0) {
        console.log(emailInfo)
        emailInfo.forEach((i) => {
            emailList.push({
                "id": i.id,
                "emailName": i.name
            })
        })
    }
    return emailList;
}

  const onEmailChange = (e) => {
    setSelectedEmail(e.detail.selectedOption.value);
  };

  const getEmailsPerFolderId = (id) => {
    const folderId = id;
    const reponse = axios.post(`${API_HOST}/api/getEmailsList`, { id: folderId })
        .then(function (response) {
          if(response.data.success === true){
            console.log(response.data)
            return response.data;
          }else{
            setEmailDataStatus(true)
            setEmailListFail(true)
            setEmailData()
          }

        }).catch((error) => {
            setEmailDataStatus(true)
            setApiError(true)
            setEmailData()
            console.log(error)
            return
        })


    return reponse;
}

  const onEmailClick = () => {
    editorState.Modal.close();
    editorState.Modal.open({
      title: "Create Email",
      content: document.getElementById("CreateEmailPanelContainer"),
    });
  };

  const onExportClick = () => {
    clearWarnings();
    setLoaderStatus(true);
    if (selectedEmail != null) {
      setEmailNotSelected(false);

      const body = {
        type: "Text",
        value: editorState.runCommand("gjs-get-inlined-html"),
        emailID: selectedEmail,
      };

      console.log(body);
      axios
        .post(`${API_HOST}/api/updateEmail`, body)
        .then(function (response) {
          console.log(response.data);

          if (response.data.success === true) {
            setUpdateSuccess(true);
            setLoaderStatus(false);
          } else {
            setUpdateFail(true);
            setLoaderStatus(false);
          }
        })
        .catch(function (error) {
          setApiError(true);
          console.log(error);
        });
    } else {
      setEmailNotSelected(true);
      setLoaderStatus(false);
    }
  };

  const onCloseClick = () => {
    editorState.Modal.close();
  };

  const clearWarnings = () => {
    setUpdateFail(false);
    setUpdateSuccess(false);
    setApiError(false);
    setEmailListFail(false)
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div id="ExportPanelContainer">
          {pttState ? (
            <>
              <Form>
                <FormItem label={"Program: "}>
                  <BusyIndicator
                    active={!programID ? true : false}
                    size="Medium"
                    text="Loading"
                  >
                    <Label>{programID}</Label>
                  </BusyIndicator>
                </FormItem>
                <FormItem label={"Email: "}>
                  <BusyIndicator
                    active={!emailDataStatus ? true : false}
                    size="Medium"
                    text="Loading"
                  >
                    <Select
                      id="emailDropdown"
                      onChange={onEmailChange}
                      style={{ width: "100%" }}
                    >
                      <Option> </Option>
                      {emailData?.map((i) => {
                        return <Option value={i.id}>{i.emailName}</Option>;
                      })}
                    </Select>
                    <br></br>
                  </BusyIndicator>
                </FormItem>
              </Form>
              <br></br>
              {tokenDefaultValue ? (
                <MessageStrip
                  design="Warning"
                  onClose={() => {
                    setTokenDefaultValue(false);
                  }}
                >
                  Tokens default value is not set, please replace "INSERT
                  DEFAULT VALUE" with your desired value
                </MessageStrip>
              ) : (
                ""
              )}
              <Toolbar toolbarStyle="Clear">
                <ToolbarSpacer />

                <BusyIndicator
                  active={loaderStatus}
                  size="Medium"
                  text="Loading"
                >
                  {updateSuccess ? (
                    <MessageStrip
                      design="Positive"
                      onClose={() => {
                        setUpdateSuccess(false);
                      }}
                    >
                      Email Updated Successfully
                    </MessageStrip>
                  ) : (
                    ""
                  )}
                  {updateFail ? (
                    <MessageStrip
                      design="Negative"
                      onClose={() => {
                        updateFail(false);
                      }}
                    >
                      Failed to Update the Email
                    </MessageStrip>
                  ) : (
                    ""
                  )}
                  {emailNotSelected ? (
                    <MessageStrip
                      design="Warning"
                      onClose={() => {
                        setEmailNotSelected(false);
                      }}
                    >
                      Email not selected
                    </MessageStrip>
                  ) : (
                    ""
                  )}
                  {emailListFail ? (
                    <MessageStrip
                      design="Negative"
                      onClose={() => {
                        setEmailListFail(false);
                      }}
                    >
                      Failed to get emails
                    </MessageStrip>
                  ) : (
                    ""
                  )}
                  {apiError ? (
                    <MessageStrip
                      design="Negative"
                      onClose={() => {
                        setApiError(false);
                      }}
                    >
                      The connection to Marketo is currently down. Please create
                      a ticket with a category of IMAS_MKT_EXEC.
                    </MessageStrip>
                  ) : (
                    ""
                  )}
                </BusyIndicator>

                <Button id="close" onClick={onCloseClick}>
                  Close
                </Button>
                <Button id="createEmail" onClick={onEmailClick}>
                  Create Email
                </Button>
                <Button
                  id="exportBtn"
                  onClick={onExportClick}
                  design={"Emphasized"}
                >
                  Update Email
                </Button>
              </Toolbar>
            </>
          ) : (
            <MessageStrip design="Warning">Please select PTT Id</MessageStrip>
          )}
        </div>
      </div>
    </>
  );
}

export default ExportPanel;
