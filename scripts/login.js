let botonLogin = document.getElementById("login");
let usuarioLogeado;

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
        setTimeout(redireccion, 2800);
        usuarioLogeado = true
        console.log(usuarioLogeado)
    }else {
        swal({
            title: "Cuenta no Encontrada",
            text: "Verifique los datos o Registrese para tener una cuenta",
            icon: "error",
          });
          usuarioLogeado = false
          console.log(usuarioLogeado)
    }
}

botonLogin.addEventListener("click", traerCuentasLS)
document.addEventListener("keydown", escucharEnter)