import { User } from "../entity/user.js";

export class UsersRepository {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || []
        this.users = this.users.map(u => new User(
                u.nombres, u.apellidos, u.username, u.password, u.email, u.genero, u.fechaNacimiento, u.fechaIngreso, u.telefono, u.id, u.cargo, u.estado
            )
        )
    }

    login(username, password) {
        const user = this.users.find(u => username == u.username && password === u.password)
        return user 
    }

    create(user) {
        this.users.push(user)
        localStorage.setItem('users', JSON.stringify(this.users))
    }

    getUsers() {
        return this.users
    }

    setCreateSession(user) {
        sessionStorage.setItem('session', JSON.stringify(user))
    }

    getSession() {
        return JSON.parse(sessionStorage.getItem('session')) || null
    }

    setRemoveSession() {
        sessionStorage.removeItem('session')
    }
}