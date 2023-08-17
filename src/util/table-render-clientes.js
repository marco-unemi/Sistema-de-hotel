
export function renderClientes(clientes) {
    return clientes.map((c) => {
        return `<tr>
            <td>${c.nombres}</td>
            <td>${c.cedula}</td>
            <td>${c.correo}</td>
            <td>${new Date(c.fechaReserva).toLocaleDateString("en-US")}</td>
            <td>${c.telefono}</td>

        </tr>`
    }).join('')
}