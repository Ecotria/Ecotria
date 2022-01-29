import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../actions";
import { makeStyles } from "@material-ui/styles";
import Nav from "../../components/Navbar/Nav";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { StylesProvider } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import ImgSelector from "../../components/ImageSelector/ImageSelector";
import Viejito from "../../img/viejito.jpg";
import Button from "@material-ui/core/Button";
import Separator from "../../components/common/separator.component";
import { createpost } from "../../actions/user.actions";

const PostCreate = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    titlePost: "",
    suscriberID: "",
    catergory: "",
    price: "",
    descriptionPost: "",
    address: "",
    email: "",
    phoneNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setCurrentStep(1);
    const storedUser = JSON.parse(localStorage.getItem("ObjectData"));
    setValues({
      ...values,
      email: storedUser.email,
      suscriberID: storedUser.suscriberID,
    });
  }, []);

  const handleSubmit = (values) => {
    setSubmitted(true);
    // const {
    //   titlePost,
    //   catergory,
    //   price,
    //   descriptionPost,
    //   address,
    //   email,
    //   phoneNumber,
    // } = values;
    // if (
    //   titlePost &&
    //   catergory &&
    //   price &&
    //   descriptionPost &&
    //   address &&
    //   email &&
    //   phoneNumber
    // ) {
      dispatch(userActions.createpost(values));
    // } else {
    //   console.log("Not working");
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ [name]: value });
    console.log("Name, Value:", name, value);
    console.log("New Values:", values);
  };

  return (
    <>
      <Nav />

      {/*AQUI EMPIEZA FORMIK*/}
      {currentStep === 1 && (
        <div>
          <div className={styles.title}>
            <h1>Crear Anuncio</h1>
          </div>
          <Separator />
          <div className={styles.avatarRow}>
            <div>
              <Avatar
                style={{ height: 70, width: 70, marginLeft: 10 }}
                alt="Viejito granjero"
                src={Viejito}
              />
            </div>
            <div style={{width:"52%"}}>
              <h2 style={{textAlign:"center"}}>Anastacio Pacicletomanhauser</h2>
            </div>
          </div>
          <Formik
            initialValues={{
              titlePost: "",
              suscriberID: "",
              catergory: "",
              price: "",
              descriptionPost: "",
              address: "",
              email: "aristides.abrego@gmail.com",
              phoneNumber: "6001-6881",
            }}
            //   validate={(values) => {
            //     const errors = {};
            //     if (!values.email) {
            //       errors.email = "Required";
            //     } else if (
            //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //     ) {
            //       errors.email = "Invalid email address";
            //     }
            //     return errors;
            //   }}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }} >
                    {/* <label htmlFor="titlePost">Titulo</label> */}
                    <Field
                      className={styles.formGroupInput}
                      placeholder="Título"
                      type="text"
                      name="titlePost"
                    />
                    <ErrorMessage name="titlePost" component="div" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }} >
                    {/* <label htmlFor="catergory">Categoría</label> */}
                    <Field
                      className={styles.formGroupInput}
                      placeholder="Categoría"
                      type="text"
                      as="select"
                      name="catergory"
                    >
                      <option value="Productor">Productor</option>
                      <option value="Transporte">Transporte</option>
                      <option value="Industria">Industria</option>
                      <option value="Servicios">Servicios</option>
                      <option value="Comprador">Comprador</option>
                      <option value="Distribuidor">Distribuidor</option>
                    </Field>
                    <ErrorMessage name="catergory" component="div" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }} >
                    {/* <label htmlFor="price">Precio</label> */}
                    <Field
                      className={styles.formGroupInput}
                      placeholder="Precio"
                      type="text"
                      name="price"
                    />
                    <ErrorMessage name="price" component="div" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }} >
                    {/* <label htmlFor="titlePost">Descripción</label> */}
                    <Field
                      className={styles.formGroupInput}
                      placeholder="Descripción"
                      type="text"
                      name="descriptionPost"
                    />
                    <ErrorMessage name="descriptionPost" component="div" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }} >
                    {/* <label htmlFor="titlePost">Dirección</label> */}
                    <Field
                      className={styles.formGroupInput}
                      placeholder="Dirección"
                      type="text"
                      name="address"
                    />
                    <ErrorMessage name="address" component="div" />
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ImgSelector />
                </div>
                <div className={styles.submitButton}>
                  <Button
                    // className={styles.submitButton}
                    type="submit"
                    
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                  >
                    Crear
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
      {currentStep === 2 && (
        <Formik
          initialValues={{
            images: [],
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <div>
              <h1>Añadir una Imagen</h1>
              <div className={styles.submitButton}>
                <Button
                  type="submit"
                  onClick={() => {
                    console.log("Clickity");
                    setCurrentStep(1);
                  }}
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                >
                  Crear
                </Button>
              </div>
            </div>
          )}
        </Formik>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: 20,
  },
  avatarRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  avatarColumn: {
    // flex: "0.5",
  },
  formGroupInput: {
    // border: "none",
    borderWidth: 0.5,
    borderRadius: "10px",
    marginTop: 20,
    marginBot: 20,
    backgroundColor: "transparent",
    // outlineWidth: 0,
    fontSize: 30,
    // color: "white",
    width: "90%",
    textAlign: "left",
  },
  submitButton: {
    marginTop: 10,
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
  },
}));

const connectedPostCreatePage = withRouter(PostCreate);
export { connectedPostCreatePage as PostCreate };
