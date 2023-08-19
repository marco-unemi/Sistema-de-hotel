export function renderClientes(clientes) {
    return clientes.map((c) => {
        return `<tr>
            <td>${c.nombres}</td>
            <td>${c.cedula}</td>
            <td>${new Date(c.fechaReserva).toLocaleDateString("en-US")}</td>
            <td>${c.telefono}</td>
            <td>${c.tipoCliente}</td>
            <td>${c.habitacion}</td>
            <td>${c.tiempoReserva}</td>
            <td>${c.tipoPago}</td>
            <td>${c.descuento}</td>
            <td>${c.monto}</td>
        </tr>`
    }).join('')
}