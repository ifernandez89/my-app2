import React,{useState,Fragment} from "react";
import {useForm} from 'react-hook-form'

const FormularioNew=()=>{

const {register,errors,handleSubmit} = useForm();

const [datos,setDatos]=useState({
nombre:'',
apellido:''
})

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
console.log(datos.nombre+''+datos.apellido)
event.target.reset()
}

const onSubmit=(data,e)=>{
console.log(data)
e.target.reset()

}

return (
<>
<Fragment>
<h1>Formulario </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="col-md-3">
        <input
        placeholder="Ingrese Nombre"
        className="form-control"
        type="text"
        name="nombre"
        ref={
            register({
                required: { value:true,message:'Nombre Obligatorio' }
        })
        }
        /*onChange={handleInputChange}*/
        ></input>
    </div>
    <div className="col-md-3">
        <input
        placeholder="Ingrese Apellido"
        className="form-control"
        type="text"
        name="apellido"
        ref={
            register({
                required: { value:true,message:'Nombre Obligatorio' }
        })
        }
       /*onChange={handleInputChange}*/
        ></input>
    </div>

    <span className="text-danger text-small d-block mb-2">
    {errors?.nombre?.message}
    </span>

    <div className="">
        <button className="btn btn-primary" type="submit">Enviar</button>
    </div>
</form>
<h3>{datos.nombre} - {datos.apellido}</h3>
</Fragment>
</>
);}

export default FormularioNew;

