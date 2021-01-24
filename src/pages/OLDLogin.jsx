import React from "react";
import LoginState from "../StateLogic/LoginState";


function Login() {
  return (
    <LoginState></LoginState>
  );
}


export default Login;



/*import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../img/farmer.jpg";
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "../context/auth";
import conf from "../paths/paths"

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin(){
      axios.post(`${conf.apipath}${conf.user.login}`, {
        correo,
        contrasena
      })
      .then(responseData => {
        if (responseData.data.code === "API_U_200") {
          console.log("200 del Servidor")
          alert(responseData.data.code)
          alert(responseData.data.token);
          console.log("cambiando Login a True")
          setLoggedIn(true);
        } 
        else {
          console.log("Error del Servidor")
          console.log(responseData.data.code)
          console.log(responseData.data)
          setIsError(true);
        }
      }).catch(e => {
        console.log("Se activa Catch")
        setIsError(true);
      });
    }

    if(isLoggedIn){
      alert("Redirecting to Home")
      return <Redirect to="/"/>
    }
 
  return (
    <div>
      <Card>

      <Logo src={logoImg} />
    <h1>Iniciar Sesión</h1>
    <Form>
      <Input 
        type="email" 
        name="correo" 
        value={correo} 
        onChange={e => {
            setCorreo(e.target.value);
          }} 
          placeholder="Correo Electrónico" 
        />

      <Input 
        type="password" 
        name="contrasena" 
        value={contrasena}
         onChange={e => {
          setContrasena(e.target.value);}} 
         placeholder="Contraseña" 
      />

      <Button onClick={postLogin}>Iniciar Sesión</Button>
    </Form>
    {isError && <Error>El usuario o la contraseña son incorrectos</Error>}
    <Link to="/signup">¿Aún no tienes una cuenta? Crea una cuenta</Link>
    </Card>
    </div>
  );
}

export default Login;
*/




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
  .then (response => {console.log(response)})  
}*/