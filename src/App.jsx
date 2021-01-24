import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from './pages/HomePage/Home';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import { AuthContext } from './context/auth';
import PostSignup from './pages/PostSignup';
import NavigateBar from './components/Navbar/Nav';
import Header from './components/Header'
import Footer from './components/Footer'

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens]  = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    /*App Body*/
      /*Sidebar*/
      /*Marketplace*/
      /*Ads Sidebar*/
      
    <AuthContext.Provider value={ { authTokens, setAuthTokens: setTokens } }>
      <Router>
        <Header/>
        <React.Fragment>   
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/postsignup" component={PostSignup}/>
          <PrivateRoute path="/admin" component={Admin} />
        </React.Fragment>
        <Footer/>
      </Router>
    </AuthContext.Provider>

  );
}

export default App;