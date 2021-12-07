import React from 'react';
import Button from '@mui/material/Button';
import './style.css'

const Buttons =(props)=>{

    return(
      <Button onClick={props.evento} variant="contained" className="button" >{props.name}</Button>
    );
};

export default Buttons;