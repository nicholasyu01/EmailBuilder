export const black = '#000000';
export const white = '#FFFFFF';
export const gold = '#F0AB00';
export const blue = '#008FD3';
export const grey1 = '#3C3C3C';
export const grey2 = '#424242';
export const grey3 = '#969696';
export const grey4 = '#C6C6C6';
export const grey5 = '#EAEAEA';
export const grey6 = '#FAFAFA';
export const grey0 = '#222222';
export const grey01 = '#727272' ;
export const blue1 = '#007DB8' ;
export const blueLight = '#CBE8F7' ;
export const blueLight1 = '#A5D3EA' ;
export const blueLight2 = '#89C9E8 ';
export const blueLight3 = '#43A2D0' ;
export const blueDark = '#006799 ';
export const blueDark1 = '#1E6A92' ;
export const red = '#D04512' ;
export const redLight = '#F4D7CC' ;
export const redLight1 = '#EEBFAE' ;
export const redLight2 = '#EEBFAE' ;
export const redLight3 = '#DE7E5B' ;
export const redDark = '#BB3E10' ;
export const redDark1 = '#A4360E' ;
export const goldLight = '#FBE8BC' ;
export const goldLight1 = '#F8DB96' ;
export const goldLight2 = '#F6CC6C' ;
export const goldLight3 = '#F3BC3A' ;
export const goldDark = '#D99700' ;
export const goldDark1 = '#966900' ;
export const green = '#4FB81C' ;
export const greenLight = '#C9EECF' ;
export const greenLight1 = '#A9E4B3' ;
export const greenLight2 = '#84D892' ;
export const greenLight3 = '#57CA6A' ;
export const greenDark = '#16912A' ;
export const greenDark1 = '#127823' ;
export const purple = '#970A82' ;
export const purpleLight = '#EBD1E8' ;
export const purpleLight1 = '#DFB5DA' ;
export const purpleLight2 = '#D193C9' ;
export const purpleLight3 = '#BE66B2' ;
export const purpleDark = '#760767' ;
export const purpleDark1 = '#610655' ;
// https://sap.frontify.com/document/68#/identity/colors
// https://sap.frontify.com/document/222629#/colors

export const spacer_none = '0px';
export const spacer_xxs = '4px';
export const spacer_xs = '8px';
export const spacer_s = '12px';
export const spacer_m = '20px';
export const spacer_l = '32px';
export const spacer_xl = '52px';
export const spacer_xxl = '84px';
// https://sap.frontify.com/document/68#/layout/spacing


const style = `
    :root {
        --green: #12de5d;
        --white: #ffffff;
    }

    body {
      width: 640px;
    }

    .bg-black {
      background-color: #000000;
    }

  .bg-white {
    background-color: #FFFFFF;
  }
  .text-align-center {
    text-align: center;
  }

  .txt-white {
    color: #FFFFFF !important;
}
    @media only screen and (max-width: 639px) {
        body {
          width: 480px;
        }
        .fifty-section {
          width: 100% !important;
          display: block;
        }
        .fifty-divider {
          width: 100% !important;
          display: block;
          border-top: 1px solid ${grey4};
        }
        .onethird-image {
          width: 100% !important;
          display: block;
          min-height: 100px !important;
          height: 100px !important;

        }
        .onethird-section {
          width: 100% !important;
          display: block;
          min-height: 100px !important;
          height: 100px !important;

        }
        .onethird-divider {
          width: 100% !important;
          display: block;
          border-top: 1px solid ${grey4};
        }
    }
    @media only screen and (max-width: 479px) {
      body {
          width: 320px;
        }
  }
    
    /*=============================FONTS======================*/
    .headline-black {
        font-family: Arial, sans-serif; 
        font-size: 28px; 
        font-weight: bold; 
        line-height: 35px;
        font-syle: normal; 
        color: ${black}; 
      }
    .headline-white {
        font-family: Arial, sans-serif; 
        font-size: 28px; 
        font-weight: bold; 
        line-height: 35px;
        font-syle: normal; 
        color: ${white}; 
    }
    .headline-gold {
        font-family: Arial, sans-serif; 
        font-size: 28px; 
        font-weight: bold; 
        line-height: 35px;
        font-syle: normal; 
        color: ${gold}; 
    }
    .subtitle {
        font-family: Arial, sans-serif; 
        font-size: 18px; 
        font-weight: 400; 
        line-height: 23px;
        font-syle: normal; 
        color: ${grey1}; 
    }
    .category {
        font-family: Arial, sans-serif; 
        font-size: 14px; 
        font-weight: bold; 
        line-height: 22px;
        font-syle: normal; 
        color: ${grey3}; 
    }
    .titles {
        font-family: Arial, sans-serif; 
        font-size: 18px; 
        font-weight: 400; 
        line-height: 23px;
        font-syle: normal; 
        color: ${black}; 
    }
    .paragraphs {
        font-family: Arial, sans-serif; 
        font-size: 16px; 
        font-weight: 400; 
        line-height: 22px;
        font-syle: normal; 
        color: ${grey1}; 
    }
    .group-headline {
        font-family: Arial, sans-serif; 
        font-size: 24px; 
        font-weight: bold; 
        line-height: 28px;
        font-syle: normal; 
        color: ${black}; 
    }
    .fine-print {
        font-family: Arial, sans-serif; 
        font-size: 12px; 
        font-weight: 400; 
        line-height: 22px;
        font-syle: normal; 
        color: ${grey0}; 
    }
    
    /*=============================BUTTONS======================*/
      .ds-button {
        padding: 0.5rem 1.25rem;
        font-size: 1rem;
        background-color: #969696;
        color: #ffffff;
        border-color: transparent;
        font-size: 1rem;
        color: #3c3c3c;
        font-family: "Arial", sans-serif; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        line-height: 1.5;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
            -ms-flex-align: center;
                align-items: center;
        padding: 0.5rem 1.25rem;
        border: 1px solid transparent;
        outline: none;
        line-height: 1.5;
        cursor: pointer;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        vertical-align: top;
        margin: 6px;
      }


    
      .ds-button--primary {
        background-color: ${blue1};
        color:  ${white};
        border-color: ${blue1};
       }
     
      .ds-button--primary:hover {
        background-color: ${blueDark1};
        border-color : ${blueDark1} ; 
        color : ${white} ;
      }
      .ds-button--primary:active { 
        background-color : ${blueDark} ; 
        border-color : ${blueDark} ; 
        color : ${white} ; 
      }
      .ds-button--primary:disabled { 
        background-color : ${grey4} ; 
        border-color : ${grey4} ; 
        color :  ${white};
      }
      .ds-button--primary:focus {
        background-color: ${blue1};
        border-color : ${blue1} ; 
        color : ${white} ;
        border : ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs};
      }
    
      .ds-button--secondary-hero {
        /* background-color: #ffffff;
        color: #007db8;
        border-color: #007db8; */
        background-color: #3C3C3C;
        color: #ffffff;
        border-color: #ffffff;
    }
    .ds-button--secondary-hero:hover, .ds-button--secondary-hero:focus {
        background-color: #1e6a92;
        color: #ffffff;
        border-color: transparent;
      }

      .ds-button--secondary {
         background-color: transparent;
        color: ${blue1};
        border-color: ${blue1};
      }
      
      .ds-button--secondary:hover{
        background-color: ${blueDark1};
        color: ${white};
        border-color: ${blueDark1};
        }
        .ds-button--secondary:focus {
         background-color: ${blue1};
         border-color : ${blue1} ;
         color : ${white} ; 
         border : ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs};
      }
      .ds-button--secondary:active
        { 
          background-color : transparent ;
          border-color : ${blueDark} ; 
          color : ${blue1} ;
         }
        .ds-button--secondary:disabled { 
          background-color : transparent ; 
          border-color : ${grey4} ; 
          color : ${grey4} ;
        }    

       

      .ds-button--Tertiary {
        color: blue;
      }
      .ds-button--Tertiary:hover {
         color: ${blueDark1};
      }
      .ds-button--Tertiary:focus {
        border-color : blue ; 
        color : blue ; 
        padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ; 
        Outer-Border : 2px ;
      }
      .ds-button--Tertiary:Active, .ds-button--Tertiary:Disabled {
        color: ${blueDark};
      }
     

      .ds-button--DestructiveAction {
        background-color: red;
        color: white;
        border-color: red;
      }
      .ds-button--DestructiveAction:hover
        { 
           background-color : ${redDark1} ;
           border-color : ${redDark1} ; 
           color : white ;
        }
         .ds-button--DestructiveAction:focus {
          background-color : red ; 
          border-color : red ; 
          color : white ; 
          padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ;
      }
      .ds-button--DestructiveAction:Active { 
        background-color :  ${redDark} ; 
        border-color :  ${redDark} ;
        color : white ; 
      }
      
      .ds-button--IconButton { 
        background-color : ${blue1} ;
         border-color : ${blue1} ; 
          color : white ; 
          icon: white ;
         }
         .ds-button--IconButton:hover{ 
            background-color : ${blueDark1} ; 
            border-color : ${blueDark1} ; 
            color : white ;
            icon: white ;
        }
      .ds-button--IconButton:focus {
          background-color : blue ; 
          border-color : blue ; 
          color : white ;
           icon: white ; 
          padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ;
      }
      .ds-button--IconButton:Active { 
        background-color : ${blueDark} ; 
        border-color : ${blueDark} ; 
        color : white ; 
        icon: white ;
       }
      .ds-button--IconButton:Disabled {
        background-color : ${grey4} ; 
        border-color : ${grey4} ; 
        color : white ; 
        icon: white ;
        }
        
        .ds-button--secWhite {
          background-color: ${white};
          color: ${white};
          opacity: 15% ;
          border-color : ${white} ;
          padding:  ${spacer_xs}  ${spacer_m}  ${spacer_xs} ${spacer_m};
        }

        .ds-button--secWhite:active, .ds-button--secWhite:disabled {
          background-color : ${white} ;
          opacity: 15% ;
          border-color : ${white} ; 
          color : ${white} ;
        }
        .ds-button--secWhite:hover { 
          background-color: ${white};
          border-color: ${white};
          color : ${black} ; 
        }
        
        .ds-button--secWhite:focus { 
          background-color: ${white};
          border-color: ${white};
          color : ${black} ;
          padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs}; 
        }
        
            
 .primaryNormal { Background : ${blue1} ; border : ${blue1} ; color : white }
.primaryHover { Background : ${blueDark1} ; Border :${blueDark1} ; color : white }
.primaryActive { Background : ${blueDark} ; Border : ${blueDark} ; color : white }
.primaryDisabled { Background : ${grey4} ; Border : ${grey4} ; color : white }
.primaryFocus { Background : ${blue1} ; Border : ${blue1} ; color : white ; padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} }

.secondaryNormal { Background : transparent ; Border : ${blue1} ; color : ${blue1} }
.secondaryHover { Background : ${blueDark1} ; Border : ${blueDark1} ; color : white }
.secondaryActive { Background : transparent ; Border : ${blueDark} ; color : blue }
.secondaryDisabled { Background : transparent ; Border : ${grey4} ; color : ${grey4} }
.secondaryFocus { Background : ${blue1} ; Border : ${blue1} ; color : white ; padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} }

.tertiaryNormal {color : blue  }
.tertiaryHover {color : ${blueDark1} }
.tertiaryActive { color : ${blueDark} }
.tertiaryDisabled { color : ${blueDark} }
.tertiaryFocus { Border : blue ; color : blue ; padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ; Outer-Border : 2px}

.DestructiveActionNormal { Background : red ; Border : red ; color : white }
.DestructiveActionHover { Background : ${redDark1} ; Border : ${redDark1} ; color : white }
.DestructiveActionActive { Background :  ${redDark} ; Border :  ${redDark} ; color : white }
.DestructiveActionFocus { Background : red ; Border : red ; color : white ; padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} }

.ButtonWithIconNormal {  Background : blue ; Border : blue ; color : white ; icon: white }
.ButtonWithIconHover { Background : ${blueDark1} ; Border : ${blueDark1} ; color : white ; icon: white}
.ButtonWithIconActive { Background : ${blueDark} ; Border : ${blueDark} ; color : white ; icon: white}
.ButtonWithIconDisabled { Background : ${grey4} ; Border : ${grey4} ; color : white ; icon: white }
.ButtonWithIconFocus { Background : blue ; Border : blue ; color : white ; icon: white ; padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} }

.IconButtonNormal { Icon : blue ; padding: 0 ${spacer_m} 0 ${spacer_m} }
.IconButtonHover {Icon : ${blueDark1} ; padding: 0 ${spacer_m} 0 ${spacer_m} }
.IconButtonActive { Icon : ${blueDark} ; padding: 0 ${spacer_m} 0 ${spacer_m} }
.IconButtonDisabled { Icon : ${grey4} ; padding: 0 ${spacer_m} 0 ${spacer_m} }
.IconButtonFocus { Icon : blue ; border-color : blue ; border : 2px ; padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} }

.secondaryWhiteDefault {  Background : white ; Border : white ; color : white ; padding:  ${spacer_xs}  ${spacer_m}  ${spacer_xs} ${spacer_m} }
.secondaryWhiteHover { Background : white ; Border : white ; color : black }
.secondaryWhiteActive { Background : white ; Border : white ; color : white }
.secondaryWhiteDisabled { Background : white ; Border : white ; color : white }
.secondaryWhiteFocus { Background : white ; Border : white ; color : black ; padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} }

.IconButtonWhiteNormal { Icon : ${grey4} ; padding: 0 ${spacer_m} 0 ${spacer_m} }
.IconButtonWhiteHover {Icon : white ; padding: 0 ${spacer_m} 0 ${spacer_m} }
.IconButtonWhiteActive { Icon : white ; padding: 0 ${spacer_m} 0 ${spacer_m} }
.IconButtonWhiteDisabled { Icon : ${grey2} ; padding: 0 ${spacer_m} 0 ${spacer_m} }
.IconButtonWhiteFocus { Icon : white ; border-color : blue ; border : 2px ; padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs}}


      /*=============================LAYOUTS======================*/
      .full-width-outer-grid {
        // background-color: red;
        width: 100%;
        min-height: 100px;
        height: 100px !important;
        margin:0;
        padding:0 0 0 0;
      }
      .full-width-inner-grid {
        // background-color: red;
        width: 100%;
        min-height: 100px;
        height: 100px !important;
        margin:0;
        padding:0 28px 0 28px;
      }
      .fifty-fifty-vertical {
        // background-color: red;
        width: 100%;
        min-height: 100px;
        height: 100px !important;
        margin:0;
        padding:0 28px 0 28px;
      }
      .fifty-fifty-horizontal {
        // background-color: red;
        width: 100%;
        min-height: 100px;
        height: 100px !important;
        margin:0;
        padding:0 28px 0 28px;
      }
      .fifty-fifty-split {
        width: 100%;
        min-height: 100px;
        height: 100px !important;
        margin:0;
        padding:0 28px 0 28px;
      }
      .fifty-section {
        width: 50%;
        margin:0;
        padding:0 0 0 0;
        min-height: 100px;
      }
      .fifty-divider {
        width: 0%;
        // border-left: 1px solid${grey4};
        border-right: 1px solid ${grey4};
      }
      .onethird-image {
        width: 33%;
        min-height: 100px;
        height: 100px !important;
        margin:0;
        padding:0;
      }
      .onethird-section {
        width: 66%;
        min-height: 100px;
        height: 100px !important;
        margin:0;
        padding:0;
      }

    /*=============================Lists======================*/
    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    ol {
        display: block;
        list-style-type: decimal;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }
    .list-icon {
      width: 100px;
      min-height: 50px;
      height: 100px !important;
      text-align: center;
    }
    .icon-list-section {
      padding-top: ${spacer_s};
      padding-bottom: ${spacer_s};

    }

    /*=============================Links======================*/
    .a {
      color: ${blue1};
      font-family: "Arial", sans-serif;  
    }
    .a--linkwitharrow {
      color: ${blue1};
      arrow : ${blue1};
      icon-size : 12px;
      border : 2px;
    }
    .a--padding {
      padding: ${spacer_xxs} ${spacer_xxs} ${spacer_xxs} ${spacer_xxs};
    }
    .a--linkwitharrow:hover {
      color: ${blueDark};
      arrow : ${blueDark};
      icon-size : 12px;
      border : 2px;         
    }
    .a--linkwitharrow:active, .a--linkwitharrow:visited {
      color: ${blue1};
      arrow : ${blue1};
      border : 2px;
      icon-size : 12px;
     }
    .a--linkwitharrow:focus {
      color: ${blue1};
      arrow : ${blue1};
      border-color : ${blue1};
      icon-size : 12px;
      border : 2px;
     }
     .a--linkwithoutarrow {
      color: ${blue1};
      border : 2px;
      }
    .a--linkwithoutarrow:hover {
      color: ${blueDark};
      border : 2px;
       }
    .a--linkwithoutarrow:active, .a--linkwithoutarrow:visited {
      color: ${blue1};
      border : 2px;
    }
    .a--linkwithoutarrow:focus {
      color: ${blue1};
      border-color : ${blue1};
      border : 2px;
     }

    /*=============================Section Divider======================*/
    .spacerS{
      min-height: ${spacer_s};
      }
    .spacerM{ 
      min-height: ${spacer_m};
    }
    .spacerL{ 
      min-height: ${spacer_l};
    }
    .spacerXL{ 
      min-height: ${spacer_xl};
    }
    .spacerXXL{ 
      min-height: ${spacer_xxl};
    }

    /*============================= Masthead ======================*/

    .masthead-contiainer {
        width: 100%;
        height: 64px;
        margin:0;
        padding:0 16px 0 16px;
        vertical-align: middle;
        
    }
    .masthead-logo-left {
        width: 50%;
        max-height: 32px; /* sub brand note and co brand */
    }
    .masthead-logo-right {
        text-align: right;
        width: 50%;
        max-height: 32px; /* sub brand note and co brand */

    }
    .masthead-topbar {
        height: 10px;
        background-color: ${black}; /* sub brand note and co brand */

    }
    .masthead-logo {
      height:32px;
    }
    .thebestrun {
      margin-right:10px !important;

  }
    @media only screen and (max-width: 639px) {

        .masthead-logo {
          max-width: 100%;
          max-height: 32px;
        }
        .thebestrun {
          display: none !important;  
      }
    }

    
    /*============================= Hero ======================*/

    .hero-img {
        max-height: 192px;
        width: 100%;

    }

    .hero-container {
        width: 100%;
        background-color: #3C3C3C; /*grey1*/
        padding-top: 32px;
        padding-bottom: 32px;
    }
    .hero-body {
        width: 90% !important;
        /* background-color: red; */
        text-align: center;
    }
    .hero-subtitle {
        padding-top: 12px !important;
    }
    .hero-btn {
        margin-top: 12px !important;
        margin-right: 6px;
        margin-left: 6px;
    }
/*=========================GROUPEDHEADLINES================*/
.headline-horizontal{
  line-height: 28px;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;
  font-family: "Arial", sans-serif;
  font-size: 24px;
}

.headline-vertical{
  line-height: 28px;
  font-weight: bold;
  display: inline-block;
  margin-left: 30px;
  font-family: "Arial", sans-serif;
  font-size: 24px;
}

.table-center{
  display: flex;
  justify-content: center;
}


    /*============================= FOOOTER ======================*/

    .footer-media-container {
      min-height: 100px;
      width: 100%;
      background-color: #222222;
      padding-left: 5%;
      padding-right: 5%;
    }

    .footer-media-contact {
        width: 100%;
        padding-top: 25px;
        /* background-color: red; */
    }
    .footer-country {
        width: 50%;
        padding-bottom: 25px;
        /* background-color: red; */
    }
    .footer-contact {
        width: 50%;
        padding-bottom: 25px;
        /* background-color: red; */
    }


    .footer-media-actions {
        width: 100%;
        border-top-style: solid; 
        border-bottom-style: solid; 
        border-width: 1px; 
        border-color: #555555;
        /* background-color: green; */
    }
    .action-item {
        padding-bottom: 25px; 
        padding-top: 25px;
  
    }


    .footer-media-social {
        width: 100%;
        padding-top: 25px;
        padding-bottom: 25px;
    }
    .footer-media-social-flex {
        display: flex; 
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

    }
    .footer-logo {

    }
    .footer-find-us {
        padding-right: 10px;
        vertical-align: middle;

    }
    .social-media-items {
    }

    @media only screen and (max-width: 639px) {

        .footer-country {
            width: 100%;
            display: block;
            /* background-color: red; */
        }
        .footer-contact {
            width: 100%;
            display: block;
            /* background-color: red; */
        }
        .action-item {
            width: 100%;
            padding-bottom: 15px; 
            padding-top: 15px;
            display: block;
            border-bottom-style: solid; 
            border-width: 1px; 
            border-color: #555555;
        }
        
        .footer-media-actions {
            border-bottom-style: none; 
        }
        .footer-media-social-flex {
            flex-direction: column;

        }

        .footer-logo {
            width: 100%;
            padding: 0 !important;
        }
        .footer-find-us {
            width: 100%;
            padding-right: 0px !important;
            padding-top: 20px;
            padding-bottom: 15px;

        }
        .social-media-items {
            width: 100%;

        }
    
    }
   
    
`

export default style;