
//ARCHIVO 12
import { ServicioRepository } from '../repository/servicios-repository.js'
import { Servicio } from '../entity/models.js'

export class ServicioUseCase {
    constructor() {
        this.servicioRepository = new ServicioRepository()
    }

    getservicio() {
        return this.servicioRepository.getservicio()
    }

    setCreate(data) {
        const servicio = new Servicio(
            data.nombres,
            data.habitacion,
            data.producto,
            data.precio,
            data.cantidad,
            data.totalPagar,
            data.tipoPago,
            data.numeroTarjeta
        );
        this.servicioRepository.setCreate(servicio);
        return servicio;
    }

}

