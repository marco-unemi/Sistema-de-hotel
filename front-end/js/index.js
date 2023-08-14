
import { UsersUseCase } from '../../src/use-case/users-use-case.js'

const usersUseCase = new UsersUseCase()

const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
  event.preventDefault()
  usersUseCase.setRemoveSession()
  window.location = 'login.html'
})

const reportes = document.querySelector('.seccion-reportes'); // Cambio aquí
const usuarios = document.querySelector('.seccion-usuarios'); // Cambio aquí
const configuracion = document.querySelector('.seccion-configuracion'); // Cambio aquí

window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const sessionUser = usersUseCase.getSession();

  if (sessionUser.cargo === 'EMPLEADO') {
    reportes.style.display = 'none'; // Ocultar reportes
    usuarios.style.display = 'none'; // Ocultar usuarios
    configuracion.style.display = 'none'; // Ocultar configuración
  }
});


