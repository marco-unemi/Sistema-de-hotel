

//archivo 5

import { HotelRepository } from '../repository/hotel-repository.js'
import { Hotel } from '../entity/models.js'

export class HotelUseCase {
    constructor() {
        this.hotelRepository = new HotelRepository();
    }

    getInfoHotel() {
        return this.hotelRepository.getInfoHotel();
    }

    updateInfo(data) {
        const hotel = new Hotel(data.nombre, data.telefono, data.correo, data.ubicacion, data.tipoMoneda);
        this.hotelRepository.updateInfo(hotel);
        return hotel;
    }
}

