import React, { useState } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import './Nav.css'
import SearchBar from '../Search Bar/SearchBar'


const NavigateBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { history, location, match } = props;

  console.log(history, location, match);


  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">Ecotria</Link>
        <SearchBar />
      </div>
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

        <div />
      </div>

      <div className="nav-right" >
        <div>
          <a href={"/login"}>Iniciar Sesión</a>
        </div>
        <div >
          <a href={"/postcreate"}>
            Crear Post
                </a>
          <div>
            <div>
              Ver tu Perfil
                  </div>
            <div>
              Publicar Listado
                  </div>
            <div />
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