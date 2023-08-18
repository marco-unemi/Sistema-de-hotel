
import { UsersUseCase } from '../../src/use-case/users-use-case.js';
import { ServicioUseCase } from '../../src/use-case/servicios-use-case.js'
import { ClienteUseCase } from '../../src/use-case/clientes-use-case.js'

const usersUseCase = new UsersUseCase();
const servicioUseCase = new ServicioUseCase()
const clienteUseCase = new ClienteUseCase()

document.addEventListener('DOMContentLoaded', function () {
    const selectCliente = document.getElementById('clientNameSelect');
    const romInput = document.getElementById('rom');

    const clientes = clienteUseCase.getClientes();

    selectCliente.options.length = 1;
    for (const c of clientes) {
        const option = document.createElement('option');
        option.value = c.cedula;
        option.text = c.nombres;
        selectCliente.appendChild(option);
    }

    selectCliente.addEventListener('change', function () {
        const selectedCedula = selectCliente.value;
        const selectedCustomer = clientes.find(c => c.cedula === selectedCedula);

        romInput.value = selectedCustomer.habitacion;
    });
});


const btnCerrarSesion = document.querySelector('#id-btn-cerrar-sesion')

btnCerrarSesion.addEventListener('click', event => {
    event.preventDefault()
    usersUseCase.setRemoveSession()
    window.location.href = '../login.html'; // Cambia esta línea
})

const tipoPagoSelect = document.getElementById("modoPago");
const tarjetaInputContainer = document.getElementById("tarjeta-input-container");

tipoPagoSelect.addEventListener("change", function () {
    if (tipoPagoSelect.value === "Tarjeta") {
        tarjetaInputContainer.style.display = "block";
    } else {
        tarjetaInputContainer.style.display = "none";
    }
});

const productoSelect = document.getElementById('productoSelect');
const precioInput = document.getElementById('precio');
const cantidadInput = document.getElementById('cantidad');
const totalPagarInput = document.getElementById('totalPagar');

// Precios de los productos
const preciosProductos = {
    'Bebida Gaseosa Coca Cola': 2.5,
    'Bebida Gaseosa Sprite': 2.0,
    'Bebida Gaseosa Manzana': 3.0,
    'Vino Espumoso': 10.0,
    'Champaña Delux': 15.0,
    'Piña Colada': 14.0,
    'Mojito Limón': 12.0,
    'Ronda Shots Tequila': 11.0,
    'Ronda Shots Vodka': 9.0,
    'Cerveza Corona': 4.0,
    'Cerveza Pilsener': 3.0,
    'Cerveza Siembra': 2.0,
    'Cerveza Artesanal': 12.0,
    'Jugo Natural Naranja': 13.0,
    'Jugo Natural Limón': 14.0,
    'Jugo Natural Mango': 15.0,
    'Desayuno Americano': 17.0,
    'Desayuno Continental': 10.0,
    'Desayuno de la Casa': 7.0,
    'Piqueo Carnes': 9.0,
    'Piqueo Frutas Exoticas': 8.0,
    'Piqueo Quesos Especiales': 4.0,
    'Piqueo Embutidos': 7.0,
    'Almuerzo Especial': 8.0,
    'Almuerzo Filete Miñon': 4.0,
    'Almuerzo Filete de Pollo': 5.0,
    'Cena Ligera': 7.0,
    'Cena Familiar': 6.0,
    'Cena Matrimonial': 9.0,
    'Cena Especial': 8.0,
    'Cena Empresarial': 10.0,
    'Bailo Terapia Privada': 9.0,
    'Masaje Feliz Premiun ultraDelux + (durexplus)': 9,
    'Masaje Feliz': 9.0,
    'Pole Dance a la Habitación': 9,
};
cargarCantidades();

// Cuando se cambia la selección del producto
productoSelect.addEventListener('change', () => {
    const selectedProducto = productoSelect.value;
    const selectedPrecio = preciosProductos[selectedProducto];
    precioInput.value = formatPrice(selectedPrecio);
    actualizarTotal();
    guardarCantidades();
});

// Cuando cambia la cantidad
cantidadInput.addEventListener('input', () => {
    actualizarTotal();
    guardarCantidades();
});

// Función para actualizar el total a pagar
function actualizarTotal() {
    const precio = parseFloat(precioInput.value.replace(/\./g, '').replace(',', '.'));
    const cantidad = parseFloat(cantidadInput.value);
    const total = precio * cantidad || 0; // Si no hay cantidad, el total es 0
    totalPagarInput.value = formatPrice(total);
}

// Función para formatear el precio con puntos y dos decimales
function formatPrice(price) {
    return price.toLocaleString('es-ES', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}

// Función para guardar las cantidades en el localStorage
function guardarCantidades() {
    const selectedProducto = productoSelect.value;
    const cantidad = cantidadInput.value;
    localStorage.setItem(selectedProducto, cantidad);
}

// Función para cargar las cantidades desde el localStorage
function cargarCantidades() {
    const selectedProducto = productoSelect.value;
    const cantidad = localStorage.getItem(selectedProducto) || 0;
    cantidadInput.value = cantidad;
}

const formServicios = document.getElementById('orderForm')

formServicios.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const formdata = new FormData(event.target)
    
    const data = Object.fromEntries(formdata.entries())

    // le pasamos el parametro Data =  {"cedula":"09264022566","nombres":"Ernesto","apellidos":"Guaman"}
    servicioUseCase.setCreate(data)
    alert('Producto vendido exitosamente.');
});