window.onload = function() {
    mostrarPagPerfil()
};
let cuentaLogeada = JSON.parse(localStorage.getItem("usuario-logeado"));
let perfilCarga = document.getElementById("todo-perfil")
let comprasEnEstaSesion = JSON.parse(localStorage.getItem("compras-en-esta-sesion")); 
if(comprasEnEstaSesion === null){
  comprasEnEstaSesion = 0
}

function renderBotonCarrito() {
  const carro = JSON.parse(localStorage.getItem("carrito"));
  let cantidadTotal = 0;
  
  if(carro === null){
    const botonCarrito = document.getElementById("boton-carro");
    const contenido = `
    <button type="button" class="btn position-relative">
      <img class="carrito" src="../assets/Carro.png" alt="logo carro">
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
        <img class="carrito" src="../assets/Carro.png" alt="logo carro">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          ${cantidadTotal}
        </span>
      </button>
    `;
    botonCarrito.innerHTML = contenido;
  }
}
renderBotonCarrito()
function mostrarPagPerfil(){
    if (cuentaLogeada === null) {
        let contenido = `<div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`;

        let div = document.createElement("div")
        div.innerHTML = contenido
        perfilCarga.appendChild(div);

        setTimeout(() => {
            window.location = "../pages/mi-cuenta.html"
          }, 2200);
    }else{
        let contenido = `<div class="perfil-completo">
        <div class="card-img mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="../assets/user-grande.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${cuentaLogeada.usuario}</h5>
                <p class="card-text">${cuentaLogeada.pais}</p>
                <p class="card-text"><small class="text-body-secondary">Compras realizadas en esta sesión: ${comprasEnEstaSesion}</small></p>
            </div>
            </div>
        </div>
        </div>
        <div class="perfil">
        <div class="card">
            <div class="card-header">
            Datos de la cuenta 
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${cuentaLogeada.email}</li>
            <li class="list-group-item">Código postal: ${cuentaLogeada.postal}</li>
            <li class="list-group-item">Dirección: ${cuentaLogeada.direccion}</li>
            <li class="list-group-item">Cel: ${cuentaLogeada.cel}</li>
            </ul>
        </div>
        </div>
        </div>
        <div class="div-cerrar-sesion" id="cont-boton">
        <button type="button" id="cerrar-cuenta"class="btn btn-danger" onclick="cerrarSesion()">Cerrar Sesión</button>
        </div>`;

        let div = document.createElement("div")
        div.innerHTML = contenido
        perfilCarga.appendChild(div);
    }
    
}

function cerrarSesion(){
    let contBoton = document.getElementById("cont-boton")
    let cargar = `<div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
    let div = document.createElement("div")
    div.innerHTML = cargar
    contBoton.appendChild(div);
    localStorage.removeItem("usuario-logeado")
    localStorage.removeItem("compras-en-esta-sesion")

    setTimeout(() => {
        window.location = "../pages/mi-cuenta.html"
      }, 1800);
}
let botonCerrarSesion = document.getElementById("cerrar-cuenta")

