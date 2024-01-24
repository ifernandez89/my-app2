import React,{useState,Fragment} from "react";


const Saludar=(props)=>{
    const [mensaje,setMensaje]=useState('HOLA MUNDO!!!');
    const [clean,setClean]=useState('INGRESE MENSAJE');
    const [nombre,setNombre]=useState('JUAN PEREZ');
    
    
    const cambiarMensaje=(nuevoMensaje,nuevoBorrar)=>{
        setNombre(nuevoMensaje)
        setMensaje(nuevoMensaje)
        setClean(nuevoBorrar)
        /*var parrafo=document.getElementById("saludo");
        parrafo.style.color="black";
        var boton=document.getElementById("boton");
        parrafo.style.backgroundColor="white";*/
    }
    /*
    var boton = document.getElementById("boton");
    var p=document.getElementById("saludo");
  
    boton.addEventListener('click',function(){
        console.log('Me diste click');
        p.style.color="red";
    })
    boton.addEventListener('mouseover',function(){
        console.log('He detectado el ratón');
        p.style.backgroundColor="yellow";
    })
    boton.addEventListener('mouseout',function(){
        console.log('Adiós ratón');
        p.style.backgroundColor="blue";
    })*/

return (
<>
<Fragment>
<div className="w3-container w3-padding-64 w3-theme-l5" id="contact">
  <div className="w3-row">
      <form id="" className="w3-container w3-card-4 w3-padding-16 w3-white w3-center" >
<h3>Hola!!! : {nombre}</h3>

<h3>Mensaje :<strong className={mensaje.length >= 6 ? 'verde' : 'rojo'}>{mensaje}</strong></h3>
<input type="text" onChange={e=>cambiarMensaje(e.target.value,"BORRAR MENSAJE")} placeholder="Ingrese su nombre"/>
<button onClick={e=>cambiarMensaje("HOLA MUNDO!!!","BIENVENIDO")}>{clean}</button>
</form>
</div>
</div>
</Fragment>
</>
);}

export default Saludar;

