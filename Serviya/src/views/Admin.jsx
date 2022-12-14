import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { ModificarProducto } from '../components/ModificarProducto';
import { Ventas } from '../components/Ventas';
import { Agregar } from '../components/Agregar';


export const Admin = () => {
	return (
	<div className="container border">
		<Tabs
        defaultActiveKey="modificarProducto"
        id="justify-tab-example"
        className="mb-3"
        justify
        >

        <Tab eventKey="modificarProducto" title="Actualizar ordenes">
            <ModificarProducto />
        </Tab>
        <Tab eventKey="longer-tab" title="Perfil">
            <Ventas />
        </Tab>
        <Tab eventKey="idk" title="Agregar nueva orden">
            <Agregar />
        </Tab>

    </Tabs>
    </div>
	);
}