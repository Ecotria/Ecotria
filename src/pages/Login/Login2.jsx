  
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import './Login.css'
import { userService } from '../../services'
// import logo from "../../img/Logo/Ecotria-Logo-NavbarIcon.png";
import logo from "../../img/Logo/Ecotria-Logo-Ene21_Logo-1080px.png";
import { Button, Container, Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    goToRegister(){
        console.log("ESTO FUNCIONA O QUE XOPA?!");
        return <a href={"/register"}/>
    }

    render() {
        const classes = useStyles();
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className = "login-page">
                <Container maxWidth="xs">
                <CssBaseline />
                <div 
                style={{marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',}}>
                    <Grid container 
                    // className="login-form"
                    >
                        <form name="form" onSubmit={this.handleSubmit}>
                        <Grid item xs={6} >
                        <img className="logo" src={logo} width="180" height="180"/>
                        </Grid>
                            <div className="form-group-input">
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <input type="email" className="form-control" name="username" placeholder="Correo" value={username} onChange={this.handleChange} />
                                    {submitted && !username &&
                                        <div className="help-block">Correo Requerido</div>
                                    }
                                </div>
                            </div>    

                            <div className="form-group-input">             
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <input 
                                    type="password" 
                                    className="form-control"
                                    name="password" 
                                    placeholder="Contraseña" 
                                    autoComplete="current-password" 
                                    value={password} 
                                    onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="help-block">Contraseña Requerida</div>
                                    }
                                </div>
                            </div>    

                            <div className="form-group-button">                  
                                <div className="form-group">
                                    <Grid item xs={3}>
                                    <button className="btn-login">Iniciar Sesión</button>
                                    {loggingIn &&
                                        <img alt="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                    </Grid>
                                    <Grid item xs={3}>
                                    <a href={"/register"} >
                                    <button type="button" className="btn-login">Registrarse</button>
                                    </a>
                                    </Grid>
                                </div>
                            </div>
                        </form>
                    </Grid>
                    </div>
                </Container>
            // </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = withRouter(connect(mapState, actionCreators)(LoginPage));
export { connectedLoginPage as LoginPage };