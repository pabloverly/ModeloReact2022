import React from 'react';
// import { Link } from 'react-router'
import './style.css'
// <Link to='/Sprints' className="navbar-brand nav-link" >Email </Link>
const Header = (props) => {   // ou assim function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg" style={{backgroundColor:"#e3f2fd"}}>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">                       
            {/* <Link to='/producao' style={{"font-size":"18px"}} className="navbar-brand nav-link" >Producao </Link>       */}
            </li>
            
            <li className="nav-item">
            <a href="#" style={{"font-size":"18px"}} className="navbar-brand nav-link">Home</a>
            </li>  
            <li className="nav-item">
            <a href="#" target="_blank " style={{"font-size":"18px"}} className="navbar-brand nav-link">Blak</a>
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
          
        </div>
      </nav>
    </div>
  );
}

export default Header;
