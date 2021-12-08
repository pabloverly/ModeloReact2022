import React from 'react';
import TextField from '@mui/material/TextField';
import './style.css'

const Input =(props)=>{

    return(
      <TextField value={props.value}
       onInput={props.onInput} 
       style={props.style}
       id="outlined-required" 
       label={props.label} 
       variant="outlined" 
       className="input" 
       size="small"/>     
    );
};

export default Input;