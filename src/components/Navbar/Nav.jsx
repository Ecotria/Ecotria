import React, { useState } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import "./Nav.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../actions/index";

//MUI
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from "@material-ui/icons/Home";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ForumIcon from "@material-ui/icons/Forum";

import SearchBar from "../Search Bar/SearchBar";
import logo from "./Ecotria-Logo-NavbarIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  subtitle:{
    flexGrow: 1,
    fontSize: 15
  }
}));

const NavigateBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { history, location, match } = props;
  const classes = useStyles();

  console.log(history, location, match);
  const dispatch = useDispatch();

 const navLogout= ()=>{
  dispatch(userActions.logout())
  window.location="/";
 }

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
      <div className="nav-left">
        <a href={"/"}>
          <img src={logo} width="40" height="40" />
        </a>
        {/* +<SearchBar /> */}
      </div>

      <div className="nav-middle">
        <div title="Market" className="tooltip">
          <a href={"/"}>
            <HomeIcon fontSize="large" />
            <span class="tooltiptext">Mercado</span>
          </a>
        </div>

        <div title="Agregar Publicación" className="tooltip">
          <a href="/postcreate">
            <LibraryAddIcon fontSize="large" />
            <span class="tooltiptext">Agregar Publicación</span>
          </a>
        </div>

        <div title="Mis Publicaciones" className="tooltip">
          <a href={"/"}>
            <ListAltIcon fontSize="large" />
            <span class="tooltiptext">Mis Publicaciones</span>
          </a>
        </div>

        <div title="Foro" className="tooltip">
          <a href={"/"}>
            <ForumIcon fontSize="large" />
            <span class="tooltiptext">Foro</span>
          </a>
        </div>
      </div>

      <div className="nav-right">
        <div>
          <a href={"/admindashboard"}>Admin Dashboard</a>
        </div>

        <div>
          <a href={"/postcreate"}>Crear Anuncio</a>
        </div>

        <div>
          <a href={"/userdashboard"}>Ver tu Perfil</a>
          <div>
            <div>
              <a href={"/imageupload"}>Subir Imagen de Post</a>
            </div>

            <div />

            <div>
              <button onClick={() => navLogout()}>
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
      </AppBar>
    </div>
  );
};

export default withRouter(NavigateBar);
