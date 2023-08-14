

//archivo 6

import { Hotel } from '../entity/models.js'

export class HotelRepository {
    constructor() {
        this.hotel = JSON.parse(localStorage.getItem('hotel')) || [];
        this.hotel = this.hotel.map(h => new Hotel(h.nombre, h.telefono, h.correo, h.ubicacion, h.tipoMoneda));
    }

    getInfoHotel() {
        return this.hotel;
    }

    updateInfo(infoHotel) {
        this.hotel = [infoHotel]; // Sobrescribe el array con el nuevo hotel
        localStorage.setItem('hotel', JSON.stringify(this.hotel));
    }
}
