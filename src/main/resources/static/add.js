document.getElementById("propertyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const address = document.getElementById("address").value;
    const price = document.getElementById("price").value;
    const size = document.getElementById("size").value;
    const description = document.getElementById("description").value;

    if (!address || !price || !size || !description) {
        document.getElementById("message").textContent = "Todos los campos son obligatorios.";
        return;
    }

    const propertyData = {
        address: address,
        price: parseInt(price),
        size: parseInt(size),
        description: description
    };

    fetch("http://54.166.232.220:8080/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(propertyData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("message").textContent = "Propiedad creada con éxito.";
        document.getElementById("propertyForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("message").textContent = "Error al crear la propiedad.";
    });
});
