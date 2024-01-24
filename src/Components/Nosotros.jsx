import React ,{useEffect,useState} from 'react';
import Lista from "./Lista";
const Nosotros=()=>{

   /* const datos=[
        {id:1,nombre:'Reactjs'},
        
        {id:2,nombre:'Vuejs'},
        
        {id:3,nombre:'Angularjs'}
    ]*/

    const [equipo,setEquipo]=React.useState([])

    React.useEffect(()=>{
        /*console.log('useEffect')
        document.title='useEffect'*/
       obtenerDatos()
    },[] )

    const obtenerDatos= async()=>{
       const data=await fetch('https://jsonplaceholder.typicode.com/users')
       /*const data=await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')*/
        const users=await data.json()
        /*console.log(users)*/
        setEquipo(users)
    }


    return(
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item=>(
                        <li key={item.id}>{item.name}-{item.email}</li>
                    ))
                }
            </ul>
           

        </div>
    )
}

export default Nosotros;