import { useState } from "react";
import Lista from "./Lista";
import Registro from "./formulario";

export default function TareasAbm(prop){

const [formVisible,setFormVisible]=useState(false);

    return(
        <>
        <h2>Abm de Tareas</h2>
        <button className="btn btn-primary" onClick={()=>setFormVisible(true)}>Agregar</button>
        <hr/>
        {formVisible?<Registro visible={formVisible}/>:null}
        </>
    )
}