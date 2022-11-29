import Table from 'react-bootstrap/Table'
import {ventas} from '../Data/Ventas'
import {estilos} from '../Styles/estilos.css'

export function Ventas(){
    return(
        <div>
        <h1 className="holardo02">Perfil</h1>
        <img className="imagen1" src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="W3Schools.com" width="120" height="142"></img>
          
       
        <h3 className="nombre">Pedro Rodriguez</h3>
        <br></br>
       
          <div className="parrafos">
             <p><b>Numero de identificación</b>      10027623  </p>
             <p><b>Correo electronico</b>   pedrorodri@hotmail.com  </p>
             <p><b>Ciudad</b>   Bogotá </p>
             <p><b>Dirección Principal</b>     cra 43 #67-91 </p>
         </div>
         </div>   
        )
    // return (
    //     <Table striped bordered hover>
    // <thead>
    //     <tr>
    //     <th>Fecha</th>
    //     <th>#id Venta</th>
    //     <th>Valor</th>
    //     </tr>
    // </thead>
    // <tbody>
    //     {
    //         ventas.map( data => {
    //             return (
    //                 <>
    //                     <tr>
    //                         <td>{data.fecha}</td>
    //                         <td>{data.idVenta}</td>
    //                         <td>{data.valor}</td>
    //                     </tr>
    //                 </>
    //             )
    //         })

    //     }
        
    
        
    // </tbody>
    // </Table>
    // )
}