import React, {useState, useEffect} from 'react';
import ButtonPage from '../../Components/Ui/Button/Index'
import InputPage from '../../Components/Ui/Input/Index'
import Alert from '../../Rules/Alerts/Alert'
import { Switch, Checkbox, Divider } from '@mui/material';
import { Container, Box, BoxTitle, BoxText } from "./Homestyles";
// import './styles.css'

const Home = () =>{
    const [checked, setChecked] = React.useState(true); 
    const [ckCheckbox, setCkCheckbox] = React.useState(true); 
    const [bgcolor, setBgcolor] = React.useState('white');
    const [color, setColor] = React.useState('back');
    const [valueInput,setValueInput] = useState();

    //EVENTO SWITCH
    const handleChange = (event) => {
      setChecked(event.target.checked);
      setBgcolor(bgcolor === '#4696e5'?'white':'#4696e5');
      setColor(color === 'white'?'black':'white');    
    };

    //EVENTO CHECKBOX
    const handleChange1 = (event) => {
        setCkCheckbox([event.target.checked, event.target.checked]);
        setBgcolor(bgcolor === 'black'?'white':'black');
        setColor(color === 'white'?'black':'white'); 
      };

    React.useEffect(() => {           
             document.body.style.backgroundColor = bgcolor;
             document.body.style.color = color;                    
    }, [color,bgcolor]);

    
 
    return(
        <div>
            <h1>Componente</h1>           
            <Divider />            
            <InputPage value={valueInput} 
                onInput={e =>{setValueInput(e.target.value) }} 
                label="Texto" 
                style={{color:'red'}}/>
            <ButtonPage onClick={()=>{alert(valueInput)}} name="Enviar"/>           
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}/>     
             <ButtonPage onClick={ Alert.A1} name="Validar"/>  
             <Checkbox
                 checked={ckCheckbox[0] && ckCheckbox[1]}
                 indeterminate={ckCheckbox[0] !== ckCheckbox[1]}
                 onChange={handleChange1} />

            <Container >
                <box>
                    <BoxTitle>Container</BoxTitle>           
                    <Divider />
                    
                    <InputPage value={valueInput} onInput={e =>{setValueInput(e.target.value) }} label="Texto"/>
                    <ButtonPage onClick={()=>{alert(valueInput)}} name="Enviar"/>           
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />     
                    <ButtonPage onClick={ Alert.A1} name="Validar"/>  
                    </box>  
            </Container>
        </div>
    );
};

export default Home;