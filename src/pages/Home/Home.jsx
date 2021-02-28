import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShortPost from "../../components/ShortPost/ShortPost";
import ShortPostFeed from "../../components/ShortPost/ShortPostFeed";
import "./Home.css";
import { userActions } from '../../actions';
import { userService } from '../../services'

class HomePage extends React.Component {

  constructor(props) {
    super(props);

       userService.getAll()
}
  
 
  render() {
    return(
      <div className="home">
        <div className="sidebar">
          <div className="sidebar-row">User name goes here</div>
          <div className="sidebar-row">
            <Link to="/admin">Contactos</Link>
          </div>
          <div className="sidebar-row">Agenda</div>
          <div className="sidebar-row">Mercado</div>
          <div className="sidebar-row">Publicar</div>
          <div className="sidebar-row">Favoritos</div>
        </div>
        
        <div className="feed">
          <h1>Marketplace</h1>
         <ShortPostFeed/>
        </div>

        <div className="ad">
          <img
            src="https://www.wearemarketing.com/media/cache/dynamic/rc/rrepl4Kc//uploads/media/default/0001/21/cd02f7f6393676420be1f04e6ca4b191344ee313.jpeg"
            alt="Google Ads go here"
          />
        </div>
      </div>
    )
  }
}


const connectedHomePage = HomePage;
export { connectedHomePage as HomePage };
