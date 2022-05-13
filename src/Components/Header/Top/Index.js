import { IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
//import MenuLeft from '../../../Components/Header/Left/MenuLeft'
import MenuRight from '../../../Components/Header/Right/MenuHeght'
// import { Link } from 'react-router'
import './style.css'
// <Link to='/Sprints' className="navbar-brand nav-link" >Email </Link>

export default props => {   // ou assim function Navbar() {
    const [hora, setHora] = useState();
    useEffect(() => {
      setInterval(refreshTime, 1000);
    }, [])
        
    function refreshTime() {
      var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
      var formattedString = dateString.replace(", ", " - ");
      setHora(formattedString)
    }
   
  return (
    <div>      

      <nav className="navbar navbar-dark bg-primary navbar-expand-lg" style={{backgroundColor:"#4375A3", height:"40px"}}>       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">                       
            {/* <Link to='/producao' style={{"font-size":"18px"}} className="navbar-brand nav-link" >Producao </Link>       */}
            </li>
            
            <li className="nav-item">
            <a href="home" style={{"font-size":"18px"}} className="navbar-brand nav-link">Home</a>
            </li>  
            <li className="nav-item">
            <a href="Contato" /*target="_blank "*/ style={{"font-size":"18px"}} className="navbar-brand nav-link">Contato</a>
            </li>       
            <li className="nav-item">                       
            {/* <Link to='/suporte' className="navbar-brand nav-link">ChatBox </Link>       */}
            </li>
            <li className="nav-item dropdown" >
              {/* <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" >  Sites  </Link> */}
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" >

              <a href="http://www.santacasavitoria.org" target="_blank " className="dropdown-item">Site</a>
              <a href="http://www.santacasavitoria.org/intranet/" target="_blank " className="dropdown-item">Intranet</a>
              <a href="https://www.santacasadesaude.com.br/" target="_blank " className="dropdown-item">SCS</a>    
              <a href="http://www.emescam.br/ " target="_blank " className="dropdown-item">Emescam</a>   
              <a href="./temp/NEWNAVIGATORMV.rar"  className="dropdown-item">Programas</a> 
               
              </div>
            </li>
            <li className="nav-item">
              <button className="btn nav-link disabled" href="#" aria-disabled="true">help</button>
            </li>
          </ul>
          <div className='hora'>{hora}</div>
          <IconButton aria-label="delete" size="small">
          <MenuRight />
         </IconButton>
        </div>
      </nav>
    </div>
  );
}

