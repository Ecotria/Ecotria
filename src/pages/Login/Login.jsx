/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Actions
import { alertActions, userActions } from "../../actions";

//UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "../../img/Logo/Ecotria-Logo-Ene21_Logo-1080px.png";
import backgroundImage from "../../img/loginbackgroundgiro2.jpg";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Ecotria
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    margin: 0,
    padding: 0
    // marginTop: 50
  },
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#FF9933",
    borderRadius: 100
  },
  container: {
    marginTop: theme.spacing(8)
  },
  TextField: {
    backgroundColor: "rgba(100,100,100, .7)",
    borderRadius: 25
  },
  label: {
    color: "white"
  }
}));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const login = userActions.login;
  const [submitted, setSubmitted] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    console.log("Log Change", e);
    const { id, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email and pass", credentials.email, credentials.password);
    setSubmitted(true);
    const { email, password } = credentials;
    if (email && password) {
      dispatch(login(email, password));
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className={classes.root}>
      <Container component='main' maxWidth='sm'>
        <div className={classes.paper}>
          <img
            src={logo}
            className={classes.container}
            src={logo}
            width='180'
            height='180'
          />
          <form className={classes.form} noValidate>
            <div style={{padding:10}}>
              <label
                form='email'
                style={{
                  color: credentials.email.length > 0 ? "black" : "white",
                  fontWeight: "bold",
                  fontSize: credentials.email.length > 0 ? 18 : 20,
                  position:
                    credentials.email.length > 0 ? "relative" : "absolute",
                  display: credentials.email.length > 0 ? "block" : "none",
                  paddingLeft: "10px",
                  paddingTop: credentials.email.length > 0 ? "-10px" : "7px"
                }}>
                Correo
              </label>
              <input
                style={{ display: "flex", width: "100%", padding: 10 }}
                onChange={handleChange}
                // variant="outlined"
                // margin="normal"
                // required
                // fullWidth
                id='email'
                value={credentials.email}
                label='Correo'
                name='email'
                autoComplete='email'
                autoFocus
                className={classes.TextField}
                placeholder='Correo'
                // InputLabelProps={{
                //   style: {
                //     color: 'white',
                //   } }}
              />
            </div>
            <div style={{padding:10}}>
              <label
                form='password'
                style={{
                  display: credentials.password.length > 0 ? "block" : "none",
                  color: credentials.password.length > 0 ? "black" : "white",
                  fontWeight: "bold",
                  fontSize: credentials.password.length > 0 ? 18 : 20,
                  position:
                    credentials.password.length > 0 ? "relative" : "absolute",
                  paddingLeft: "10px",
                  paddingTop: credentials.password.length > 0 ? "-10px" : "7px"
                }}>
                Contraseña
              </label>
              <input
                style={{ display: "flex", width: "100%", padding: 10 }}
                onChange={handleChange}
                // variant='outlined'
                // margin='normal'
                // required
                // fullWidth
                name='password'
                label='Contraseña'
                type='password'
                id='password'
                value={credentials.password}
                // autoComplete='current-password'
                className={classes.TextField}
                placeholder='Contraseña'
                // InputLabelProps={{
                //   style: {
                //     color: "white"
                //   }
                // }}
              />
            </div>
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Recuérdame'
              style={{
                color: "white"
              }}
            />
            <Button
              onClick={handleSubmit}
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Iniciar sesión
            </Button>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              href={"/register"}>
              Registrarse
            </Button>
            <Grid container>
              <Grid item xs={12}>
                <Link href='#' variant='body2'>
                  ¿Olvidaste tu Contraseña?
                </Link>
              </Grid>
              {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
