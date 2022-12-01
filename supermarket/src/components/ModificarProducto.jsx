import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export function ModificarProducto() {
  const [productos, setProductos] = useState([]);
  

  getData();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#Orden</th>
          <th>Fecha</th>
          <th>Ciudad destino</th>
          <th>Estado</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productos.map((data) => {
          return (
            <>
              <tr>
                <td>{data._id}</td>
                <td>{data.nombre}</td>
                <td>{data.precio}</td>
                <td>{data.cantidad}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      localStorage.setItem('idModificar', data._id)
                    }}
                    href="/modificar"
                  >
                    Modificar
                  </Button>{" "}
                  </td>
                  <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                
                      eliminarProducto(data._id)
                    }}
                    
                  >
                    Eliminar
                  </Button>{" "}
                  </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );

  function getData() {
    fetch("http://localhost:3001/products/")
      .then((data) => data.json())
      .then((data) => {
        setProductos(data);
      });
  }

  function eliminarProducto(id) {
       
    fetch(`mongodb+srv://123user:123user@cluster0.idro7k1.mongodb.net/?retryWrites=true&w=majority/products/${id}`,{
            method:"DELETE",
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
                
            },
        }).then(resp => resp.json())
            
}
 
}
