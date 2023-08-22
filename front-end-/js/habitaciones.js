import { UsersUseCase } from '../../src/use-case/users-use-case.js';

const usersUseCase = new UsersUseCase();

const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
  event.preventDefault()
  usersUseCase.setRemoveSession()
  window.location.href = '../login.html'; // Cambia esta línea
})