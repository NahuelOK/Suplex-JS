function renderMasVendido(){
  let productos = cargarProdcutosLS();
  let masVendido = productos.filter(filtrarPorVendido);
  let contenido = ""; 
  
  masVendido.forEach(producto => {
      contenido += `<div class="producto">
      <div class="cont-img">
        <img src="${producto.img}" alt="ìmg">
      </div>
      <div class="parte-baja">
        <p class="nombre-produ">${producto.nombre}</p>
        <p class="precio">$${producto.precio}</p>
        <div>
         <input class="boton-ver" type="button" onClick="preCompraIndex(${producto.id});" value="VER">
        </div>
      </div>
      </div>`
  });
  document.getElementById("tira1-index").innerHTML = contenido;
}
function renderLoUltimo(){
  let productos = cargarProdcutosLS();
  let loUltimo = productos.filter(filtrarPorNuevos);
  let contenido = ""; 
  
  loUltimo.forEach(producto => {
      contenido += `<div class="producto">
      <div class="cont-img">
        <img src="${producto.img}" alt="ìmg">
      </div>
      <div class="parte-baja">
        <p class="nombre-produ">${producto.nombre}</p>
        <p class="precio">$${producto.precio}</p>
        <div>
         <input class="boton-ver" type="button" onClick="preCompraIndex(${producto.id});" value="VER">
        </div>
      </div>
      </div>`
  });
  document.getElementById("tira2-index").innerHTML = contenido;
}
function filtrarPorVendido(producto){
  return producto.masVendido == true;
}
function filtrarPorNuevos(producto){
  return producto.masNuevo == true;
}
renderMasVendido()
renderLoUltimo()

function cargarCarroLS(){
  return JSON.parse(localStorage.getItem("carrito")) || [];
}
function cantidadProdcutosCarro(){
  const carrito = cargarCarroLS();
  
  return carrito.length; 
  }
  
  function renderBotonCarrito() {
    const carro = JSON.parse(localStorage.getItem("carrito"));
    let cantidadTotal = 0;
    
    if(carro === null){
      const botonCarrito = document.getElementById("boton-carro");
      const contenido = `
      <button type="button" class="btn position-relative">
        <img class="carrito" src="assets/Carro.png" alt="logo carro">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0
        </span>
      </button>
    `;
    botonCarrito.innerHTML = contenido;
    }else{
      for (const producto of carro) {
        cantidadTotal += producto.cantidad;
      }
      const botonCarrito = document.getElementById("boton-carro");
      const contenido = `
        <button type="button" class="btn position-relative">
          <img class="carrito" src="assets/Carro.png" alt="logo carro">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${cantidadTotal}
          </span>
        </button>
      `;
      botonCarrito.innerHTML = contenido;
    }
  }
  renderBotonCarrito()
let mostrarUsuario = document.getElementById("nick-cuenta")
function mostrarNick(){
    let cuentaLogeada = JSON.parse(localStorage.getItem("usuario-logeado"));
    let nick = cuentaLogeada.usuario;
    if(nick != "" || null){
        mostrarUsuario.innerHTML = `<a class="nav-link" href="pages/mi-cuenta.html">${nick}</a>
    <img src="assets/person-circle.svg" alt="user">`
    }
}
mostrarNick()