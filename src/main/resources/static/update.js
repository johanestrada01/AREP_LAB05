document.addEventListener("DOMContentLoaded", function () {
    function obtenerIdDesdeURL() {
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get("id");

        // Si no se encuentra en el formato ?id=1, intenta obtenerlo del path /update/1
        if (!id) {
            const pathSegments = window.location.pathname.split("/");
            id = pathSegments[pathSegments.length - 1]; // Última parte de la URL
        }

        return id;
    }

    const propertyId = obtenerIdDesdeURL();

    if (!propertyId) {
        console.error("No se encontró un ID en la URL.");
        document.getElementById("message").textContent = "No se encontró un ID válido.";
        return;
    }

    // Hacer la solicitud GET para obtener los datos de la propiedad
    fetch(`http://54.166.232.220:8080/properties/${propertyId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al obtener la propiedad: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("propertyId").value = data.id || "";
            document.getElementById("address").value = data.address || "";
            document.getElementById("price").value = data.price || "";
            document.getElementById("size").value = data.size || "";
            document.getElementById("description").value = data.description || "";

            // Cambiar el título y botón para indicar que es una actualización
            document.getElementById("formTitle").textContent = "Actualizar Propiedad";
            document.getElementById("submitButton").textContent = "Actualizar Propiedad";
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("message").textContent = "No se pudo cargar la propiedad.";
        });
});
