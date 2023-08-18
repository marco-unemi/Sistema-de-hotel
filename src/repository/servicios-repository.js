
//ARCHIVO 10
import { Servicio } from "../entity/models.js"

export class ServicioRepository {
    constructor() {
        this.servicio = JSON.parse(localStorage.getItem('servicio')) || []
        this.servicio = this.servicio.map(s => {
            return new Servicio(
                s.nombres,
                s.habitacion,
                s.producto,
                s.precio,
                s.cantidad,
                s.totalPagar,
                s.tipoPago,
                s.numeroTarjeta
            )
        })
    }

    getservicio() {
        return this.servicio
    }

    setCreate(servicio) {
        this.servicio.push(servicio)
        localStorage.setItem('servicio', JSON.stringify(this.servicio))
    }
}

