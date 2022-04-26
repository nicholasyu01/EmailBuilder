import React, { useState, useEffect } from "react";
import axios from 'axios';

function Button(props) {
    const {editor} = props;
    var htmlMkto = null;

    useEffect(async () => {

      
      console.log('button', editor);
    }, []);

    return (
    <>

    </>
  );
}

export default Button;
