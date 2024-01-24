import React, { Fragment } from "react";
import Lista from "./Lista";


const Jsx =()=>{
    const saludo='Hola Jsx'
   
    return(
        <Fragment>
        <h2>Soy un componente {saludo}</h2>
        
        </Fragment>
        
    );
}

export default Jsx;