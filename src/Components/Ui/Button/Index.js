import React from 'react';
import Button from '@mui/material/Button';
import './style.css'

export default  props =>    
      <Button onClick={props.onClick} variant="contained" className="button" >{props.name}</Button>
  


