import React from 'react';
import { Router, Route, Switch, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../pages/Home/Home';
import { LoginPage } from '../pages/Login/Login';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { RegisterDataPage } from '../pages/RegisterDataPage';
import Admin from '../pages/Admin'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import './App.css';
import Nav from '../components/Navbar/Nav';
import { PostCreate } from '../pages/PostCreate/PostCreate';
import { PostView } from '../pages/PostView/PostView';
//import { PostSignup } from '../pages/PostSignup';
// import Dashboard from '../pages/User/UserDashboard/Dashboard';
import AdminDashboard from '../pages/Admin/AdminDashboard'
import ImageUpload from '../pages/Image Upload/imageupload';
// import ImgUpload from '../components/ImageUpload/ImgUpload';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });

    }


    render() {
        return (

            <React.Fragment>
                <Nav />
                    <Router history={history}> 
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route exact path="/register" component={withRouter(RegisterPage)} />
                    <PrivateRoute path="/postcreate" component={withRouter(PostCreate)}/>
                    <PrivateRoute exact path="/registerdata" component={withRouter(RegisterDataPage)} />
                    <PrivateRoute exact path="/postcreate" component={withRouter(PostCreate)} />
                    <Route exact path="/postview" component={withRouter(PostView)} />
                    <PrivateRoute exact path="/admin" component={Admin} />
                    <PrivateRoute exact path="/" component={HomePage} />
                    <PrivateRoute exact path="/userdashboard" component={Dashboard}/>
                    <PrivateRoute exact path="/admindashboard" component={AdminDashboard}/>
                    <PrivateRoute exact path="/imageupload" component={ImageUpload}/>
                    <Redirect from="*" to="/login" />
                </Switch>
                </Router>
                {/* <Footer/> */}
            </React.Fragment>

        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = withRouter(connect(mapState, actionCreators)(App));
export { connectedApp as App };