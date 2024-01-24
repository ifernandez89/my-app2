import React, { Fragment } from "react";
import './App.css';
//import PrimerComponente from "./Components/PrimerComponente";
//import Contador from "./Components/Contador";
import DetalleProducto from "./Components/DetalleProducto";
import Saludo from "./Components/Saludo";
import Lista from "./Components/Lista";
import ProductDetail from "./Components/ProductDetail";
import Registro from "./Components/formulario";
import Inicio from "./Components/Inicio";
import FormularioHook from "./Components/FormularioHook";
import Nosotros from "./Components/Nosotros";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import TareasAbm from "./Components/tareas-abm";


function App() {
  
  
return (
  
<Router>

<div className="container">
    <div className="btn-group">
 <NavLink to="/" className="btn btn-dark">
Inicio
</NavLink>
<NavLink to="/formulario" className="btn btn-dark">
Formulario
</NavLink>
<NavLink to="/lista" className="btn btn-dark">
Lista
</NavLink>
<NavLink to="/nosotros" className="btn btn-dark">
Nosotros
</NavLink>
<NavLink to="/detalle" className="btn btn-dark">
Detalle
</NavLink>
<NavLink to="/abm" className="btn btn-dark">
Abm de Tareas
</NavLink>
</div>

<Routes>
<Route path="/" element={<Inicio/>}/>
  <Route path="/formulario" element={<Registro/>}/>
  <Route path="/lista" element={<Lista/>}/>
  <Route path="/nosotros" element={<Nosotros/>}/>
  <Route path="/detalle" element={<ProductDetail/>}/>
  <Route path="/abm" element={<TareasAbm/>}/>
</Routes>

</div>
</Router>
  );
}

export default App;
