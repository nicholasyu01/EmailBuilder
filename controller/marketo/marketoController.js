const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const base64 = require('base-64');
let querystring = require('querystring');
const { json } = require('express/lib/response');
const { format } = require('url');
const { off } = require('process');
const FormData = require('form-data');
const {corsOptions} = require('../../server');
const bodyparser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

let username = 'P2004345748'; // TODO to be inserted from passvault !important
let password = 'F#f-ZNXxVXbb3FKz'; // TODO to be inserted from passvault !important

const MarketoRequestCustomTokens = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/Get_Program_Token"

const MarketoRequesCreateFolder = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/CreateFolder"
const MarketoRequestCreateEmail = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/CreateEmail"

const MarketoRequestGetFolder = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/GetFolder"
const MarketoRequesGetProgramData = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/GetProgramData"


const requestEndpoint_get_foldersList = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/Get_Programs";
const requestEndpoint_get_emailList_by_folderId = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/GetEmail";
const requestEndpoint_get_emailContent = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/Get_Email_Full_Content";

app.post('/api/getCustomTokens', cors(corsOptions), async (req, res) => {

    const bodyJson = { "root": {
            "id": req.body.id,
            "type": "program"
            }
        }

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(bodyJson),
        headers: {
            Authorization: 'Basic ' + base64.encode(username + ":" + password),
        }
    }

    const response = await fetch(MarketoRequestCustomTokens, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse.result);
});

app.post('/api/getEmail', cors(corsOptions), async (req, res) => {

    const requestEndpoint = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/GetEmail";

    let bodyParam = {
        "status": req.body.status, 
        "Folder": req.body.folder 
    };

    console.log(JSON.stringify(bodyParam));

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(bodyParam),
        headers: {
            Authorization: 'Basic ' + base64.encode(username + ":" + password)
        }
    }

    const response = await fetch(requestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    res.json(jsonResponse);
});

app.post('/api/updateEmail', cors(corsOptions), async (req, res) => {

    const requestEndpoint = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/UpdateEmail";

    let bodyParam = {
        "type": req.body.type,
        "Value": req.body.value
    };

    console.log(querystring.stringify(bodyParam));

    const fetchOptions = {
        method: 'POST',
        body: querystring.stringify(bodyParam),
        headers: {
            Authorization: "Basic " + base64.encode(username + ":" + password),
            'Content-Type': 'application/x-www-form-urlencoded',
            'emailid': req.body.emailID
        }
    }

    const response = await fetch(requestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    res.json(jsonResponse);
});

app.get('/api/getFoldersPerProgram', cors(corsOptions), async (req, res) => {
    const programID = req.query.id
    let programData = await getParentFolder(programID,)

    //All folders at lvl 1
    const subFolders = await getSubFolders(programData.folderParent.value, programID)

    programData = (
        {   ...programData,
            subFolders: subFolders
        }
    )

    const emailFolder = await validateEmailStructure(programData)

    res.send(emailFolder.result)
});

// parentFolder function Payload Example
//    { type: 'Folder', value: 652, folderName: 'E_Posada' }
async function getParentFolder(programID) {

    let bodyParam = {
        program: {
            id: programID,
            type: "Program"
        }
    };

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(bodyParam),
        headers: {
            Authorization: "Basic " + base64.encode(username + ":" + password)
        }
    }

    const response = await fetch(MarketoRequesGetProgramData, fetchOptions)
    const jsonResponse = await response.json();
    
    return {
        program: {
            id: jsonResponse.result[0].id,
            type: "Program"    
        },
        folderParent: jsonResponse.result[0].folder
    }
        
    //return jsonResponse.result[0].folder
}

//Get all subFolders of Parent Folder and filter by Program ID
async function getSubFolders(root, programID) {

    let bodyParam = {
        root: {
            id: root,
            type: "Folder"
        }
    };

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(bodyParam),
        headers: {
            Authorization: "Basic " + base64.encode(username + ":" + password)
        }
    }

    let subFolders = []
    const response = await fetch(MarketoRequestGetFolder, fetchOptions)
    const jsonResponse = await response.json();

    if(programID == null){
        return jsonResponse
    } else {
        jsonResponse.result.forEach(item => {
            if (item.parent.id == programID){
                subFolders.push(item)
            }
        })

        return subFolders;    
    }

}

async function validateEmailStructure(programData) { 
    const initEmailFolders = async(parent) => {
        const assetFolder = await createFolder("02 Local Assets", parent)
        return await createFolder("02.1 Emails", assetFolder.result[0].folderId)
    }

    const findSubFolderbyName = (subFolder, folderName) => {
        const auxFolder = subFolder.find(folder => {
            if(folder.name == folderName){
                return folder
            }
        })

        return auxFolder
    }

    if(!programData.subFolders.length){
        return initEmailFolders(programData.program)
    }

    
    //Lvl 1 find - 02 Local Assets
    const localAssetFolder = findSubFolderbyName(programData.subFolders ,"02 Local Assets")

    if(localAssetFolder != null){
        emailFolder = await getSubFolders(localAssetFolder.folderId.id, null)
        const localEmailFolder = findSubFolderbyName(emailFolder.result ,"02.1 Emails")

        if(localEmailFolder != null){
            const subFoldersEmail = await getSubFolders(localEmailFolder.folderId.id, null)

            if(!subFoldersEmail.result.slice(1).length) {
                return subFoldersEmail
            }

            return subFoldersEmail
        } else {
            return await createFolder("02.1 Emails", localAssetFolder.folderId)
        }
    } else {
        return await initEmailFolders(programData.program)
    }

}

//Return all the new folder info
async function createFolder(folderName, folderParent) { 
    // Example = { name: '02.1 Emails', parent: '{"id":1304,"type":"Program"}' }
    const bodyJson = {
        Name: folderName,
        parent: folderParent
    }

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(bodyJson),
        headers: {
            Authorization: "Basic " + base64.encode(username + ":" + password)
        }
    }

    const response = await fetch(MarketoRequesCreateFolder, fetchOptions)
    const jsonResponse = await response.json();

    if(!jsonResponse.success){
        console.log(jsonResponse.errors)
    }

    return jsonResponse
}

app.post('/api/createEmail', cors(corsOptions), async (req, res) => {
    let folderId = req.body.folder
    //let newFolder = undefined

    /*
    if(req.body.folderName != undefined){
        const folderParent = {id:req.body.folderId, type: "Folder"}
        newFolder = await createFolder(req.body.folderName, folderParent)
        folderId = newFolder.result[0].folderId.id
    }*/

    const bodyJson = {
        Name: req.body.name,
        folder: {
            id: folderId,
            type: "Folder"
        },
        template: 1,
        fromEmail: req.body.fromEmail,
        fromName: req.body.fromName,
        replyEmail: req.body.replyEmail,
        subject: req.body.subject,
        operational: req.body.operational
    }

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(bodyJson),
        headers: {
            Authorization: "Basic " + base64.encode(username + ":" + password)
        }
    }

    const response = await fetch(MarketoRequestCreateEmail, fetchOptions)
    const jsonResponse = await response.json();

    if(!jsonResponse.success){
        console.log(jsonResponse)
    }

    res.send(jsonResponse)
})

app.post('/api/getEmailContent', cors(corsOptions), async (req, res) => {
    const keyword = req.query.keyword_query;
    const bodyParam = { 
       
        "root": {
                "id": req.body.id,
                "type": "HTML"
            }
        };
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(bodyParam),
        headers: {
            Authorization: 'Basic ' + base64.encode(username + ":" + password),
        },
    }
    const response = await fetch(requestEndpoint_get_emailContent, fetchOptions)
    console.log(response)
    const jsonResponse = await response.text();
    console.log(jsonResponse);
    res.send(jsonResponse);
});



app.post('/api/getEmailsList', cors(corsOptions), async (req, res) => {
    const keyword = req.query.keyword_query;
    const bodyParam = { 
       
        "program": {
                "id": req.body.id           
            }
        };
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(bodyParam),
        headers: {
            Authorization: 'Basic ' + base64.encode(username + ":" + password),
        },
    }
    
    
    const response = await fetch(requestEndpoint_get_emailList_by_folderId, fetchOptions)
    console.log(response)
    const jsonResponse = await response.text();
    console.log(jsonResponse);
    res.send(jsonResponse);
});

app.post('/api/getFolderList', cors(corsOptions), async (req, res) => {
    /* const bodyParam = {
        "root": {
            "id": 45,
            "type": "Folder"
        }

    }; */
    const fetchOptions = {
        method: 'POST',
        //body : JSON.stringify(bodyParam),
        headers: {
            Authorization: 'Basic ' + base64.encode(username + ":" + password)
           
        },
    }
    const response = await fetch(requestEndpoint_get_foldersList, fetchOptions)
    console.log(response)
    const jsonResponse = await response.text();
    console.log(jsonResponse);
    res.send(jsonResponse);
});

app.post('/api/sendSample', cors(corsOptions), async (req, res) => {

    const requestEndpoint = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/sendSampleEmail"; // get CPI flow 

    let bodyParam = {
        "emailAddress": req.body.emailAddress,
        'textOnly': req.body.textOnly,
    };

    const fetchOptions = {
        method: 'POST',
        body: querystring.stringify(bodyParam),
        headers: {
            Authorization: "Basic " + base64.encode(username + ":" + password),
            'Content-Type': 'application/x-www-form-urlencoded',
            'Emailid': req.body.emailID
        }
    }

    const response = await fetch(requestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    res.json(jsonResponse);
});

module.exports = app;
