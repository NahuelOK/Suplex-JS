function preCompraRender(){
 const producto = JSON.parse(localStorage.getItem("producto")) 
 let contenido = 
 `<div class="pre-compra">
 <div class="pre-izq">
     <h1>${producto.nombre}</h1>
     <div class="imagen-pre">
         <img src="../${producto.imgXXL}" alt="img">
     </div>
     <h2>Características del producto</h2>
     <div class="contenedor-info">${producto.info}</div>
 </div>
 <div class="pre-der">
     <h3>${producto.nombre}</h3>
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
             <label for="lista">Cantidad: </label>
             <select id="lista">
             <option value="opcion1">1 Unidad</option>
             <option value="opcion2">2 Unidades</option>
             <option value="opcion3">3 Unidades</option>
             <option value="opcion3">4 Unidades</option>
             <option value="opcion3">5 Unidades</option>
             <option value="opcion3">6 Unidades</option>
             <option value="opcion3">7 Unidades</option>
             <option value="opcion3">8 Unidades</option>
             <option value="opcion3">9 Unidades</option>
             <option value="opcion3">10 Unidades</option>
             </select>
             <p>(200) Disponibles</p>
         </div>
         <div class="boton-enviar-carro">
             <input type="button" value="Agregar Al Carrito" onclick="pushCarro()">
         </div>
         <div class="boton-comprar-ahora">
             <input type="button" value="Comprar Ahora">
         </div>
     </form>
     <div class="abajo-d">
         <h2>¿Tenés alguna pregunta?</h2>
         <p>Estamos Para Ayudarte!</p>
         <a href="">Preguntas Frecuentes Sobre Productos</a>
     </div>
 </div>
</div>`
document.getElementById("main-preCompra").innerHTML = contenido;
}
preCompraRender();

function guardarEnCarro(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
function cargarCarroLS(){
   return JSON.parse(localStorage.getItem("carrito")) || [];
}
function pushCarro(){
    let productoCargado = localStorage.getItem("producto")
    const carrito = cargarCarroLS();
    carrito.push(productoCargado)
    guardarEnCarro(carrito);
    Toastify({
        text: "Producto agregado al carrito",
        class:"info",
        duration: 1500, 
        gravity: "top",
        style:{
          background:"black"
        }
      }).showToast();
      renderBotonCarrito()
}

function cantidadProdcutosCarro(){
const carrito = cargarCarroLS();

return carrito.length; 
}

function renderBotonCarrito(){
    let botonCarrito = document.getElementById("boton-carro")
    let contenido = 
    `<button type="button" class="btn position-relative">
        <img class="carrito" src="../assets/Carro.png" alt="logo carro">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      ${cantidadProdcutosCarro()}
    </span>
  </button>`
  botonCarrito.innerHTML = contenido
}
renderBotonCarrito()