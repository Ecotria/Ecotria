import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import './Nav.css'
import SearchBar from '../Search Bar/SearchBar'


const NavigateBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">  
        
          <Link className="navbar-left" to="/">Ecotria</Link>

          <div className="nav-middle">
            
              <div>
                <Link to="/register">Crear Usuario</Link>
              </div>
              <div>
                <Link to="/registerdata">Datos de Usuario Creado</Link>
              </div>
              <div>
                 <Link to="/admin">Admin Page</Link>
              </div>

              <div/>       
            </div>
        
          <div className="nav-right" >
              <div>
                  <Link to="/login">Iniciar Sesión</Link>
              </div>
              <div >
                <div>
                  Perfil
                </div>
                <div>
                  <div>
                    Ver tu Perfil
                  </div>
                  <div>
                    Publicar Listado
                  </div>
                  <div/>
                  <div>
                    Cerrar Sesión
                  </div>
                </div>
            </div>
            
       
        </div>    
   
    </div>
  );
}

export default withRouter(NavigateBar);