import { Form } from "../components/AuthForms";
import React, {useState} from "react"


const tokenmanager={
     existingTokens : JSON.parse(localStorage.getItem("tokens"))

}

export default tokenmanager