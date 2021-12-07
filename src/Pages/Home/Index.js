import React, {useState} from 'react';
import ButtonPage from '../../Components/Ui/Button/Index'
import InputPage from '../../Components/Ui/Input/Index'
import Alert from '../../Rules/Alerts/Alert'
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';

    const Home = () =>{

    const [check,setCheck] = useState(false )
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    function status(){
        alert(checked)
    }
    return(
        <>
            <h1>Página Inicial</h1>
            <Divider />
            <InputPage label="Texto"/>
            <ButtonPage evento={Alert.A1} name="Enviar"/>           
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />     
             <ButtonPage evento={status} name="Enviar"/>    
        </>
    );
};

export default Home;