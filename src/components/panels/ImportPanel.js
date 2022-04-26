import React, { useState, useContext, useRef } from "react";
import { EditorContext } from "../../context/EditorContext";
import { FileUploader, Button,MessageBox, MessageBoxActions, ToggleButton, Toast, Form, FormItem } from "@ui5/webcomponents-react";
import ImportHTMLFromMkto from "../ImportHTMLFromMkto";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function ImportPanel(props) {

    const { editorState, setEditorState, pttState, setPttState } = useContext(EditorContext);
    const { } = props;
    const [importedHTML, setimportedHTML] = useState();
    const [open, setOpen] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    toast.configure()

    const notifyError = (msg) => {
        toast.error(msg, {
            position: "top-center"
        })
    }

    const onFileUpload = (e) => {
        const reader = new FileReader();
        reader.onload = handleFileLoad;
        reader.readAsText(e.detail.files[0]);
    }

    const handleFileLoad = (e) => {
        setimportedHTML(e.target.result);
        setIsBtnDisabled(false)
    }

    const getAllComponents = (model, result = []) => {
        result.push(model);
        model.components().each(mod => getAllComponents(mod, result))
        return result;
    }
    
    const onImportClick = (e) => {
       
        if (importedHTML) {
            const allComponents = getAllComponents(editorState.DomComponents.getWrapper());
             if (allComponents[0].attributes.components.models.length === 0) {
                editorState.addComponents(importedHTML);
            } else {
                setOpen(true);
            } 
        
        }
        else {
            notifyError('File is Empty !!! Please upload a valid HTML file')
        }
        document.getElementById('fileUploadBtn').value=''
        setIsBtnDisabled(true)
        editorState.Modal.close();
        
    }

    const handleClose = (event) => {
        if (event.detail.action === MessageBoxActions.OK) {
            editorState.setComponents('')
            editorState.addComponents(importedHTML)
        } else {
            console.log('Cancel is clicked !!')
        }
        setOpen(false);
    };
    

    return (
        <>
            <div style={{ display: "none" }}>
                <div id="ImportPanelContainer">
                    <Form>
                        <FormItem label={"Upload File :"}>
                            <FileUploader id="fileUploadBtn" 
                                onChange={onFileUpload} 
                                placeholder="Click to Upload a HTML File">
                            </FileUploader>

                            <Button id="fileSubmitBtn"  onClick={onImportClick} disabled={isBtnDisabled}>Import HTML</Button>
                        </FormItem>
                       
                        <ImportHTMLFromMkto ></ImportHTMLFromMkto>
                        
                    </Form>
                </div>
            </div>
            {
                <MessageBox open={open} onClose={handleClose}>
                    Do you want to override existing HTML with new HTML?
                </MessageBox>

            }
        </>
    );
}

export default ImportPanel;