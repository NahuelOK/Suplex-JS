function renderShakers(){
  let productos = cargarProdcutosLS();
  let shakers = productos.filter(filtrarPorCategoria);
  let contenido = ""; 
  
  shakers.forEach(producto => {
      contenido += `<div class="producto">
      <div class="cont-img">
        <img src="../${producto.img}" alt="ìmg">
      </div>
      <div class="parte-baja">
        <p class="nombre-produ">${producto.nombre}</p>
        <p class="precio">$${producto.precio}</p>
        <div>
         <input class="boton-ver" type="button" onClick="preCompra(${producto.id});" value="VER">
        </div>
      </div>
      </div>`
  });
  document.getElementById("tira1").innerHTML = contenido;
}
function filtrarPorCategoria(producto){
  return producto.categoria == "S";
}
renderShakers()

function cargarCarroLS(){
  return JSON.parse(localStorage.getItem("carrito")) || [];
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