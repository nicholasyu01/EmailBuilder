import React, { useState, useEffect, useContext, useCallback, useRef } from 'react'
import { Input, MessageBox, MessageBoxActions, Loader, FormItem, MessageBoxTypes, Form, List, StandardListItem, ListMode, Text, Toolbar, Title, TitleLevel, Select, ToolbarSpacer, Option, Button, Label, BusyIndicator, MessageStrip } from '@ui5/webcomponents-react';
import axios from 'axios';
import { EditorContext } from "../context/EditorContext";
import { API_HOST } from "../utils/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function ImportHTMLFromMkto() {

    const { editorState, setEditorState, pttState, setPttState } = useContext(EditorContext);
    const [programList, setProgramList] = useState([]);
    const [EmailList, setEmailList] = useState([]);
    const [programSelected, setProgramSelected] = useState(0);
    const [emailSelected, setEmailSelected] = useState(0);
    const [open, setOpen] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [importedHTML, setimportedHTML] = useState('');
   
   //const msgRef = useRef(null);
    const list = [];


    useEffect(() => {
        if (pttState != null && pttState > 0) {
            axios.get(`${API_HOST}/api/ptt/getAssetsById`, { params: { id: pttState } })
                .then(function (response) {
                    let _list = response.data;
                    _list.forEach(item => {

                        list.push({ id: item.marketoProgramId, name: item.promotionalTacticName })

                    })

                    //programID = response.data[0].marketoProgramId
                    //let filtered = list.filter((item, i, a) => a.indexOf(item.id) === i)
                    let filtered = [...list.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()];
                    setProgramList(filtered)
                    setProgramSelected(filtered[0].id);
                    setIsBtnDisabled(true);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, [pttState])

    useEffect(() => {
        if (programSelected) {
            setEmailList([]);
            axios.get(`${API_HOST}/api/getFoldersPerProgram/?id=${programSelected}`)
                .then(function (response) {
                    const folderID = response.data[0].id;
                    getEmailsPerFolderId(folderID).then((response) => {
                        let _emailList = emailDataList(response);
                        console.log('email List' + _emailList)
                        setEmailList(_emailList);
                    }
                    );
                    busyIndicator.active = false;
                    setIsBtnDisabled(true);
                })
                .catch(function (error) {
                    console.log(error);
                    busyIndicator.active = false;
                })
        }
    }, [programSelected])


    toast.configure()

    const notifyError = (msg) => {
        toast.error(msg, {
            position: "top-center"
        })
    }
    const busyIndicator = document.getElementById('busy-indicator');

    const getEmailsPerFolderId = (id) => {
        const folderId = id;
        const reponse = axios.post(`${API_HOST}/api/getEmailsList`, { id: folderId })
            .then(function (response) {
                console.log(response.data)
                return response.data;
            }).catch((error) => {
                console.log(error)
                return
            })


        return reponse;
    }

    const emailChangeHandler = (e) => {
        busyIndicator.active = true;
        let emailId = e.detail.selectedOption.dataset.id;
        if (emailId !== 0) {
            setEmailSelected(emailId)
            setIsBtnDisabled(false);
        }
        busyIndicator.active = false;
    }

    const getAllComponents = (model, result = []) => {
        result.push(model);
        model.components().each(mod => getAllComponents(mod, result))
        return result;
    }

    const onImportClick = (e) => {
        if (emailSelected !== 0) {
            const allComponents = getAllComponents(editorState.DomComponents.getWrapper());
            if (allComponents[0].attributes.components.models.length === 0) {
                getEmailContent()
            } else {
               /*  setOpen(true)
                setIsBtnDisabled(true) */
                getEmailContent()
            }
            console.log('event captured')
        }

    }

    const getEmailContent = () => {
        axios.post(`${API_HOST}/api/getEmailContent`, { id: emailSelected })
            .then(function (response) {
                var htmlContent = response.data.result[0].content;
                setimportedHTML(htmlContent)
                editorState.setComponents('')
                editorState.addComponents(htmlContent);

                setIsBtnDisabled(true);
                editorState.Modal.close();
            })
            .catch(function (error) {
                console.log(error);
                //busyIndicator.active = false;

            })
    }

    const handleClose = (event) => {
        if (event.detail.action === MessageBoxActions.OK) {
            getEmailContent()
        } else {
            console.log('Cancel is clicked !!')
        }
        setOpen(false);
        editorState.Modal.close();
    };

    return (
        <>
            {pttState != null && pttState > 0 ?
                <>
                    <FormItem label={"Select Email :"}>
                        <BusyIndicator id='busy-indicator' size='Medium' text='Loading...'>
                            {
                                programSelected > 0 ?
                                    <>
                                        <Select
                                            id='emailSelector'
                                            onChange={emailChangeHandler}
                                        >
                                            <Option  >Select Email</Option>
                                            {EmailList.map((item) => (
                                                <Option
                                                    key={item.id}
                                                    data-id={item.id}
                                                    value={item.id}
                                                >
                                                    {item.emailName + ' ' + item.id}
                                                </Option>
                                            ))}
                                        </Select>

                                        <Button onClick={onImportClick}
                                            design="Default"
                                            style={{ 'marginLeft': 4 + 'px' }}
                                            disabled={isBtnDisabled}
                                        > Import HTML From Marketo</Button>

                                    </>
                                    :
                                    ""
                            }
                        </BusyIndicator>
                    </FormItem>
                    <FormItem>
                        <Text >
                            {programSelected ? (
                                <MessageStrip
                                    design="Positive">
                                    Current Program ID: {programSelected} {' '}
                                    Program Name: {programList[0].name}
                                </MessageStrip>
                            ) : (
                                ""
                            )}
                        </Text>
                    </FormItem>
                </>
                :
                (<FormItem>
                    <MessageStrip design='Warning'>Please select PTT ID before importing any emails from Marketo Program</MessageStrip>
                </FormItem>
                )
            }
            {
                <MessageBox open={open} onClose={handleClose}>
                    Do you want to override existing HTML with new HTML?
                </MessageBox>

            }
            
        </>
    )
}

const emailDataList = (response) => {
    const emailList = [];
    console.log(response)
    const emailData = response.result;
    if (emailData != null && emailData.length > 0) {
        console.log(emailData)
        emailData.forEach((i) => {
            emailList.push({
                "id": i.id,
                "emailName": i.name
            })
        })
    }
    return emailList;
}

export default ImportHTMLFromMkto