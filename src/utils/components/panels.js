
export const panels = {
    defaults: [
      {
        id: "basic-actions",
        el: ".panel__basic-actions",
        buttons: [
          {
            id: "visibility",
            active: true, // active by default
            className: "btn-toggle-borders",
            label: '<i class="fa fa-clone"></i>',
            command: "sw-visibility", // Built-in command
          },
        ],
      },
      {
        id: "editor-actions",
        el: ".panel__editor",
        buttons: [
          {
            id: "saveDb",
            className: "fa fa-paper-plane btn-save",
            command: "saveDb",
          },
          {
            id: "cmd-clear",
            className: "fa fa-trash",
            command: "cmd-clear",
          },
          {
            id: "undo",
            className: "fa fa-undo",
            command: "undo",
          },
          {
            id: "redo",
            className: "fa fa-repeat",
            command: "redo",
          },
          {
            id: "export",
            className: "fa fa-download",
            command: "export",
          },
          {
            id: "preview",
            className: "fa fa-eye",
            command: "preview",
          },
        ],
      },
      {
        id: "panel-devices",
        el: ".panel__devices",
        buttons: [
          {
            id: "device-desktop",
            label: '<i class="fa fa-television"></i>',
            command: "set-device-desktop",
            active: true,
            togglable: false,
          },
          {
            id: "device-mobile",
            label: '<i class="fa fa-mobile"></i>',
            command: "set-device-mobile",
            togglable: false,
          },
        ],
      },
    ],
  };
  
  export const addPanels = (editor) => {
    editor.Panels.addPanel({
      id: "myPanel",
      visible: true,
      buttons: [
        {
          id: "pttAssests",
          className: "fa fa-globe",
          attributes: { title: "Set PTT ID" },
          command(editor) {
            editor.Modal.open({
              title: "Set PTT ID",
              content: document.getElementById("PttPanelContainer"),
            });
          },
        },
        {
          id: "importHTML",
          className: "gjs-pn-btn fa fa-file-arrow-down",
          attributes: { title: "Import HTML" },
          command(editor) {
            editor.Modal.open({
              title: "Upload HTML file",
              content: document.getElementById("ImportPanelContainer"),
            });
          },
        },
        {
          id: "validateLinks",
          className: "gjs-pn-btn fa fa-file-circle-check",
          attributes: { title: "Validate Parameters" },
          command(editor) {
           // LinkValidation(editor);
            editor.Modal.open({
              title: "Validate Links for PTT ID",
              content: document.getElementById('LinkValPanelContainer')
            });
          },
        },
        {
          id: "sendSampleEmail",
          className: "gjs-pn-btn fa fa-paper-plane",
          attributes: { title: "Send Sample Email" },
          command(editor) {
            editor.Modal.open({
              title: "Send Sample Email",
              content: document.getElementById("SendSampleContainer"),
            });
          },
        },
        {
          id: "exportHTML",
          className: "gjs-pn-btn fa-solid fa-file-export",
          attributes: { title: "Export HTML" },
          command(editor) {
            editor.Modal.open({
              title: "Export to Marketo",
              content: document.getElementById("ExportPanelContainer"),
            });
          },
        }
      ],
    });
  };
  