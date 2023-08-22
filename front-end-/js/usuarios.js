import { UsersUseCase } from '../../src/use-case/users-use-case.js'
import { renderUsers } from '../../src/util/table-render-users.js'

const tableUsuariosTbody = document.querySelector('#id-table-usuarios > tbody')
const usersUseCase = new UsersUseCase()

window.addEventListener("DOMContentLoaded", (event) => {
    const usuarios = usersUseCase.getUsers()
    let template = renderUsers(usuarios)
    tableUsuariosTbody.innerHTML = template
})

const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
  event.preventDefault()
  usersUseCase.setRemoveSession()
  window.location.href = '../login.html'; // Cambia esta línea
})