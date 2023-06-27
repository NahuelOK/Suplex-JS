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