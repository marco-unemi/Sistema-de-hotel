
import { UsersUseCase } from '../../src/use-case/users-use-case.js';
import { ClienteUseCase } from '../../src/use-case/clientes-use-case.js'
import { ServicioUseCase } from '../../src/use-case/servicios-use-case.js';
import { renderClientes, renderFacturaServicios } from "../../src/util/table-render-clientes.js"
//    Creamos la instancia del caso de uso
const usersUseCase = new UsersUseCase();
const serviciosUseCase = new ServicioUseCase()
const clienteUseCase = new ClienteUseCase()

const tableClientes = document.querySelector('#id-table-reserva-habitacion > tbody')
const tableServicioClientes = document.querySelector('#id-table-servicios > tbody')

window.addEventListener("DOMContentLoaded", (event) => {
    const clientes = clienteUseCase.getClientes()
    const servicio = serviciosUseCase.getservicio()

    const templateClientes = renderClientes(clientes)
    const templateServicios = renderFacturaServicios(servicio)

    tableClientes.innerHTML = templateClientes
    tableServicioClientes.innerHTML = templateServicios
})

const tipoPagoSelect = document.getElementById("id-tipo-pago");
const tarjetaInputContainer = document.getElementById("tarjeta-input-container");
tipoPagoSelect.addEventListener("change", function () {
    if (tipoPagoSelect.value === "Tarjeta") {
        tarjetaInputContainer.style.display = "block";
    } else {
        tarjetaInputContainer.style.display = "none";
    }
});

const btnCerrarSesion = document.querySelector('#id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
    event.preventDefault()
    usersUseCase.setRemoveSession()
    window.location.href = '../login.html'; // Cambia esta línea
})