
import { UsersUseCase } from '../../src/use-case/users-use-case.js';
import { ClienteUseCase } from '../../src/use-case/clientes-use-case.js'

const usersUseCase = new UsersUseCase();
const clienteUseCase = new ClienteUseCase()

document.addEventListener('DOMContentLoaded', function () {
    const selectCliente = document.getElementById('clientNameSelect');
    const romInput = document.getElementById('rom');

    const clientes = clienteUseCase.getClientes();

    selectCliente.options.length = 1;
    for (const c of clientes) {
        const option = document.createElement('option');
        option.value = c.nombres;
        option.text = c.nombres;
        selectCliente.appendChild(option);
    }

    selectCliente.addEventListener('change', function () {
        const selectednombres = selectCliente.value;
        const selectedCustomer = clientes.find(c => c.nombres === selectednombres);

        romInput.value = selectedCustomer.habitacion;
    });
});


const btnCerrarSesion = document.querySelector('#id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
    event.preventDefault()
    usersUseCase.setRemoveSession()
    window.location.href = '../login.html'; // Cambia esta línea
})

const tipoPagoSelect = document.getElementById("tipoPago");
const tarjetaInputContainer = document.getElementById("tarjeta-input-container");

tipoPagoSelect.addEventListener("change", function () {
    if (tipoPagoSelect.value === "Tarjeta") {
        tarjetaInputContainer.style.display = "block";
    } else {
        tarjetaInputContainer.style.display = "none";
    }
});

// Obtén el elemento del cuerpo de la tabla
const facturasBody = document.getElementById('facturas-body');

// Función para cargar y mostrar las facturas desde el Local Storage
function mostrarFacturas() {
    // Obtén las facturas guardadas del Local Storage
    const facturasGuardadas = JSON.parse(localStorage.getItem('facturas')) || [];

    // Limpia el contenido actual del cuerpo de la tabla
    facturasBody.innerHTML = '';

    // Itera sobre las facturas y crea una fila por cada una
    facturasGuardadas.forEach(factura => {
        const row = facturasBody.insertRow();
        row.innerHTML = `
            <td>${factura.cliente}</td>
            <td>${factura.habitacion}</td>
            <td>${factura.producto}</td>
            <td>${factura.precio}</td>
            <td>${factura.cantidad}</td>
            <td>${factura.tipoPago}</td>
            <td>${factura.totalPagar}</td>
        `;
    });
}

// Llama a la función para mostrar las facturas al cargar la página
mostrarFacturas();
