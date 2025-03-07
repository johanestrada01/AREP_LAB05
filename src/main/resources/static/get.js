function cargarPropiedades() {
    fetch("http://54.166.232.220:8080/properties")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("propertyTableBody");
            tableBody.innerHTML = "";

            data.forEach(property => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${property.id}</td>
                    <td>${property.address}</td>
                    <td>${property.price}</td>
                    <td>${property.size}</td>
                    <td>${property.description}</td>
                    <td>
                        <button class="btn-edit" onclick="editarPropiedad(${property.id})">Editar</button>
                        <button class="btn-delete" onclick="eliminarPropiedad(${property.id})">Eliminar</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error al obtener las propiedades:", error));
}

function eliminarPropiedad(id) {
    if (confirm("¿Estás seguro de que deseas eliminar esta propiedad?")) {
        fetch(`http://54.166.232.220:8080/properties/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                alert("Propiedad eliminada con éxito.");
                cargarPropiedades(); // Actualizar la tabla después de eliminar
            } else {
                alert("Error al eliminar la propiedad.");
            }
        })
        .catch(error => console.error("Error al eliminar:", error));
    }
}

function editarPropiedad(id) {
    window.location.href = `http://54.166.232.220:8080/update/${id}`;
}

// Cargar la lista automáticamente al abrir la página
document.addEventListener("DOMContentLoaded", cargarPropiedades);
