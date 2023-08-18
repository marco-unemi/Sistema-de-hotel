import { ClienteUseCase } from '../../src/use-case/clientes-use-case.js'

const clienteUseCase = new ClienteUseCase()

const ordenModal = document.getElementById('ordenModal')
const selectCliente = document.getElementById('clientNameSelect')
const roomSelect = document.getElementById('roomSelect')

ordenModal.addEventListener('shown.bs.modal', function () {
    ordenModal.focus()

    const clientes = clienteUseCase.getClientes()

    selectCliente.options.length = 1
    for (const c of clientes) {
        const option = document.createElement('option');
        option.value = c.cedula
        option.text = `${c.nombres}`
        selectCliente.add(option)
    }

    // When a customer is selected, update the associated room
    selectCliente.addEventListener('change', function () {
        const selectedCedula = selectCliente.value;
        const selectedCustomer = clientes.find(c => c.cedula === selectedCedula);

        // Clear previous room options
        roomSelect.options.length = 0;

        // Add the room associated with the selected customer
        const roomOption = document.createElement('option');
        roomOption.value = selectedCustomer.habitacion;
        roomOption.text = `Habitación ${selectedCustomer.habitacion}`;
        roomSelect.add(roomOption);
    });
})
