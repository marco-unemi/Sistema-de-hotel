import { UsersUseCase } from '../../src/use-case/users-use-case.js';

const usersUseCase = new UsersUseCase();

const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
  event.preventDefault()
  usersUseCase.setRemoveSession()
  window.location.href = '../login.html'; // Cambia esta línea
})

const modalRespuesta = new bootstrap.Modal(document.getElementById('id-modal-imagenes'), {
    keyboard: false
})
const modalBody = document.querySelector('#id-modal-body')

const btnHabitacion1 = document.querySelector('#id-habitacion-1')
const btnHabitacion2 = document.querySelector('#id-habitacion-2')
const btnHabitacion3 = document.querySelector('#id-habitacion-3')
const btnHabitacion4 = document.querySelector('#id-habitacion-4')
const btnHabitacion5 = document.querySelector('#id-habitacion-5')
const btnHabitacion6 = document.querySelector('#id-habitacion-6')
const btnHabitacion7 = document.querySelector('#id-habitacion-7')
const btnHabitacion8 = document.querySelector('#id-habitacion-8')
const btnHabitacion9 = document.querySelector('#id-habitacion-9')
const btnHabitacion10 = document.querySelector('#id-habitacion-10')
const btnHabitacion11 = document.querySelector('#id-habitacion-11')
const btnHabitacion12 = document.querySelector('#id-habitacion-12')

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
btnHabitacion3.addEventListener('click', event => {
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
btnHabitacion4.addEventListener('click', event => {
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
btnHabitacion5.addEventListener('click', event => {
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
btnHabitacion6.addEventListener('click', event => {
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
btnHabitacion7.addEventListener('click', event => {
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
btnHabitacion8.addEventListener('click', event => {
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
btnHabitacion9.addEventListener('click', event => {
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
btnHabitacion10.addEventListener('click', event => {
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
btnHabitacion11.addEventListener('click', event => {
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
btnHabitacion12.addEventListener('click', event => {
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