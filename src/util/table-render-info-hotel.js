

//archivo 4

export function renderHotel(hotel) {
    return hotel.map((h) => {
        return `<tr>
            <th>Nombre Hotel:</th>
            <td class="text-center">${h.nombre}</td>
        </tr>
        <tr>
            <th>Telefono:</th>
            <td class="text-center">${h.telefono}</td>
        </tr>
        <tr>
            <th>Correo:</th>
            <td class="text-center">${h.correo}</td>
        </tr>
        <tr>
            <th>Ubicación:</th>
            <td class="text-center">${h.ubicacion}</td>
        </tr>
        <tr>
            <th>Tipo de moneda:</th>
            <td class="text-center">${h.tipoMoneda}</td>
        </tr>`
    }).join('')
} 
