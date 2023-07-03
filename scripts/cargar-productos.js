const productos = [
    {id: 1, nombre: "Proteina Whey SD NUTRITION", precio: 8800, cuotas:(8800/12).toFixed(2), img: "assets/produ1.png",imgXXL:"assets/produ1-xxl.png",info: info1, categoria: "P", masVendido: true, masNuevo: false},
    {id: 2, nombre: "Proteina Whey GOLD", precio: 8750, cuotas:(8750/12).toFixed(2), img: "assets/produ2.png",imgXXL:"assets/produ2-xxl.png",info: info2, categoria: "P", masVendido: false, masNuevo: false},
    {id: 3, nombre: "Proteina Vegana WEIDER", precio: 5800, cuotas:(5800/12).toFixed(2), img: "assets/produ3.png",imgXXL:"assets/produ3-xxl.png",info: info3, categoria: "P", masVendido: false, masNuevo: false},
    {id: 4, nombre: "Protenia Whey ENA", precio: 8900, cuotas:(8900/12).toFixed(2), img: "assets/produ4.png",imgXXL:"assets/produ4-xxl.png",info: info4, categoria: "P", masVendido: false, masNuevo: false},
    {id: 5, nombre: "Barra de Protenia de Frutilla ENA (x10)", precio: 6800, cuotas:(6800/12).toFixed(2), img: "assets/produ5.png",imgXXL:"assets/produ5-xxl.png",info: info5, categoria: "P", masVendido: false, masNuevo: false},
    {id: 6, nombre: "Proteina Whey HARDCORE", precio: 10000, cuotas:(10000/12).toFixed(2), img: "assets/produ6.png",imgXXL:"assets/produ6-xxl.png",info: info6, categoria: "P", masVendido: false, masNuevo: false},
    {id: 7, nombre: "Proteina De Planta ENA", precio: 8900, cuotas:(8900/12).toFixed(2), img: "assets/produ7.png",imgXXL:"assets/produ7-xxl.png",info: info7, categoria: "P", masVendido: false, masNuevo: true},
    {id: 8, nombre: "Proteina Whey ON", precio: 9700, cuotas:(9700/12).toFixed(2), img: "assets/produ8.png",imgXXL:"assets/produ8-xxl.png",info: info8, categoria: "P", masVendido: false, masNuevo: false},
    {id: 9, nombre: "Proteina Whey STAR", precio: 14000, cuotas:(14000/12).toFixed(2), img: "assets/produ9.png",imgXXL:"assets/produ9-xxl.png",info: info9, categoria: "P", masVendido: true, masNuevo: false},
    {id: 10, nombre: "Proteina EGG ULTRATECH", precio: 9890, cuotas:(9890/12).toFixed(2), img: "assets/produ10.png",imgXXL:"assets/produ10-xxl.png",info: info10, categoria: "P", masVendido: false, masNuevo: true},
    {id: 11, nombre: "Proteina Whey De Chocolate", precio: 7800, cuotas:(7800/12).toFixed(2), img: "assets/produ11.png",imgXXL:"assets/produ11-xxl.png",info: info11, categoria: "P", masVendido: false, masNuevo: false},
    {id: 12, nombre: "Proteina De Vainilla ENA", precio: 2600, cuotas:(2600/12).toFixed(2), img: "assets/produ12.png",imgXXL:"assets/produ12-xxl.png",info: info12, categoria: "P", masVendido: false, masNuevo: true},
    {id: 13, nombre: "Proteina Whey STAR Combo x2", precio: 20340, cuotas:(20340/12).toFixed(2), img: "assets/produ13.png",imgXXL:"assets/produ13-xxl.png",info: info13, categoria: "P", masVendido: true, masNuevo: false},
    {id: 14, nombre: "Proteina Whey MAVERICK", precio: 11900, cuotas:(11900/12).toFixed(2), img: "assets/produ14.png",imgXXL:"assets/produ14-xxl.png",info: info14, categoria: "P", masVendido: false, masNuevo: true},
    {id: 15, nombre: "Proteina De Chocolate ENA", precio: 2600, cuotas:(2600/12).toFixed(2), img: "assets/produ15.png",imgXXL:"assets/produ15-xxl.png",info: info15, categoria: "P", masVendido: true, masNuevo: false},
    {id: 16, nombre: "Barra De Proteina De Vainilla ENA (x10)", precio: 6800, cuotas:(6800/12).toFixed(2), img: "assets/produ16.png",imgXXL:"assets/produ16-xxl.png",info: info16, categoria: "P", masVendido: false, masNuevo: false},
    {id: 17, nombre: "Creatina Monohidratada GEN", precio: 9800, cuotas:(9800/12).toFixed(2), img: "assets/produ17.png",imgXXL:"assets/produ17-xxl.png",info: info17, categoria: "C", masVendido: false, masNuevo: false},
    {id: 18, nombre: "Creatina Micronizada ON", precio: 16800, cuotas:(16800/12).toFixed(2), img: "assets/produ18.png",imgXXL:"assets/produ18-xxl.png",info: info18, categoria: "C", masVendido: false, masNuevo: false},
    {id: 19, nombre: "Creatina Pura Pharmathlete", precio: 5800, cuotas:(5800/12).toFixed(2), img: "assets/produ19.png",imgXXL:"assets/produ19-xxl.png",info: info19, categoria: "C", masVendido: false, masNuevo: false},
    {id: 20, nombre: "Creatina Monohidratada ULTRA TECH", precio: 5600, cuotas:(5600/12).toFixed(2), img: "assets/produ20.png",imgXXL:"assets/produ20-xxl.png",info: info20, categoria: "C", masVendido: false, masNuevo: true},
    {id: 21, nombre: "Creatina Monohidratada +GROWTH", precio: 13100, cuotas:(13100/12).toFixed(2), img: "assets/produ21.png",imgXXL:"assets/produ21-xxl.png",info: info21, categoria: "C", masVendido: false, masNuevo: false},
    {id: 22, nombre: "Creatina Micronizada Pura ENA", precio: 7800, cuotas:(7800/12).toFixed(2), img: "assets/produ22.png",imgXXL:"assets/produ22-xxl.png",info: info22, categoria: "C", masVendido: false, masNuevo: false},
    {id: 23, nombre: "Creatina Monohidratada STAR", precio: 18200, cuotas:(18200/12).toFixed(2), img: "assets/produ23.png",imgXXL:"assets/produ23-xxl.png",info: info23, categoria: "C", masVendido: true, masNuevo: false},
    {id: 24, nombre: "Creatina Monohidratada GENTECH", precio: 16300, cuotas:(16300/12).toFixed(2), img: "assets/produ24.png",imgXXL:"assets/produ24-xxl.png",info: info24, categoria: "C", masVendido: false, masNuevo: true},
    {id: 25, nombre: "Creatina Micronizada Pura ENA (saborizada)", precio: 7800, cuotas:(7800/12).toFixed(2), img: "assets/produ25.png",imgXXL:"assets/produ25-xxl.png",info: info25, categoria: "C", masVendido: false, masNuevo: false},
    {id: 26, nombre: "Creatina RED UNLIMITED", precio: 3200, cuotas:(3200/12).toFixed(2), img: "assets/produ26.png",imgXXL:"assets/produ26-xxl.png",info: info26, categoria: "C", masVendido: false, masNuevo: false},
    {id: 27, nombre: "Creatina Monohidratada MYPROTEIN", precio: 6800, cuotas:(6800/12).toFixed(2), img: "assets/produ27.png",imgXXL:"assets/produ27-xxl.png",info: info27, categoria: "C", masVendido: false, masNuevo: false},
    {id: 28, nombre: "Creatina Monohidratada GOLD", precio: 15800, cuotas:(15800/12).toFixed(2), img: "assets/produ28.png",imgXXL:"assets/produ28-xxl.png",info: info28, categoria: "C", masVendido: true, masNuevo: false},
    {id: 29, nombre: "Creatina Monohidratada ELEMENTAL", precio: 5800, cuotas:(5800/12).toFixed(2), img: "assets/produ29.png",imgXXL:"assets/produ29-xxl.png",info: info29, categoria: "C", masVendido: false, masNuevo: false},
    {id: 30, nombre: "Creatina Monohidratada Pura BIOACTION", precio: 9860, cuotas:(9860/12).toFixed(2), img: "assets/produ30.png",imgXXL:"assets/produ30-xxl.png",info: info30, categoria: "C", masVendido: false, masNuevo: true},
    {id: 31, nombre: "Creatina Monohidratada META NUTRITION", precio: 10580, cuotas:(10580/12).toFixed(2), img: "assets/produ31.png",imgXXL:"assets/produ31-xxl.png",info: info31, categoria: "C", masVendido: false, masNuevo: false},
    {id: 32, nombre: "Creatina Platinum MUSCLETECH", precio: 28000, cuotas:(28000/12).toFixed(2), img: "assets/produ32.png",imgXXL:"assets/produ32-xxl.png",info: info32, categoria: "C", masVendido: false, masNuevo: false},
    {id: 33, nombre: "Shaker negro y verde ENA", precio: 3000, cuotas:(3000/12).toFixed(2), img: "assets/produ33.png",imgXXL:"assets/produ33-xxl.png",info: info33, categoria: "S", masVendido: false, masNuevo: false},
    {id: 34, nombre: "Shaker blanco y negro FSA", precio: 5000, cuotas:(5000/12).toFixed(2), img: "assets/produ34.png",imgXXL:"assets/produ34-xxl.png",info: info34, categoria: "S", masVendido: true, masNuevo: false},
    {id: 35, nombre: "Shaker Transparente SC FITNESS", precio: 1800, cuotas:(1800/12).toFixed(2), img: "assets/produ35.png",imgXXL:"assets/produ35-xxl.png",info: info35, categoria: "S", masVendido: false, masNuevo: false},
    {id: 36, nombre: "Shaker Gris EVERLAST", precio: 4300, cuotas:(4300/12).toFixed(2), img: "assets/produ36.png",imgXXL:"assets/produ36-xxl.png",info: info36, categoria: "S", masVendido: false, masNuevo: false},
    {id: 37, nombre: "Shaker Transparente GOT PROTEIN", precio: 4570, cuotas:(4570/12).toFixed(2), img: "assets/produ37.png",imgXXL:"assets/produ37-xxl.png",info: info37, categoria: "S", masVendido: false, masNuevo: true},
    {id: 38, nombre: "Shaker Rojo BSX", precio: 7450, cuotas:(7450/12).toFixed(2), img: "assets/produ38.png",imgXXL:"assets/produ38-xxl.png",info: info38, categoria: "S", masVendido: false, masNuevo: false},
    {id: 39, nombre: "Shaker Blanco Transparente ON", precio: 1200, cuotas:(1200/12).toFixed(2), img: "assets/produ39.png",imgXXL:"assets/produ39-xxl.png",info: info39, categoria: "S", masVendido: false, masNuevo: false},
    {id: 40, nombre: "Shaker Negro Transparente GOLD", precio: 2400, cuotas:(2400/12).toFixed(2), img: "assets/produ40.png",imgXXL:"assets/produ40-xxl.png",info: info40, categoria: "S", masVendido: true, masNuevo: false},
]
function guardarEnLS(){
    localStorage.setItem("productos", JSON.stringify(productos))
}
function cargarProdcutosLS(){
   return JSON.parse(localStorage.getItem("productos")) 
}
guardarEnLS()
function preCompra(id){
    let productos = cargarProdcutosLS();
    let producto = productos.find(item=>item.id == id)
    localStorage.setItem("producto", JSON.stringify(producto))
    location.href = "../pages/pre-compra.html"
}
function preCompraIndex(id){
    let productos = cargarProdcutosLS();
    let producto = productos.find(item=>item.id == id)
    localStorage.setItem("producto", JSON.stringify(producto))
    location.href = "pages/pre-compra.html"
}