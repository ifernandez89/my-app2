import React,{useState,Fragment} from "react";


const Contador=()=>{
    const [numero,setNumero]=useState(0);
    const aumentar=()=>{
        console.log('hice click')
        setNumero(numero + 1)
    }
return (
    <Fragment>
<h3>Mi Primer Contador {numero}</h3>
<button onClick={aumentar}>AUMENTAR</button>
</Fragment>
);}

export default Contador;