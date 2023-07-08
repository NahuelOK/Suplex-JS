let botonCrear = document.getElementById("boton-crear-cuenta")
let CuentasGuardadas = [];
let cuentasCreadas = JSON.parse(localStorage.getItem("cuentas-creadas")) || [];

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
        swal("Error la contraseña es demasiado corta","Revise que la contraseña tenga minimo 8 carácteres","error")
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
        document.getElementById("crear-pais").value = "";

        function guardarEnLS(){
            if (cuentasCreadas){
                CuentasGuardadas = cuentasCreadas
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