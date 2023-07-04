let botonLogin = document.getElementById("login");
function redireccion(){
    window.location = "../index.html"
}
function escucharEnter(evento){
    if (evento.key === "Enter") {
        traerCuentasLS();
    }
}
function traerCuentasLS(){
    let emailIngresado = document.getElementById("email-login").value
    let contraseñaIngresada = document.getElementById("contra-login").value 
    const CuentasEnLS = localStorage.getItem("cuentas-creadas")
    let CuentasEnLSJson= JSON.parse(CuentasEnLS)

    if (CuentasEnLSJson === null){
        swal({
            title: "Cuenta No Encontrada",
            text: "Registrese para tener una cuenta",
            icon: "error",
          });
    }

    const cuentaEncontrada = CuentasEnLSJson.find(cuenta => {
        return cuenta.email === emailIngresado && cuenta.contraseña === contraseñaIngresada;
    });

    if (cuentaEncontrada) {
        swal({
            title: "Login Existoso!!!",
            text: "redirigiendo a home...",
            icon: "success",
            timer: 3000, 
            buttons: false, 
          });
        emailIngresado = document.getElementById("email-login").value=""
        contraseñaIngresada = document.getElementById("contra-login").value=""
        localStorage.setItem("usuario-logeado", JSON.stringify(cuentaEncontrada));
        setTimeout(redireccion, 2800);
    }else{
        swal({
            title: "Error",
            text: "Verifique los datos ingresados",
            icon: "error",
          });
    }
}

botonLogin.addEventListener("click", traerCuentasLS)
document.addEventListener("keydown", escucharEnter)

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