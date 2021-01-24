import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logoImg from "../img/farmer.jpg";
import { Card, Logo, Form, Input, Button } from '../components/AuthForms';
import conf from '../paths/paths'

class SignupFormData extends Component {
    constructor(props) {
      super(props);
      this.state ={
        suscriptorId: '',
        PrimerNombre: '',
        SegundoNombre:'',
        ApellidoPaterno:'',
        ApellidoMaterno: '',
        CedulaPasaporte: '',
        Nacionalidad: '',
        RepresentanteLegal: '',
        DV:'',
      }
    }


    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        fetch(`${conf.apipath}${conf.user.createuserdata}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=UTF-8'},
          body: JSON.stringify({ 
            suscriptorId: "5ff131d70b5412002b56af05",
            PrimerNombre: this.state.PrimerNombre,
            SegundoNombre: this.state.SegundoNombre,
            ApellidoPaterno: this.state.ApellidoPaterno,
            ApellidoMaterno: this.state.ApellidoMaterno,
            CedulaPasaporte: this.state.CedulaPasaporte,
            Nacionalidad: this.state.Nacionalidad,
            RepresentanteLegal: this.state.RepresentanteLegal,
            DV: this.state.DV,        
          })
    })
    .then((response) => response.json())
    .then((responseData) => {
       alert(JSON.stringify(responseData))
       return responseData.code==='API_DR_200' ? this.setState({ redirect: "./Login" }): alert("Error")  
    })
}

changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

state = { redirect: null}
render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
      }
    const { PrimerNombre, SegundoNombre, ApellidoPaterno, ApellidoMaterno, CedulaPasaporte, Nacionalidad, RepresentanteLegal, DV} = this.state
    return (
      <div>
        <Card>

          <Logo src={logoImg} />

          <h1>Ingresa tus datos personales</h1>

          <Form>
            <Input type="text" name="PrimerNombre" value={PrimerNombre} onChange={this.changeHandler} placeholder="Primer Nombre"  />
            <Input type="text" name="SegundoNombre" value={SegundoNombre} onChange={this.changeHandler} placeholder="Segundo Nombre"  />
            <Input type="text" name="ApellidoPaterno" value={ApellidoPaterno} onChange={this.changeHandler} placeholder="Apellido Paterno" />
            <Input type="text" name="ApellidoMaterno" value={ApellidoMaterno} onChange={this.changeHandler} placeholder="Apellido Materno" />
            <Input type="text" name="CedulaPasaporte" value={CedulaPasaporte} onChange={this.changeHandler} placeholder="Cédula o Pasaporte" />
            <Input type="text" name="Nacionalidad" value={Nacionalidad} onChange={this.changeHandler} placeholder="Nacionalidad" />
            <Input type="email" name="RepresentanteLegal" value={RepresentanteLegal} onChange={this.changeHandler} placeholder="Representante Legal" />
            <Input type="text" name="DV" value={DV} onChange={this.changeHandler} placeholder="DV" />
            <Button onClick={this.submitHandler} type="submit">Ingresar datos</Button>
          </Form>
      </Card>
      </div>
    )
  }
}

export default SignupFormData;