let mostrarUsuario = document.getElementById("nick-cuenta")
function mostrarNick(){
  let cuentaLogeada = JSON.parse(localStorage.getItem("usuario-logeado"));
  if(cuentaLogeada === null){
  console.log("NO HAY USUARIOS LOGEADOS")
  }else{
    let nick = cuentaLogeada.usuario;
    if(nick != "" || null){
      mostrarUsuario.innerHTML = `<a class="nav-link" href="../pages/perfil.html">${nick}</a>
    <img src="../assets/person-circle.svg" alt="user">`
    }
  }
}
mostrarNick()