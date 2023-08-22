import { UsersUseCase } from '../../src/use-case/users-use-case.js';
import { HotelUseCase } from "../../src/use-case/hotel-use-case.js";
import { renderHotel } from "../../src/util/table-render-info-hotel.js";

const usersUseCase = new UsersUseCase();
const hotelUseCase = new HotelUseCase();

const tableInfoHotel = document.querySelector('#id-table-info-hotel > thead');
const btnGuardar = document.getElementById('id-guardar');

window.addEventListener("DOMContentLoaded", (event) => {
    const infoHotel = hotelUseCase.getInfoHotel();
    let template = renderHotel(infoHotel);
    tableInfoHotel.innerHTML = template;
});


btnGuardar.addEventListener('click', (event) => {
    event.preventDefault();

    const newData = {
        nombre: document.getElementById('id-nombre').value,
        telefono: document.getElementById('id-telefono').value,
        correo: document.getElementById('id-correo').value,
        ubicacion: document.getElementById('id-ubicacion').value,
        tipoMoneda: document.getElementById('id-tipo-moneda').value
    };

    const updatedHotel = hotelUseCase.updateInfo(newData);
    let template = renderHotel([updatedHotel]);
    tableInfoHotel.innerHTML = template;
});

document.addEventListener("DOMContentLoaded", function () {
    const infoTable = document.querySelector('#id-table-info')
    const editTable = document.querySelector('#id-table-edit')

    const btnGuardar = document.getElementById('id-guardar')
    const btnEditar = document.getElementById('id-editar')

    infoTable.style.display = "table";
    editTable.style.display = "none";

    // Add click event listener to "Editar" button
    btnEditar.addEventListener("click", function () {
        infoTable.style.display = "none";
        editTable.style.display = "table";
    });

    // Add click event listener to "Guardar" button
    btnGuardar.addEventListener("click", function () {
        // Here you can add logic to update the data and save it
        // For now, let's just simulate a delay
        setTimeout(function () {
            // After saving, show info table, hide edit table
            infoTable.style.display = "table";
            editTable.style.display = "none";
        }, 1000); // Simulated delay of 1 second (1000 milliseconds)
    });
})


const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
  event.preventDefault()
  usersUseCase.setRemoveSession()
  window.location.href = '../login.html'; // Cambia esta línea
})