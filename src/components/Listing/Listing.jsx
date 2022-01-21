/** @format */

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/funtions";

import Nav from "../Navbar/Nav";

export default function Listing(props) {
  const styles = useStyles();
  const details = useSelector((state) => state.users.postDetails);
  console.log("Details", details);
  return (
    <div>
      <Nav />
      <div>
        <h1 className={styles.title}>{details.titlePost}</h1>
      </div>
      <div className={styles.body}>
        {/* <ListItem>
          <h2 className={styles.boldletter}>Categoria: </h2>
          <ListItemText primary={details.category} />
        </ListItem>
        <ListItem>
          <h2 className={styles.boldletter}>Telefono: </h2>
          <ListItemText primary={details.phoneNumber} />
        </ListItem>
        <ListItem>
          <h2 className={styles.boldletter}>Precio: </h2>
          <ListItemText primary={details.price} />
        </ListItem>
        <ListItem style={{top:-15}}>
          <h2 className={styles.boldletter}>Descripcion: </h2>
          <ListItemText style={{ marginTop: 30 }}  primary={details.descriptionPost} />
        </ListItem>
        <ListItem>
          <h2 className={styles.boldletter}>Creada: </h2>
          <ListItemText primary={formatDate(details.createDate)} />
        </ListItem>
        <ListItem>
          <h2 className={styles.boldletter}>Actualizada: </h2>
          <ListItemText primary={formatDate(details.updateDate)} />
        </ListItem> */}

        <div className={styles.row}>
          <h2 className={styles.boldletter}>Categoria: </h2>
          <h2>{details.category}</h2>
        </div>
        <div className={styles.row}>
          <h2 className={styles.boldletter}>Direccion: </h2>
          <h2>{details.address}</h2>
        </div>
        <div className={styles.row}>
          <h2 className={styles.boldletter}>Telefono: </h2>
          <h2>{details.phoneNumber}</h2>
        </div>
        <div className={styles.row}>
          <h2 className={styles.boldletter}>Precio: </h2>
          <h2>{details.price}</h2>
        </div>
        <div style={{paddingBottom:10}} className={styles.row}>
          <h2 className={styles.boldletter}>Descripcion: </h2>
          <h2 style={{ top: 15, position: "relative" }}>
            {details.descriptionPost}
          </h2>
        </div>
        <div className={styles.row}>
          <h2 className={styles.boldletter}>Creada: </h2>
          <h2>{formatDate(details.createDate)}</h2>
        </div>
        <div className={styles.row}>
          <h2 className={styles.boldletter}>Actualizada: </h2>
          <h2>{formatDate(details.updateDate)}</h2>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: "50px"
  },
  body: {
    height: "85vh",
    width: "100%",
    padding: 20
  },
  row: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px"
  },
  boldletter: {
    fontWeight: "500",
    fontSize: "20px",
    color: "black",
    marginRight: "10px"
  }
}));
