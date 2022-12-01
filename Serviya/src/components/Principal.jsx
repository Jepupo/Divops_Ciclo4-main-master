import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Route, Routes} from "react-router-dom"
import {Cliente} from '../views/Cliente'
import {Admin} from '../views/Admin'
import { Fragment } from "react"
import {Login} from "../views/Login"
import { Modificar } from '../views/Modificar';
import { Carrito } from './Carrito';
import { Productos } from './Productos';
import { ModificarProducto } from './ModificarProducto';

export const Principal = () => {

	return (
    <Routes>
      <Fragment>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/cliente" element={<Cliente/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/modificar" element={<Modificar/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/modificarProducto" element={<ModificarProducto/>}/>

      </Fragment>
    </Routes>
	
	);
}

