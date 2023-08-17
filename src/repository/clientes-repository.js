
//archivo 5
import { Cliente } from "../entity/models.js"

export class ClienteRepository {
    constructor(){
        this.clientes = JSON.parse(localStorage.getItem('clientes')) || []
        this.clientes = this.clientes.map(c => {
            return new Cliente(
                c.nombres, 
                c.cedula, 
                c.fechaReserva, 
                c.telefono, 
                c.correo, 
                c.tipoCliente, 
                c.tipoPago, 
                c.descuento
            )
        })
    }

    getClientes() {
        return this.clientes
    }

    setCreate(cliente) {       
        this.clientes.push(cliente) 
        localStorage.setItem('clientes', JSON.stringify(this.clientes))
    }
}

