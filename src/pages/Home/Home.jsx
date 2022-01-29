/** @format */

import React, { Redirect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShortPostFeed from "../../components/ShortPost/ShortPostFeed";
import "./Home.css";
import { Avatar } from "@material-ui/core";
import Nav from "../../components/Navbar/Nav";
import { Button } from "@material-ui/core";
import { history } from "../../helpers";

const HomePage = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className='home'>
        {/* <div className="sidebar">
          <div className="sidebar-row"><Avatar/>User name goes here</div>
          <div className="sidebar-row">
            <Link to="/admin">Contactos</Link>
          </div>
          <div className="sidebar-row">Agenda</div>
          <div className="sidebar-row">Mercado</div>
          <div className="sidebar-row">Publicar</div>
          <div className="sidebar-row">Favoritos</div>
          <div className="sidebar-row">Noticias</div>
        </div> */}

        <div className='feed'>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              width: "110%",
              paddingLeft:30
            }}>
            <Button
              color='primary'
              variant='contained'
              onClick={() => {
                <Redirect to='/postcreate' />;
                history.push("/postcreate");
              }}>
              Vender
            </Button>
            <Button
              color='primary'
              variant='contained'
              onClick={() => {
                <Redirect to='/postcreate' />;
                history.push("/postcreate");
              }}>
              Mis Listados
            </Button>
          </div>
          <ShortPostFeed />
        </div>

        {/* <div className="ad">
          <img
            src="https://www.wearemarketing.com/media/cache/dynamic/rc/rrepl4Kc//uploads/media/default/0001/21/cd02f7f6393676420be1f04e6ca4b191344ee313.jpeg"
            alt="Google Ads go here"
          />
        </div> */}
      </div>
    </>
  );
};

const connectedHomePage = HomePage;
export { connectedHomePage as HomePage };
