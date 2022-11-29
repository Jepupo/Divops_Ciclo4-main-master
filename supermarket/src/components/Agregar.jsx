import Button from 'react-bootstrap/Button';

export const Agregar = () =>{
    

    return(
        <form>
            <div class="form-group" style={{marginTop: "20px"}}>
                <label for="exampleInputEmail1">Dirección recogida</label>
                <input class="form-control" id="direccionre" aria-describedby="emailHelp" placeholder="Ingrese la dirección"/>
            </div>
            <div class="form-group" style={{marginTop: "20px"}}>
                <label for="exampleInputEmail1">Ciudad Recogida</label>
                <input class="form-control" id="ciudadre" aria-describedby="emailHelp" placeholder="Ciudad"/>
            </div>
            <div class="form-group" style={{marginTop: "20px"}}>
                <label for="exampleInputEmail1">Nombre del destinatario</label>
                <input class="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Nombre completo"/>
            </div>
            <div class="form-group" style={{marginTop: "20px"}}>
                <label for="exampleInputEmail1">Cedula o indentificación del destinatario</label>
                <input class="form-control" id="nombre1" aria-describedby="emailHelp" placeholder="Ingrese su numero de documento"/>
            </div>
            <div class="form-group" style={{marginTop: "20px"}}>
                <label for="exampleInputEmail1">Dirección de entrega</label>
                <input class="form-control" id="nombre2" aria-describedby="emailHelp" placeholder="Ingrese dirección de entrega"/>
            </div>
            <div class="form-group" style={{marginTop: "20px"}}>
                <label for="exampleInputEmail1">Ciudad de entrega</label>
                <input class="form-control" id="nombre3" aria-describedby="emailHelp" placeholder="Ingrese ciudad de entrega"/>
            </div>
            <div class="form-group" style={{marginTop: "10px"}}>
                <label for="exampleInputEmail1">Fecha</label>
                <input class="form-control" id="nombre4" aria-describedby="emailHelp" placeholder="Ingrese la fecha"/>
            </div>
            <div class="form-group" style={{marginTop: "10px"}}>
                <label for="exampleInputEmail1">Hora</label>
                <input class="form-control" id="nombre5" aria-describedby="emailHelp" placeholder="Ingrese la hora de recogida"/>
            </div>
            <div class="form-group" style={{marginTop: "10px"}}>
                <label for="exampleInputEmail1">Largo del producto</label>
                <input class="form-control" id="nombre6" aria-describedby="emailHelp" placeholder="Ingrese el largo del producto"/>
            </div>
            <div class="form-group" style={{marginTop: "10px"}}>
                <label for="exampleInputEmail1">Ancho del producto</label>
                <input class="form-control" id="nombre7" aria-describedby="emailHelp" placeholder="Ingrese el ancho del producto"/>
            </div>
            <div class="form-group" style={{marginTop: "10px"}}>
                <label for="exampleInputEmail1">Alto del producto</label>
                <input class="form-control" id="nombre8" aria-describedby="emailHelp" placeholder="Ingrese el alto del producto"/>
            </div>
            <div class="form-group" style={{marginTop: "10px"}}>
                <label for="exampleInputEmail1">Peso</label>
                <input class="form-control" id="nombre9" aria-describedby="emailHelp" placeholder="Ingrese el peso del producto"/>
            </div>
            <center>
                <Button  href='/modificarProducto' type="submit" class="btn btn-primary" style={{marginTop: "20px"}} onClick={()=>{
              let nuevo = JSON.stringify({direccionre: document.getElementById('direccionre').value, ciudadre: document.getElementById('ciudadre').value,nombre: document.getElementById('nombre').value })
                agregarProducto(nuevo)
              
            }}>Agregar</Button></center>
        </form>
    )

    function agregarProducto(nuevo) {
    
        fetch(`http://localhost:3001/products/`,{
            method:"POST",
            body:  nuevo,
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
                
            },
        }).then(resp => resp.json())
            
            
    }
}