
//ARCHIVO 3
export function renderUsers(users) {
    return users.map((u) => {
        return `<tr>
            <td>${u.nombres} ${u.apellidos}</td>
            <td>${u.username}</td>
            <td>${u.email}</td>
            <td>${u.genero}</td>
            <td>${new Date(u.fechaNacimiento).toLocaleDateString("en-US")}</td>
            <td>${new Date(u.fechaIngreso).toLocaleDateString("en-US")}</td>
            <td>${u.telefono}</td>
            <td>${u.id}</td>
            <td>${u.cargo}</td>
            <td>${u.estado}</td>
            <td>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Acciones
                    </button>
                    <ul class="dropdown-menu sm" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item" href="#" rel="accion-depositar" data-id="${u.id}">Editar</a>
                            <a class="dropdown-item" href="#" rel="accion-debitar" data-id="${u.id}">Cambiar contraseña</a>
                        </li>
                    </ul>
                </div>
            </td> 
        </tr>`
    }).join('')
}