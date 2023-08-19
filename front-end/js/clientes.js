
import { UsersUseCase } from '../../src/use-case/users-use-case.js';
import { ClienteUseCase } from '../../src/use-case/clientes-use-case.js'
import { renderClientes } from "../../src/util/table-render-clientes.js"
//    Creamos la instancia del caso de uso
const usersUseCase = new UsersUseCase();
const clienteUseCase = new ClienteUseCase()

const tableClientes = document.querySelector('#id-table-reserva-habitacion > tbody')

window.addEventListener("DOMContentLoaded", (event) => {
    const clientes = clienteUseCase.getClientes()

    const templateClientes = renderClientes(clientes)

    tableClientes.innerHTML = templateClientes
})

const btnCerrarSesion = document.querySelector('#id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
    event.preventDefault()
    usersUseCase.setRemoveSession()
    window.location.href = '../login.html'; // Cambia esta línea
})