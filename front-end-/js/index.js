
import { UsersUseCase } from '../../src/use-case/users-use-case.js'

const usersUseCase = new UsersUseCase()

const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
  event.preventDefault()
  usersUseCase.setRemoveSession()
  window.location = 'login.html'
})

const usuarios = document.querySelector('.seccion-usuarios')
const configuracion = document.querySelector('.seccion-configuracion')
const habitacionEmpresarialTab = document.getElementById('habitacion-empresarial-tab');

window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault()
  const sessionUser = usersUseCase.getSession()

  if (sessionUser.cargo === 'EMPLEADO') {
    usuarios.style.display = 'none'; // Ocultar usuarios
    configuracion.style.display = 'none'; // Ocultar configuración
    habitacionEmpresarialTab.style.display = 'none';
  }
});


