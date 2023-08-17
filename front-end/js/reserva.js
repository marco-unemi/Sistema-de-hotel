
//archivo 2
import { UsersUseCase } from '../../src/use-case/users-use-case.js';
import { ClienteUseCase } from '../../src/use-case/clientes use case.js'

//    Creamos la instancia del caso de uso
const clienteUseCase = new ClienteUseCase();
const usersUseCase = new UsersUseCase();

const formCliente = document.getElementById('id-form-reserva')

const btnCerrarSesion = document.getElementById('id-btn-cerrar-sesion')

formCliente.addEventListener('submit', event => {
    event.preventDefault();
    const formdata = new FormData(event.target)
    // covertimos los datos en objeto key: values (diccionario) JSON
    // {"cedula":"09264022566","nombres":"Ernesto","apellidos":"Guaman"}
    const data = Object.fromEntries(formdata.entries())

    // le pasamos el parametro Data =  {"cedula":"09264022566","nombres":"Ernesto","apellidos":"Guaman"}
    clienteUseCase.setCreate(data)
    alert('Cliente registrado exitosamente.');
});



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

