let botonCrear = document.getElementById("boton-crear-cuenta")
let CuentasGuardadas = [];
let cuentasCreadas = JSON.parse(localStorage.getItem("cuentas-creadas")) || [];

function noDuplicarUsuarios() {
    let usuario = document.getElementById("crear-usuario").value;
    let coincidencia = cuentasCreadas.some((element) => element.usuario === usuario);
    console.log(usuario + " user");
    console.log(coincidencia + " coin");
    return coincidencia;
  }
  function noDuplicarEmails() {
    let email = document.getElementById("crear-email").value;
    let coincidencia = cuentasCreadas.some((element) => element.email === email);
    console.log(email + " mail");
    console.log(coincidencia + " coin");
    return coincidencia;
  }
function redireccion(){
    window.location = "../pages/mi-cuenta.html"
}
function pushAlArray(){
    let email = document.getElementById("crear-email").value
    let usuario = document.getElementById("crear-usuario").value
    let contraseña = document.getElementById("crear-contraseña").value
    let validarContraseña = document.getElementById("validar-contraseña").value
    let direccion = document.getElementById("crear-direccion").value
    let postal = document.getElementById("crear-codigo-postal").value
    let cel = document.getElementById("crear-numero-cel").value
    let pais = document.getElementById("crear-pais").value

    let almacenador = {
        email:email,
        usuario:usuario,
        contraseña:contraseña,
        validarContraseña:validarContraseña,
        direccion:direccion,
        postal:postal,
        cel:cel,
        pais:pais,
    };

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if((email == "")||(usuario == "")||(contraseña == "")||(validarContraseña == "")||(direccion == "")||(postal == "")||(cel == "")){
        swal("Error al crear cuenta","Revise que los datos ingresados sean validos","error")
    }else if (!regexEmail.test(email)) {
        swal("Error en el email", "Ingrese un email válido", "error");
    }else if(contraseña !== validarContraseña){
        swal("Error las contraseñas no coinciden","Revise que sean identicas","error")
        document.getElementById("crear-contraseña").value = "";
        document.getElementById("validar-contraseña").value = "";
    }else if(contraseña.length < 8){
        swal("Error la contraseña es demaciado corta","Revise que la contraseña tenga minimo 8 carácteres","error")
        document.getElementById("crear-contraseña").value = "";
        document.getElementById("validar-contraseña").value = "";
    }else if(usuario.length > 8){
        swal("Error el nombre de usuario es de maximo 8 carácteres","Revise que el nombre de usuario tenga maximo 8 carácteres","error")
    }else if(noDuplicarUsuarios()){
        swal("Error nombre de usuario en uso","Por favor cambie el usuario","error")
        document.getElementById("crear-usuario").value = "";
    }else if(noDuplicarEmails()){
        swal("Error, la dirección de email ya está en uso","Por favor cambie el email o inicie sesión","error")
        document.getElementById("crear-email").value = "";
    }else{
        CuentasGuardadas.push(almacenador)
        swal({
            title: "Cuenta creada con exito!",
            text: "Muchas gracias por registrarse!",
            icon: "success",
            timer: 3000, 
            buttons: false, 
            });

        document.getElementById("crear-email").value = "";
        document.getElementById("crear-usuario").value = "";
        document.getElementById("crear-contraseña").value = "";
        document.getElementById("validar-contraseña").value = "";
        document.getElementById("crear-direccion").value = "";
        document.getElementById("crear-codigo-postal").value = "";
        document.getElementById("crear-numero-cel").value = "";
        pais = document.getElementById("crear-pais").value = "";

        function guardarEnLS() {
            let CuentasEnLS = localStorage.getItem("cuentas-creadas");
            if (CuentasEnLS) {
                CuentasGuardadas = JSON.parse(CuentasEnLS);
            }
            CuentasGuardadas.push(almacenador);
            let CuentasGuarJson = JSON.stringify(CuentasGuardadas);
            localStorage.setItem("cuentas-creadas", CuentasGuarJson);
        }
        guardarEnLS()
        setTimeout(redireccion, 2800);
    }
}
botonCrear.addEventListener("click", pushAlArray)

