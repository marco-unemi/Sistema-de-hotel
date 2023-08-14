
//archivo 3
export class Hotel {
    constructor(nombre, telefono, correo, ubicacion, tipoMoneda){
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.ubicacion = ubicacion;
        this.tipoMoneda = tipoMoneda;
    }
}
class Pago {
    constructor(tipoPago, monto, fecha) {
        this.tipoPago = tipoPago
        this.monto = monto
        this.fecha = fecha
    }
}
class Cliente {
    constructor(nombres, apellidos, genero, fechaNacimiento, telefono, correo, tipoCliente) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.genero = genero
        this.fechaNacimiento = fechaNacimiento
        this.telefono = telefono
        this.correo = correo
        this.tipoCliente = tipoCliente
    }
}
class Habitacion {
    constructor(numeroHabitacion, estado) {
        this.numeroHabitacion = numeroHabitacion
        this.estado = estado
    }
}
class Reserva {
    constructor() {

    }
}
class Factura {
    constructor() {

    }
}
class Consumo {
    constructor() {

    }
}
class Descuento {
    constructor() {

    }
}