
//archivo 2
import { UsersUseCase } from '../../src/use-case/users-use-case.js';
import { ClienteUseCase } from '../../src/use-case/clientes use case.js'

//    Creamos la instancia del caso de uso
const clienteUseCase = new ClienteUseCase();
const usersUseCase = new UsersUseCase();

const formCliente = document.getElementById('id-form-reserva')

const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

const tipoPagoSelect = document.getElementById("id-tipo-pago");
const tarjetaInputContainer = document.getElementById("tarjeta-input-container");

const btnCalcularTotalPagar = document.getElementById('btn-calcular-total-pagar')

btnCalcularTotalPagar.addEventListener('click', (event) => {
    event.preventDefault()
    const totalHoras = document.getElementById('id-tiempo-reserva').value
    const inputDescuento = document.getElementById('id-descuento').value

    let porcentajeDescuento = inputDescuento / 100

    let monto = totalHoras * 40

    let descuento = monto * porcentajeDescuento

    let totalPagar = monto - descuento

    const inputTotalPagar = document.getElementById('id-monto')
    inputTotalPagar.value = totalPagar
})

// Agrega un evento de escucha al envío del formulario
formCliente.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const formdata = new FormData(event.target)
    // covertimos los datos en objeto key: values (diccionario) JSON
    // {"cedula":"09264022566","nombres":"Ernesto","apellidos":"Guaman"}
    const data = Object.fromEntries(formdata.entries())

    // le pasamos el parametro Data =  {"cedula":"09264022566","nombres":"Ernesto","apellidos":"Guaman"}
    clienteUseCase.setCreate(data)
    alert('Habitacion reservada exitosamente.');
});

document.addEventListener('DOMContentLoaded', function () {
    const btnReservar = document.querySelector('.btn-reserva');
    const btnReservado = document.querySelector('.btn-reservado');

    btnReservar.addEventListener('click', function () {
        btnReservar.style.display = 'none';
        btnReservado.style.display = 'inline-block';

        const reserva = {
            status: 'reservado'
        };

        localStorage.setItem('reserva', JSON.stringify(reserva));
    });

    btnReservado.addEventListener('click', function () {
        btnReservado.style.display = 'none';
        btnReservar.style.display = 'inline-block';

        const reserva = {
            status: 'reservar'
        };

        localStorage.setItem('reserva', JSON.stringify(reserva));
    });

    // Verifica el estado almacenado en el Local Storage al cargar la página
    const reservaJSON = localStorage.getItem('reserva');
    if (reservaJSON) {
        const reserva = JSON.parse(reservaJSON);
        if (reserva.status === 'reservado') {
            btnReservado.style.display = 'inline-block';
            btnReservar.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const btnReservaHabitacion102 = document.querySelector('.btn-reserva-habitacion-102');
    const btnReservadoHabitacion102 = document.querySelector('.btn-reservado-habitacion-102');

    btnReservaHabitacion102.addEventListener('click', function () {
        btnReservaHabitacion102.style.display = 'none';
        btnReservadoHabitacion102.style.display = 'inline-block';

        const reserva = {
            status: 'reservado'
        };

        localStorage.setItem('reservaHabitacionNormal', JSON.stringify(reserva));
    });

    btnReservadoHabitacion102.addEventListener('click', function () {
        btnReservadoHabitacion102.style.display = 'none';
        btnReservaHabitacion102.style.display = 'inline-block';

        const reserva = {
            status: 'reservar'
        };

        localStorage.setItem('reservaHabitacionNormal', JSON.stringify(reserva));
    });

    // Verifica el estado almacenado en el Local Storage al cargar la página
    const reservaJSON = localStorage.getItem('reservaHabitacionNormal');
    if (reservaJSON) {
        const reserva = JSON.parse(reservaJSON);
        if (reserva.status === 'reservado') {
            btnReservadoHabitacion102.style.display = 'inline-block';
            btnReservaHabitacion102.style.display = 'none';
        }
    }
});


btnCerrarSesion.addEventListener('click', event => {
    event.preventDefault()
    usersUseCase.setRemoveSession()
    window.location.href = '../login.html'; // Cambia esta línea
})

tipoPagoSelect.addEventListener("change", function () {
    if (tipoPagoSelect.value === "Tarjeta") {
        tarjetaInputContainer.style.display = "block";
    } else {
        tarjetaInputContainer.style.display = "none";
    }
});

