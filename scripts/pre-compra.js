function preCompraRender(){
    const producto = JSON.parse(localStorage.getItem("producto"));
    let contenido = `
      <div class="pre-compra">
        <div class="pre-izq">
              <h1>${producto.nombre}</h1>
            <div class="imagen-pre">
                <img src="../${producto.imgXXL}" alt="img">
            </div>
            <h2>Características del producto</h2>
            <div class="contenedor-info">${producto.info}</div>
        </div>
        <div class="pre-der">
            <div class="limite">
                <h3>${producto.nombre}</h3>
            </div>
            <p>$${producto.precio}</p>
            <p>12 cuotas de: $${producto.cuotas}</p>
            <a href="">Consultar Formas de Entrega</a>
            <div class="devolucion">
                <div>
                    <img src="../assets/Return.png" alt="">
                    <h3>Devolución gratis</h3>
                </div>
                <p>Hasta 30 días después que lo recibís </p>
            </div>
            <h4>Stock Disponible</h4>
            <form action="compra">
                <div class="seleccionar">
                    <label for="cantidad-select">Cantidad: </label>
                    <select id="cantidad-select">
                    <option value="1">1 Unidad</option>
                    <option value="2">2 Unidades</option>
                    <option value="3">3 Unidades</option>
                    <option value="4">4 Unidades</option>
                    <option value="5">5 Unidades</option>
                    <option value="6">6 Unidades</option>
                    <option value="7">7 Unidades</option>
                    <option value="8">8 Unidades</option>
                    <option value="9">9 Unidades</option>
                    <option value="10">10 Unidades</option>
                    </select>
                    <p>(200) Disponibles</p>
                </div>
                <div class="boton-enviar-carro">
                    <input type="button" value="Agregar Al Carrito" onclick="pushCarro(${producto.id})">
                </div>
                <div class="boton-comprar-ahora">
                <a class="comprar-ya" href="../pages/carrito.html"><input type="button" value="Comprar Ahora" onclick="comprarYa(${producto.id})"></a>
                </div>
            </form>
            <div class="abajo-d">
                <h2>¿Tenés alguna pregunta?</h2>
                <p>Estamos Para Ayudarte!</p>
                <a href="../pages/preg-frecuentes.html" target="_blank">Preguntas Frecuentes Sobre Productos</a>
            </div>
        </div>
      </div>`;
    document.getElementById("main-preCompra").innerHTML = contenido;
  }
preCompraRender();
  function guardarEnCarro(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function cargarCarroLS(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }

  function estaAgregado(id){
    const carrito = cargarCarroLS();
    return carrito.some((item) => item.id === id);
  }

  function pushCarro(id){
    const productoCargado = JSON.parse(localStorage.getItem("producto"));
    const carrito = cargarCarroLS();
    const selectElement = document.getElementById("cantidad-select");
    const cantidadSelect = selectElement.options[selectElement.selectedIndex].value;
    const cantidad = parseInt(cantidadSelect);
  
    if (estaAgregado(id)){
      const pos = carrito.findIndex((item) => item.id === id);
      carrito[pos].cantidad += cantidad;
      Toastify({
        text: "Producto agregado al carrito",
        class: "info",
        duration: 1500,
        gravity: "top",
        style: {
          background: "black",
        },
      }).showToast();
    } else {
      productoCargado.cantidad = cantidad;
      carrito.push(productoCargado);
      Toastify({
        text: "Producto agregado al carrito",
        class: "info",
        duration: 1500,
        gravity: "top",
        style: {
          background: "black",
        },
      }).showToast();
    }
    guardarEnCarro(carrito);
    renderBotonCarrito();
  }
  function comprarYa(id){
    const productoCargado = JSON.parse(localStorage.getItem("producto"));
    const carrito = cargarCarroLS();
    const selectElement = document.getElementById("cantidad-select");
    const cantidadSelect = selectElement.options[selectElement.selectedIndex].value;
    const cantidad = parseInt(cantidadSelect);

    if (estaAgregado(id)){
      const pos = carrito.findIndex((item) => item.id === id);
      carrito[pos].cantidad += cantidad;
    } else {
      productoCargado.cantidad = cantidad;
      carrito.push(productoCargado);
    }
    guardarEnCarro(carrito);
    renderBotonCarrito();
  }
  function cantidadProdcutosCarro(){
    const carrito = cargarCarroLS();
    return carrito.length;
  }
  
  function renderBotonCarrito(){
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