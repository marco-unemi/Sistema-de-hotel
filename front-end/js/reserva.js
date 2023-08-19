import { UsersUseCase } from '../../src/use-case/users-use-case.js';
import { ClienteUseCase } from '../../src/use-case/clientes-use-case.js'

//    Creamos la instancia del caso de uso
const clienteUseCase = new ClienteUseCase();
const usersUseCase = new UsersUseCase();

const formCliente = document.getElementById('id-form-reserva')

const btnCerrarSesion = document.querySelector('#id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
    event.preventDefault()
    usersUseCase.setRemoveSession()
    window.location.href = '../login.html'; // Cambia esta línea
})

const tipoPagoSelect = document.getElementById("id-tipo-pago");
const tarjetaInputContainer = document.getElementById("tarjeta-input-container");

tipoPagoSelect.addEventListener("change", function () {
    if (tipoPagoSelect.value === "Tarjeta") {
        tarjetaInputContainer.style.display = "block";
    } else {
        tarjetaInputContainer.style.display = "none";
    }
});

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

function inicializarReservaHabitacion(tipoHabitacion) {
    const btnReserva = document.querySelector(`.btn-reserva-habitacion-${tipoHabitacion}`);
    const btnReservado = document.querySelector(`.btn-reservado-habitacion-${tipoHabitacion}`);

    btnReserva.addEventListener('click', function () {
        btnReserva.style.display = 'none';
        btnReservado.style.display = 'inline-block';

        const reserva = {
            status: 'reservado'
        };

        localStorage.setItem(`reservaHabitacion${tipoHabitacion}`, JSON.stringify(reserva));
    });

    btnReservado.addEventListener('click', function () {
        btnReservado.style.display = 'none';
        btnReserva.style.display = 'inline-block';

        const reserva = {
            status: 'reservar'
        };

        localStorage.setItem(`reservaHabitacion${tipoHabitacion}`, JSON.stringify(reserva));
    });

    const reservaJSON = localStorage.getItem(`reservaHabitacion${tipoHabitacion}`);
    if (reservaJSON) {
        const reserva = JSON.parse(reservaJSON);
        if (reserva.status === 'reservado') {
            btnReservado.style.display = 'inline-block';
            btnReserva.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    inicializarReservaHabitacion('101');
    inicializarReservaHabitacion('102');
    inicializarReservaHabitacion('103');
    inicializarReservaHabitacion('104');
    inicializarReservaHabitacion('1000');
    inicializarReservaHabitacion('1010');
    inicializarReservaHabitacion('1020');
    inicializarReservaHabitacion('1030');
});
document.getElementById("reservarButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario si es necesario
    
    var customAlert = document.getElementById("customAlert");
    
    // Mostrar la alerta
    customAlert.style.display = "block";

    // Después de un tiempo, ocultar la alerta
    setTimeout(function() {
        customAlert.style.display = "none";
    }, 2000); // Cambia este valor para ajustar la duración de la alerta
});
