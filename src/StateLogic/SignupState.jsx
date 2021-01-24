import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import logoImg from "../img/farmer.jpg";
import { Card, Logo, Form, Input, Button } from '../components/AuthForms';
import conf from "../paths/paths"
import { ActionCreators } from '../actions/ActionCreators';
//import SignupFormData from './StateLogic/SignupFormData';
//import PostSignup from '../pages/PostSignup';
//import axios from 'axios'

class SignupState extends Component {
constructor(props) {
  super(props);
  this.state = {
    nombre: '',
    apellido: '',
    contrasena: '',
    correo: ''
  }
}

submitHandler = e => {
    e.preventDefault()
    alert("Submitting")
    console.log(this.state)
    fetch(`${conf.apipath}${conf.user.create}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=UTF-8'},
      body: JSON.stringify({ 
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        contrasena: this.state.contrasena,
        correo: this.state.correo
      })
})
.then((response) => response.json())
.then((responseData) => {
   console.log(JSON.stringify(responseData))
   return responseData.code==='API_U_200' ? ActionCreators.addProfile(this.state) && this.setState({ redirect: "./PostSignup" }): alert("Error")   
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
}

changeHandler = e => {
  this.setState({ [e.target.name]: e.target.value })
}



state = { redirect: null}
render() {
    if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
    }
    const { nombre, apellido, contrasena, correo } = this.state;
    return (
      <div>
        <Card>

          <Logo src={logoImg} />

          <h1>Crea tu Usuario</h1>

          <Form>
            <Input 
            type="text"
            name="nombre" 
            value={nombre} 
            onChange={this.changeHandler} 
            placeholder="Nombre"
            />

            <Input type="text" 
            name="apellido" 
            value={apellido} 
            onChange={this.changeHandler} 
            placeholder="Apellido" 
            />

            <Input 
            type="email" 
            name="correo" 
            value={correo} 
            onChange={this.changeHandler} 
            placeholder="Correo" 
            />

            <Input 
            accessibilityRole="Form" 
            type="password" 
            name="contrasena" 
            value={contrasena} 
            onChange={this.changeHandler} 
            placeholder="Contraseña" 
            />

            <Input 
            type="password" 
            name="checkcontrasena" 
            placeholder="Nuevamente Contraseña"
            />

            <Button onClick={this.submitHandler} type="submit">Crear cuenta</Button>

          </Form>

          <Link to="/login">¿Ya tienes una cuenta? Inicia Sesión</Link>
      </Card>
      </div>
    )
  }


}

export default SignupState;