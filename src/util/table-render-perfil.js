export function renderPerfil(user) {
    return `
        <tr>
            <th>Username</th>
            <td>${user.username}</td>
        </tr>
        <tr>
            <th>Password</th>
            <td>${user.password}</td>
            
        </tr>
        <tr>
            <th>Email</th>
            <td>${user.email}</td>
        </tr>
        <tr>
            <th>Estatus</th>
            <td>${user.estado}</td>
        </tr>
        <tr>
            <th>Nombres y Apellidos</th>
            <td>${user.nombres} ${user.apellidos}</td>
        </tr>
        <tr>
            <th>Genero</th>
            <td>${user.genero}</td>
        </tr>
        <tr>
            <th>FechaNacimiento</th>
            <td>${new Date(user.fechaNacimiento).toLocaleDateString("en-US")}</td>
        </tr>
        <tr>
            <th>Telefono</th>
            <td>${user.telefono}</td>
        </tr>
        <tr>
            <th>Id</th>
            <td>${user.id}</td>
        </tr>
        <tr>
            <th>Cargo</th>
            <td>${user.cargo}</td>
        </tr>
        `
}