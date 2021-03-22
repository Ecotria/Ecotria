import React, { useState } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import './Nav.css'
import SearchBar from '../Search Bar/SearchBar'
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ForumIcon from '@material-ui/icons/Forum';
import logo from './Ecotria-Logo-NavbarIcon.png'



const NavigateBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { history, location, match } = props;

  console.log(history, location, match);


  return (
    <div className="navbar">
      

        <div className="nav-left">      
          <a href={"/"}><img src={logo} width="40" height="40"/></a>
          <SearchBar />
        </div>

        <div className="nav-middle">

          <div title="Market" className="tooltip">
            <a href={"/"}><HomeIcon fontSize="large" />
              <span class="tooltiptext">Mercado</span>
            </a>
          </div>

          <div title="Agregar Publicación" className="tooltip">
            <a href="/postcreate">
              <LibraryAddIcon fontSize="large"/>
                <span class="tooltiptext">Agregar Publicación</span>
            </a>
          </div>

          <div title="Mis Publicaciones" className="tooltip">
            <a href={"/"}><ListAltIcon fontSize="large"/>
             <span class="tooltiptext">Mis Publicaciones</span>
            </a>
          </div>

          <div title="Foro" className="tooltip">
            <a href={"/"}><ForumIcon fontSize="large" />
              <span class="tooltiptext">Foro</span>
            </a>
          </div>
          
        </div>

        <div className="nav-right">

          <div>
            <a href={"/login"}>Cambiar de Usuario</a>
          </div>

          <div>
            <a href={"/postcreate"}>Crear Anuncio</a>
          </div>

          <div>
                Ver tu Perfil
          <div>

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