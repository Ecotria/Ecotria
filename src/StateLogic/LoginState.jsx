import React, { Component } from 'react';
import { Link, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { ActionCreators } from '../actions/ActionCreators'
import { getStore } from '../utils/profile'

import logoImg from "../img/farmer.jpg";
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForms';
import {
  register,
  login,
  logout,
} from '../services/AuthServices'


class LoginState extends Component {
constructor(props) {
  super(props);
  this.state = {
    correo: '',
    contrasena: '',
    error: false,
    loginStatus: '',
    submitted: false
  }
}

/*submitHandler = e => {
  e.preventDefault()
  this.props.login(this.state.correo, this.state.contrasena)
}*/

submitHandler = async (event) => {
  this.setState({ submitted: true });
    event.preventDefault();
    if (!this.state.error) {
      console.info('Valid Form')
      const user = getStore('user')
      if (user) {
        this.props.dispatch(ActionCreators.login(user));
        this.props.history.push('/home')
      } else {
        console.log("error state is true")
        this.setState({ error: true })
      }
    } else {
      console.log('Invalid Form')
    }
  }

/*submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    fetch(`${conf.apipath}${conf.user.login}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=UTF-8'},
      body: JSON.stringify({ 
        correo: this.state.correo,
        contrasena: this.state.contrasena,
        
      })
})
.then((response) => response.json())
.then((responseData) => {
   console.log(JSON.stringify(responseData))
   return responseData.code==='API_U_200' ?  this.setState({ redirect: "./" }) : this.setState({ error: true, alert(responseData)});  
})

   /* axios.post('http://81.4.100.21:4000/ecotria_api/user-create',
    {body: 
      {nombre: this.state.nombre,
      apellido: this.state.apellido,
      contrasena: this.state.contrasena,
      correo: this.state.correo}
    },
    {headers: {
      'Content-Type': 'x-www-form-urlencoded;charset=utf-8'
   }})
    .then (response => {console.log(response)})*/  


changeHandler = e => {
  this.setState({ [e.target.name]: e.target.value })
}



state = { redirect: null, error: false}
render() {
    if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
    }
    const { correo, contrasena  } = this.state
    return (
      <div>
        <Card>

        <Logo src={logoImg} />
      <h1>Iniciar Sesión</h1>
      <Form>
        <Input type="email" name="correo" value={correo} onChange={this.changeHandler} placeholder="Correo Electrónico" />
        <Input type="password" name="contrasena" value={contrasena} onChange={this.changeHandler} placeholder="Contraseña" />
        <Button onClick={this.submitHandler} type="submit">Iniciar Sesión</Button>
      </Form>
      {this.state.error && <Error>El usuario o la contraseña son incorrectos</Error>}
      <Link to="/signup">¿Aún no tienes una cuenta? Crea una cuenta</Link>
      </Card>
      </div>
    )
  }

  
}

const mapDispatchToProps = (state) => {
  return {
    profile: state
  }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginState))