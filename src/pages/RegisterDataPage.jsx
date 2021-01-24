import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class RegisterDataPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                suscriptorId: '',
                PrimerNombre: '',
                SegundoNombre:'',
                ApellidoPaterno:'',
                ApellidoMaterno: '',
                CedulaPasaporte: '',
                Nacionalidad: '',
                RepresentanteLegal: '',
                DV:'',
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
            <div className="col-md-6 col-md-offset-3">
                <h2>Datos Personales</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.nombre ? ' has-error' : '')}>
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" className="form-control" name="nombre" value={user.nombre} onChange={this.handleChange} />
                        {submitted && !user.nombre &&
                            <div className="help-block">Nombre Requerido</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.apellido ? ' has-error' : '')}>
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" className="form-control" name="apellido" value={user.apellido} onChange={this.handleChange} />
                        {submitted && !user.apellido &&
                            <div className="help-block">Apellido Requerido</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.correo ? ' has-error' : '')}>
                        <label htmlFor="correo">Correo</label>
                        <input type="email" name="correo" value={user.correo} onChange={this.handleChange} />
                        {submitted && !user.correo &&
                            <div className="help-block">Correo Requerido</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" name="contrasena" value={user.contrasena} onChange={this.handleChange} />
                        {submitted && !user.contrasena &&
                            <div className="help-block">Contrasena Requerida</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Registrar</button>
                        {registering}
                        <Link to="/login" className="btn btn-link">Cancelar</Link>
                    </div>
                </form>
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

const connectedRegisterDataPage = connect(mapState, actionCreators)(RegisterDataPage);
export { connectedRegisterDataPage as RegisterDataPage };