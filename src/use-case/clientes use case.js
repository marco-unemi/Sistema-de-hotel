
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
            data.tiempoReserva,
            data.tipoPago,
            data.numeroTarjeta,
            data.descuento,
            data.monto
        );
        this.clienteRespository.setCreate(cliente);
        return cliente;
    }

}

