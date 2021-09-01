import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//Actions
import {userActions} from '../../actions';

//UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from "../../img/Logo/Ecotria-Logo-Ene21_Logo-1080px.png";
import backgroundImage from "../../img/loginbackgroundgiro2.jpg";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Ecotria
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    margin: 0,
    padding: 0,
    // marginTop: 50
  },
  paper: {
    // marginTop: theme.spacing(8), 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#FF9933",
    borderRadius: 100
  },
  container: {
    marginTop: theme.spacing(8)
  },
  TextField:{
    backgroundColor: "rgba(100,100,100, .7)",
    borderRadius: 25,
    border: 0,
  },
  label:{
    color: "white"
  }
}));

export default function RegisterPage() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const {register} = userActions;
  const [submitted, setSubmitted] = useState(false)
  const [signupData , setSignupData] = useState({
    nombre: "",
    apellido: "",
    correo : "",
    contrasena : ""
})

const handleChange = (e) => {
  const {id , value} = e.target   
  setSignupData(prevState => ({
      ...prevState,
      [id] : value
  }))
}

  const handleSubmit=(e)=> {
    e.preventDefault();
    setSubmitted(true);
    const { nombre, apellido, correo, contrasena } = signupData;
    if (nombre && apellido && correo && contrasena) {
      dispatch(register(signupData));
    }
}

  return (
    <div className={classes.root}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <img src={logo} className={classes.container} src={logo} width="180" height="180"/>
        <form className={classes.form} noValidate>
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            value={signupData.nombre}
            label="Nombre"
            name="nombre"
            autoFocus
            className={classes.TextField}
            InputLabelProps={{
              style: {
                color: 'white',
              } }}
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="apellido"
            value={signupData.apellido}
            label="Apellido"
            name="apellido"
            autoFocus
            className={classes.TextField}
            InputLabelProps={{
              style: {
                color: 'white',
              } }}
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="correo"
            value={signupData.correo}
            label="Correo"
            name="correo"
            autoComplete="correo"
            autoFocus
            className={classes.TextField}
            InputLabelProps={{
              style: {
                color: 'white',
              } }}
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="contrasena"
            label="Contraseña"
            type="password"
            id="contrasena"
            value={signupData.contrasena}
            autoComplete="current-password"
            className={classes.TextField}
            InputLabelProps={{
              style: {
                color: 'white',
              } }}
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href={"/login"}
          >
            Ir a Iniciar Sesión
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    
    </div>
  );
}