import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './RegisterPage.css'
import logo from "../../img/Logo/Ecotria-Logo-Ene21_Logo-1080px.png";

import { userActions } from '../../actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                nombre: '',
                apellido: '',
                correo: '',
                contrasena: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        console.log(event)
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.nombre && user.apellido && user.correo && user.contrasena) {
            this.props.register(user);
        }
    }

     render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="register-page">    
                <div className="register-form">
                    <div className="col-md-6 col-md-offset-3">
                        <form name="form" onSubmit={this.handleSubmit}>
                        <img className="logoRegister" src={logo} width="180" height="180" />
                            <div className="form-group-input">
                                <div className={'form-group' + (submitted && !user.nombre ? ' has-error' : '')}>
                                    <input type="text" className="form-control" name="nombre" placeholder="Nombre" value={user.nombre} onChange={this.handleChange} />
                                    {submitted && !user.nombre &&
                                        <div className="help-block">Nombre Requerido</div>
                                    }
                                </div>
                            </div>

                            <div className="form-group-input">
                                <div className={'form-group' + (submitted && !user.apellido ? ' has-error' : '')}>
                                    <input type="text" className="form-control" name="apellido" placeholder="Apellido" value={user.apellido} onChange={this.handleChange} />
                                    {submitted && !user.apellido &&
                                        <div className="help-block">Apellido Requerido</div>
                                    }
                                </div>
                            </div>

                            <div className="form-group-input">
                                <div className={'form-group' + (submitted && !user.correo ? ' has-error' : '')}>
                                    <input type="email" className="form-control" name="correo" placeholder="Correo" value={user.correo} onChange={this.handleChange} />
                                    {submitted && !user.correo &&
                                        <div className="help-block">Correo Requerido</div>
                                    }
                                </div>
                            </div>

                            <div className="form-group-input">
                                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                    <input type="password" className="form-control" name="contrasena" placeholder="Contraseña" value={user.contrasena} onChange={this.handleChange} />
                                    {submitted && !user.contrasena &&
                                        <div className="help-block">Contrasena Requerida</div>
                                    }
                                </div>
                            </div>

                            <div className="form-group-button">
                                <div className="form-group">
                                    <button className="btn-signup">Registrar</button>
                                    {registering}
                                    <a href={"/login"}>
                                    <button to="/login" type="button" className="btn-signup">Cancelar</button>
                                    </a>
                                </div>    
                            </div>

                        </form>
                    </div>
                </div>
            </div>    
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };