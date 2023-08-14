import { UsersRepository } from "../repository/users-repository.js";

export class UsersUseCase {
    constructor() {
        this.usersRepository = new UsersRepository()
    }

    login(username, password) {
        const user = this.usersRepository.login(username, password)
        return user
    }

    create(user) {
        const users = this.usersRepository.create(user)
        return users 
    }

    getUsers() {
        return this.usersRepository.getUsers()
    }

    setCreateSession(user) {
        this.usersRepository.setCreateSession(user)
    }

    getSession() {
        return this.usersRepository.getSession()
    }

    setRemoveSession() {
        this.usersRepository.setRemoveSession()
    }
}