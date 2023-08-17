
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
 export class Cliente {
    constructor(nombres, cedula, fechaReserva, telefono, correo, tipoCliente, tipoPago, descuento) {
        this.nombres = nombres
        this.cedula = cedula
        this.fechaReserva = new Date(fechaReserva)
        this.telefono = telefono
        this.correo = correo
        this.tipoCliente = tipoCliente
        this.tipoPago = tipoPago
        this.descuento = descuento
    }
}
export class Habitacion {
    constructor(numeroHabitacion, estado) {
        this.numeroHabitacion = numeroHabitacion
        this.estado = estado
    }
}
class Reserva {
    constructor(fechaReserva) {
        this.fechaReserva = fechaReserva
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