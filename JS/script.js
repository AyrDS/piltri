function Producto (nombre, precio, cantidad){
    this.nombre = nombre.toUpperCase();
    this.precio = precio;
    this.cantidad = cantidad;

    this.total = function (){
        this.precio = (this.precio*1.21) * this.cantidad;
        alert("Nombre: " + this.nombre + "\nCantidad: " + this.cantidad + "\nTotal a pagar con IVA incluido: " + this.precio);
    }
}
let nombre = prompt("Hola, ingrese nombre del producto que quiera comprar");
let precio = parseFloat(prompt("Ingrese precio"));
while(precio <= 0){
    precio = parseFloat(prompt("El precio debe ser mayor a 0"));
}
let cant = parseInt(prompt("Ingrese cantidad"));
while(cant <= 0){
    cant = parseInt(prompt("La cantidad debe ser mayor a 0"));
}

const producto1 = new Producto(nombre, precio, cant);

producto1.total();