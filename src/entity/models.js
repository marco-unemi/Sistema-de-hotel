
//ARCHIVO 6
export class Hotel {
    constructor(nombre, telefono, correo, ubicacion, tipoMoneda) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.ubicacion = ubicacion;
        this.tipoMoneda = tipoMoneda;
    }
}

export class Cliente {
    constructor(nombres, cedula, fechaReserva, telefono, correo, tipoCliente, habitacion, tiempoReserva, tipoPago, numeroTarjeta, descuento, monto) {
        this.nombres = nombres
        this.cedula = cedula
        this.fechaReserva = new Date(fechaReserva)
        this.telefono = telefono
        this.correo = correo
        this.tipoCliente = tipoCliente
        this.habitacion = habitacion
        this.tiempoReserva = tiempoReserva
        this.tipoPago = tipoPago
        this.numeroTarjeta = numeroTarjeta
        this.descuento = descuento
        this.monto = monto
    }
}
export class Habitacion {
    constructor(numeroHabitacion, precio) {
        this.numeroHabitacion = numeroHabitacion
        this.precio = precio
    }
}


