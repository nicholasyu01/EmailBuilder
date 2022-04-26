const sectors = [ // this is being overriden by grapesjs-preset-newsletter
    {
      name: "General", // hidden by grapesjs-preset-newsletter
      open: false,
      properties: [
        "display",
        "float",
        "position",
        "top",
        "right",
        "left",
        "bottom",
        'test'
      ],
    },
    {
      name: "Dimension",
      open: false,
      properties: [
        "width",
        "height",
        "max-width",
        "min-height",
        "margin",
        "padding",
      ],
    },
    {
      name: "Typography",
      open: false,
      properties: [
        "font-family",
        "font-size",
        "font-weight",
        "letter-spacing",
        "color",
        "line-height",
        "text-align",
        "text-shadow",
      ],
    },
    {
      name: "Decorations",
      open: false,
      properties: [
        "background-color",
        "border-radius",
        "border",
        "box-shadow",
        "background",
      ],
    },
    {
      name: "Extra", // hidden by grapesjs-preset-newsletter
      open: false,
      properties: ["opacity", "transition"],
    },
  ];

  export default sectors;