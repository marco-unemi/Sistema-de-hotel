
//archivo 4
import { ClienteRepository } from '../repository/clientes-repository.js'
import { Cliente } from '../entity/models.js'

export class ClienteUseCase {
    constructor() {
        this.clienteRespository = new ClienteRepository()
    }

    getClientes() {
        return this.clienteRespository.getClientes()
    }

    setCreate(data) {
        const cliente = new Cliente(
            data.nombres,
            data.cedula,
            data.fechaReserva,
            data.telefono,
            data.correo,
            data.tipoCliente,
            data.tipoPago,
            data.descuento
        );
        this.clienteRespository.setCreate(cliente);
        return cliente;
    }


    buscarPorCedula(cedula) {
        const clientes = this.clienteRespository.getClientes() // [CLiente1(),Cliente2() ... n]
        const cliente = clientes.find(c => c.cedula == cedula) // Cliente() : undefined
        //const cliente1 = clientes.map(c => c.cedula) // [Cliente1(),Cliente2()] : []
        ///const cliente2 = clientes.filter(c => c.cedula == cedula)[0] // [Cliente1()]: []
        return cliente
    }

}

