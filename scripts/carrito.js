function renderCarro() {
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  let contenido = "";
  contenido += ` <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio /u</th>
      <td>&nbsp;</td>
    </tr>
  </thead>`;

  carrito.forEach((producto) => {
    const productoObjeto = JSON.parse(producto);
    contenido += ` 
    <tbody>
      <tr>
        <th scope="row"><img class="img-carrito-muestra" src="../${productoObjeto.img}" alt="img muestra"></th>
        <td>${productoObjeto.nombre}</td>
        <td>(1)unidad</td>
        <td>$${productoObjeto.precio}</td>
        <td><img src="../assets/trash.svg" alt="trash" onclick="borrarItem(${productoObjeto.id})"></td>
      </tr>
    </tbody>`
  });

  contenido += `<tr>
    <th scope="row"></th>
    <th scope="col">Total A Pagar:</th>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <th>| $${totalAPagar()}</th>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><input type="button" value="Ir A Pagar"></td>
  </tr>`;

  document.getElementById("tabla").innerHTML = contenido;
}
  renderCarro();

  function cargarCarroLS(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  function guardarEnCarro(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
  function cantidadProdcutosCarro(){
    const carrito = cargarCarroLS();
    
    return carrito.length; 
  }
  function renderBotonCarrito(){
      let botonCarrito = document.getElementById("boton-carro")
      let contenido = 
      `<button type="button" class="btn position-relative">
          <img class="carrito" src="../assets/Carro.png" alt="logo carro">
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        ${cantidadProdcutosCarro()}
      </span>
    </button>`
    botonCarrito.innerHTML = contenido
  }
  renderBotonCarrito()

  function totalAPagar() {
    const carrito = cargarCarroLS();
    const total = carrito.reduce((acumulador, item) => {
      const producto = JSON.parse(item);
      return acumulador + producto.precio;
    }, 0);
    return total;
  }
  function borrarItem(id) {
    let carro = JSON.parse(localStorage.getItem("carrito"));
    let carroNuevo = carro.filter(item =>{ 
    const producto = JSON.parse(item);
    return producto.id !== id;
    });
    guardarEnCarro(carroNuevo);
    renderCarro();
    renderBotonCarrito()
  }  