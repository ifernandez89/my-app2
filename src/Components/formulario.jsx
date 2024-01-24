import React,{useState,Fragment} from "react";
import {useForm} from 'react-hook-form'
import Lista from "./Lista";

function Registro(prop) {
  /*const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');*/
  const {register,errors,handleSubmit} = useForm();
  console.log(prop);
  const [datos,setDatos]=useState({
    id:'',
  nombre:'',
  apellido:'',
  dni:'',
  email:'',
  telefono:''
  })

  const [envia,setEnvia]=useState(false);
  
  const  handleInputChange =(event)=>{
      console.log('funciona')
      /*console.log(event.target.value)*/
      setDatos({
          ...datos,[event.target.name]:event.target.value
      })
      
  }

  const enviarDatos=(event)=>{
  event.preventDefault();
  /*php node para backend con estos datos */
  console.log(datos.nombre+''+datos.apellido+''+datos.dni+''+datos.email+''+datos.telefono)
  /*event.target.reset()*/
  }


const enviarMensaje=(datos,event)=>{
  event.target.value=''
  /*var newUser=document.querySelector("h2");
  console.log('HOLA: ')
  newUser.textContent=datos.nombre+' '+datos.apellido;
  setNn(newUser.textContent);*/
  setEnvia(true)
}

  const onSubmit=(data,e)=>{
  console.log(data)
  e.target.reset()
  }


  return (
    <>
<Fragment>
<h1>Formulario </h1>
  <div className="w3-container w3-padding-64 w3-theme-l5 " id="contact">
  <div className="w3-row">
  <div className="col-md-3">
        <input id="myInput"
        placeholder=""
        className="form-control"
        type="text"
        name="id"
        onChange={handleInputChange}
        ></input>
    </div>
    <div className="col-md-3">
        <input id="myInput"
        placeholder="Ingrese Nombre"
        className="form-control"
        type="text"
        name="nombre"
        onChange={handleInputChange}
        ></input>
    </div>
    <div className="col-md-3">
        <input id="myInput"
        placeholder="Ingrese Apellido"
        className="form-control"
        type="text"
        name="apellido"
       onChange={handleInputChange}
        ></input>
    </div>
    <div className="col-md-3">
        <input id="myInput"
        placeholder="Ingrese D.N.I"
        className="form-control"
        type="text"
        name="dni"
       onChange={handleInputChange}
        ></input>
    </div>
    <div className="col-md-3">
        <input id="myInput"
        placeholder="Ingrese Email"
        className="form-control"
        type="text"
        name="email"
       onChange={handleInputChange}
        ></input>
    </div>
    <div className="col-md-3">
        <input
        id="myInput"
        placeholder="Ingrese Teléfono"
        className="form-control"
        type="text"
        name="telefono"
       onChange={handleInputChange}
        ></input>
    </div>
    <span className="text-danger text-small d-block mb-2">
    {errors?.nombre?.message}
    </span>
  
    <div className="">
        <button type="" value="" className="btn btn-primary"
          onClick={e=>enviarMensaje(datos,e)} onChange=" ">Enviar</button>
          <hr/>
    </div>
    
    </div>
    </div>
    {envia?<Lista d={datos}/>:null}
    </Fragment>
</>
  );
}

export default Registro;
