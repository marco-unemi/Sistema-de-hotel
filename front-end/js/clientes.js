
//ARCHIVO 9
import { ClienteUseCase } from '../../src/use-case/clientes-use-case.js'
import { renderClientes } from "../../src/util/table-render-clientes.js"
//    Creamos la instancia del caso de uso
const clienteUseCase = new ClienteUseCase()

const tableClientes = document.querySelector('#id-table-reserva-habitacion > tbody')

window.addEventListener("DOMContentLoaded", (event) => {
  const clientes = clienteUseCase.getClientes()
  let template = renderClientes(clientes)
  tableClientes.innerHTML = template
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