
//ARCHIVO 3
export class User {
    constructor( nombres, apellidos, username, password, email, genero, fechaNacimiento, fechaIngreso, telefono, id, cargo, estado){
        this.nombres = nombres
        this.apellidos = apellidos
        this.username = username
        this.password = password
        this.email = email
        this.genero = genero
        this.fechaNacimiento = new Date(fechaNacimiento)
        this.fechaIngreso = new Date(fechaIngreso)
        this.telefono = telefono
        this.id = id
        this.cargo = cargo
        this.estado = estado
    }
}

