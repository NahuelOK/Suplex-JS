let botonLogin = document.getElementById("login");
let mostrarUsuario = document.getElementById("nick-cuenta")

function mostrarNick(){
    let cuentaLogeada = JSON.parse(localStorage.getItem("usuario-logeado"));
    let nick = cuentaLogeada.usuario;
    if(nick != "" || null){
        mostrarUsuario.innerHTML = `<a class="nav-link" href="mi-cuenta.html">${nick}</a>
    <img src="../assets/person-circle.svg" alt="user">`
    }
}
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

mostrarNick()