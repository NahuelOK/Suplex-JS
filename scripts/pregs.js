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
function mostrarNick(){
  let cuentaLogeada = JSON.parse(localStorage.getItem("usuario-logeado"));
  let nick = cuentaLogeada.usuario;
  if(nick != "" || null){
      mostrarUsuario.innerHTML = `<a class="nav-link" href="mi-cuenta.html">${nick}</a>
  <img src="../assets/person-circle.svg" alt="user">`
  }
}

mostrarNick()