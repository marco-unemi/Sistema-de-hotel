import { UsersUseCase } from '../../src/use-case/users-use-case.js';

const usersUseCase = new UsersUseCase();

const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
  event.preventDefault()
  usersUseCase.setRemoveSession()
  window.location.href = '../login.html'; // Cambia esta línea
})

const modalRespuesta = new bootstrap.Modal(document.getElementById('id-modal-respuesta'), {
    keyboard: false
})
const modalBody = document.querySelector('#id-modal-body')

const btnHabitacion1 = document.querySelector('#id-habitacion-1')
const btnHabitacion2 = document.querySelector('#id-habitacion-2')

btnHabitacion1.addEventListener('click', event => {
    event.preventDefault()
    modalBody.innerHTML = `
    <h4>Caracteristicas</h4>
    <label>Nombres:</label> <span> </span><br>
    <label>Genero:</label> <span> </span><br>
    <label>Sueldo:</label> <span> </span>
    `
    // presentamos el modal
    modalRespuesta.show()
})
btnHabitacion2.addEventListener('click', event => {
    event.preventDefault()
    modalBody.innerHTML = `
    <h4>Caracteristicas</h4>
    <label>Nombres:</label> <span> </span><br>
    <label>Genero:</label> <span> </span><br>
    <label>Sueldo:</label> <span> </span>
    `
    // presentamos el modal
    modalRespuesta.show()
})