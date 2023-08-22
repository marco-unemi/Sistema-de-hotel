import { UsersUseCase } from "../../src/use-case/users-use-case.js";

const usersUseCase = new UsersUseCase()

const formRegister = document.getElementById('id-form-register')

formRegister.addEventListener('submit', event => {
    event.preventDefault()

    // Obtener los valores ingresados por el usuario desde el formulario de registro
    const nombres = document.getElementById('id-nombres').value
    const apellidos = document.getElementById('id-apellidos').value
    const username = document.getElementById('id-username').value
    const password = document.getElementById('id-password').value
    const email = document.getElementById('id-email').value
    const genero = document.getElementById('id-genero').value
    const fechaNacimiento = document.getElementById('id-fecha-nacimiento').value
    const fechaIngreso = document.getElementById('id-fecha-ingreso').value
    const telefono = document.getElementById('id-telefono').value
    const id = document.getElementById('id').value
    const cargo = document.getElementById('id-cargo').value
    const estado = document.getElementById('id-estado').value

    // Crear un nuevo objeto de usuario
    const newUser = {
        nombres: nombres,
        apellidos: apellidos,
        username: username,
        password: password,
        email: email,
        genero: genero,
        fechaNacimiento: fechaNacimiento,
        fechaIngreso: fechaIngreso,
        telefono: telefono,
        id: id,
        cargo: cargo,
        estado: estado, // Suponiendo que deseas establecer el estado inicial en "activo"
    }

    // Obtener la lista de todos los usuarios
    const allUsers = usersUseCase.getUsers()

    // Verificar si el correo electrónico del nuevo usuario ya está registrado
    const isUserRegistered = allUsers.some(u => u.email === email || u.id === id)

    if (isUserRegistered) {
        alert('El usuario ya está registrado.')
    } else {
        // Llamar al método create de UsersUseCase para registrar el usuario
        usersUseCase.create(newUser)
        alert('Registro exitoso.')
        // Redirigir al usuario a la página de inicio (index.html)
        window.location.replace('login.html')
    }
})

const password = document.getElementById('id-password')
const icon = document.querySelector('#id-icon-password')

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
