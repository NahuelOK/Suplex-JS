const carrito = JSON.parse(localStorage.getItem("carrito"));
if(carrito.length === 0){
  contenido = `<div class="carro-vacio">
  <h1 class="carro-vacio-h1">EL CARRITO ESTÁ VACÍO</h1>
  <h2 class="carro-vacio-h2">Cuando añadas un producto, aparecerá acá</h2>
  <a href="../index.html"><input class="boton-carro-vacio" type="button" value="EMPEZAR"></a>
  <h2 class="opciones-pago-carro">Todas las opciones de pago</h2>
  <img class="tarjetas" src="../assets/tarjetas.png" alt="tarjetas">
</div>`;
document.getElementById("tabla").innerHTML = contenido;

function cargarCarroLS(){
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function cantidadProductosCarro(){
  const carrito = cargarCarroLS();
  return carrito.length;
}

function renderBotonCarrito(){
  let botonCarrito = document.getElementById("boton-carro")
  let contenido = 
  `<button type="button" class="btn position-relative">
      <img class="carrito" src="../assets/Carro.png" alt="logo carro">
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadProductosCarro()}
  </span>
</button>`
botonCarrito.innerHTML = contenido
}
renderBotonCarrito()
}else{
  function renderCarro() {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    let contenido = "";
    contenido += ` <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio /u</th>
        <th scope="col">C (-1)</th>
        <th scope="col">C (+1)</th>
        <th scope="col">Borrar</th>
        <td>&nbsp;</td>
      </tr>
    </thead>`;
  
    carrito.forEach((producto) => {
      contenido += ` 
      <tbody>
        <tr>
          <th scope="row"><img class="img-carrito-muestra" src="../${producto.img}" alt="img muestra"></th>
          <td>${producto.nombre}</td>
          <td>(X ${producto.cantidad})</td>
          <td>$${producto.precio}</td>
          <td><img src="../assets/backspace-fill.svg" alt="-1" onclick="borrar1Item(${producto.id})"></td>
          <td><img src="../assets/backspace-reverse-fill.svg" alt="+1" onclick="sum1Item(${producto.id})"></td>
          <td><img src="../assets/trash.svg" alt="trash" onclick="borrarItem(${producto.id})"></td>
        </tr>
      </tbody>`;
    });
  
    contenido += `<tr>
      <th scope="row"></th>
      <th scope="col">Total A Pagar:</th>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <th>| $${totalAPagar()}</th>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><a href="../pages/fin.html" target="_blank"><input type="button" value="Ir A Pagar" class="pagar" onclick="restablecerPagina(499)"></a></td>
    </tr>`;
  
    document.getElementById("tabla").innerHTML = contenido;
  }
  
  renderCarro();
  
  function cargarCarroLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function guardarEnCarro(carrito) {
    const carritoNumerico = carrito.map((producto) => {
      return {
        ...producto,
        precio: parseFloat(producto.precio)
      };
    });
    localStorage.setItem("carrito", JSON.stringify(carritoNumerico));
  }
      
  
  function cantidadProductosCarro() {
    const carrito = cargarCarroLS();
    return carrito.length;
  }
  
  function renderBotonCarrito() {
    let botonCarrito = document.getElementById("boton-carro");
    let contenido = `<button type="button" class="btn position-relative">
            <img class="carrito" src="../assets/Carro.png" alt="logo carro">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          ${cantidadProductosCarro()}
        </span>
      </button>`;
    botonCarrito.innerHTML = contenido;
  }
  
  renderBotonCarrito();
  
  function totalAPagar() {
    const carrito = cargarCarroLS();
    const total = carrito.reduce((acumulador, item) => {
      const producto = item;
      return acumulador + producto.precio;
    }, 0);
    return total;
  }
  
  function borrarItem(id) {
    let carro = JSON.parse(localStorage.getItem("carrito"));
    let carroNuevo = carro.filter((item) => {
      return item.id !== id; 
    });
    guardarEnCarro(carroNuevo);
    renderCarro();
    renderBotonCarrito();
  }
    renderCarro();
  
    function cargarCarroLS(){
      return JSON.parse(localStorage.getItem("carrito")) || [];
    }
    function guardarEnCarro(carrito) {
      localStorage.setItem("carrito", JSON.stringify(carrito)); 
    }
    function cantidadProdcutosCarro(){
      const carrito = cargarCarroLS();
      
      return carrito.length; 
    }

  function renderBotonCarrito() {
    const carro = JSON.parse(localStorage.getItem("carrito"));
    let cantidadTotal = 0;
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
  renderBotonCarrito()
  
    function totalAPagar(){
      const carrito = cargarCarroLS();
      const total = carrito.reduce((acumulador, item) => {
        const producto = item;
        return acumulador + producto.precio * producto.cantidad; 
      }, 0);
      return total;
    }

  function borrarItem(id){
    let carro = JSON.parse(localStorage.getItem("carrito"));
    let carroNuevo = carro.filter((item) =>{
      const producto = item; 
      return producto.id !== id;
    });
    guardarEnCarro(carroNuevo);
    renderCarro();
    renderBotonCarrito();
   if(carro.length === 1){
    location.reload();
  }
  }
}

function borrar1Item(id) {
  let carro = JSON.parse(localStorage.getItem("carrito"));

  for (i=0; i<carro.length; i++) {
    if(carro[i].id === id){
      if(carro[i].cantidad > 1){
        carro[i].cantidad -= 1; 
      } else {
        carro.splice(i, 1);
      }
      break; 
    }
  }
  guardarEnCarro(carro);
  renderCarro();
  renderBotonCarrito();
  if(carro.length === 0){
    location.reload();
  }
}

function sum1Item(id) {
  let carro = JSON.parse(localStorage.getItem("carrito"));

  for (i=0; i<carro.length; i++) {
    if(carro[i].id === id){
      if(carro[i].cantidad > 0){
        carro[i].cantidad += 1; 
      } else {
        carro.splice(i, 1);
      }
      break; 
    }
  }
  guardarEnCarro(carro);
  renderCarro();
  renderBotonCarrito();
  if(carro.length === 0){
    location.reload();
  }
}


function restablecerPagina(id){
  let carro = JSON.parse(localStorage.getItem("carrito"));
  let carroNuevo = carro.filter((item) =>{
    const producto = item; 
    return producto.id === id;
  });
  guardarEnCarro(carroNuevo);
  renderCarro();
  renderBotonCarrito();
 if(carro.length === 1){
  location.reload();
  window.location = "../index.html"
  }
}

