import { UsersUseCase } from '../../src/use-case/users-use-case.js';
import { renderPerfil } from '../../src/util/table-render-perfil.js';

const tablePerfilTbody = document.querySelector('#id-table-perfil > tbody');
const editButton = document.querySelector('#id-edit-button');

const usersUseCase = new UsersUseCase()

const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
  event.preventDefault()
  usersUseCase.setRemoveSession()
  window.location.href = '../login.html'; // Cambia esta línea
})

window.addEventListener("DOMContentLoaded", (event) => {
    const sessionUser = usersUseCase.getSession();

    if (sessionUser) {
        let template = renderPerfil(sessionUser);

        if (sessionUser.username === 'Gerente_1' || sessionUser.username === 'Administrador_1') {
            // Remover la clase CSS 'd-none' para mostrar el botón de edición solo para el gerente
            if (editButton) {
                editButton.classList.remove('d-none');
            }
        }

        tablePerfilTbody.innerHTML = template;
    }
});