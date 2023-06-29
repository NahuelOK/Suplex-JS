window.onload = function() {
    mostrarPagPerfil()
};
let cuentaLogeada = JSON.parse(localStorage.getItem("usuario-logeado"));
let perfilCarga = document.getElementById("todo-perfil")

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
                <p class="card-text"><small class="text-body-secondary">${cuentaLogeada.infoUsuario}</small></p>
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

    setTimeout(() => {
        window.location = "../pages/mi-cuenta.html"
      }, 1800);
}
let botonCerrarSesion = document.getElementById("cerrar-cuenta")
botonCerrarSesion.addEventListener("click", cerrarSesion);
 