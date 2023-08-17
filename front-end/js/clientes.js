import { ClienteUseCase } from '../../src/use-case/clientes use case.js'
import { renderClientes } from "../../src/util/table-render-clientes.js"
//    Creamos la instancia del caso de uso
const clienteUseCase = new ClienteUseCase()

const tableClientes = document.querySelector('#id-table-clientes > tbody')

window.addEventListener("DOMContentLoaded", (event) => {
  const clientes = clienteUseCase.getClientes()
  let template = renderClientes(clientes)
  tableClientes.innerHTML = template
})