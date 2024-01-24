import React,{useState} from "react";
export default function Lista(props){
        console.log('esto es lo que envia mi formulario',props);
       
        let [persona,setPersona]=useState('')
       let [arrayPersonas,setArrayPersonas]=useState([
            
        ])
            
           /*let [arrayPersonas,setArrayPersonas]=useState(
                [props.d.nombre]
                )*/

               /* const setNewPersona=()=>{
                    setPersona(props.d.nombre)
                    agregarElemento();
                }*/

        const agregarElemento=()=>{
           /* let nomb=document.querySelector("h2");
            let usuario=nomb.innerHTML*/
            ///////////////////////////////////////////////////
            /*setPersona()*/
            console.log('aca yo deberia meter mi nuevo usuario',props.d.nombre)
            console.log('esta es mi nueva persona',props.d)
            setArrayPersonas([
                ...arrayPersonas,
                props.d
            ])
            
        }
        return(
            <div>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <h1>Ingresar</h1>
                <button className="btn btn-primary" onClick={agregarElemento}>Agregar</button>
                
                {
                    arrayPersonas.map((t)=>
                    <tr key={t.id}>
                        <td>{t.id}</td>
                    <td>{t.nombre}</td>
                    <td>{t.apellido}</td>
                    <td>{t.dni}</td>
                    <td>{t.telefono}</td>
                    <td>{t.email}</td>
                    </tr>
                    )
                }
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        );
}
