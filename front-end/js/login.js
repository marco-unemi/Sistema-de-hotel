// Importación de clases y funciones necesarias desde otros archivos
import { UsersUseCase } from "../../src/use-case/users-use-case.js";
// Creación de una instancia de UsersUseCase
const usersUseCase = new UsersUseCase()

// Obtención de referencias a elementos del DOM
const formLogin = document.getElementById('id-form-login')

const password = document.getElementById('id-password')
const icon = document.querySelector('#id-icon-password')

// Evento click para cambiar la visibilidad de la contraseña
icon.addEventListener('click', event => {
  event.preventDefault()
  if (password.type === 'password') {
    password.type = 'text'
    icon.classList.remove('bi-eye-fill')
    icon.classList.add('bi-eye-slash-fill')
  } else {
    password.type = 'password'
    icon.classList.add('bi-eye-fill')
    icon.classList.remove('bi-eye-slash-fill')
  }
})

// Evento submit del formulario de inicio de sesión
formLogin.addEventListener('submit', event => {
  event.preventDefault()

  const username = document.getElementById('id-username').value
  const password = document.getElementById('id-password').value

  const user = usersUseCase.login(username, password) // null/undefined -> objeto User
  console.log(user)

  if (user) {
    usersUseCase.setCreateSession(user)
    window.location = 'index.html'
  } else {
    alert('Usuario es incorrecto o no esta registrado.')
  }
})