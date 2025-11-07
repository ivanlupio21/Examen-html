document.getElementById("registroForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Cuenta creada correctamente.");
});

document.getElementById("calcular").addEventListener("click", function(){
    let precio = parseFloat(document.getElementById("precio").value);
    let iva = parseFloat(document.getElementById("iva").value);

    if(isNaN(precio)){
        alert("Ingresa un precio válido");
        return;
    }

    let total = precio + (precio * iva);
    document.getElementById("resultado").value = total.toFixed(2);
});

document.getElementById("enviar").addEventListener("click", function(){
    let nombreLibro = document.getElementById("nombreLibro").value;
    let total = document.getElementById("resultado").value;

    if(nombreLibro === "" || total === ""){
        alert("Completa los datos antes de enviar.");
    } else {
        alert("Libro agregado al pedido:\n" + nombreLibro + " - $" + total);
    }
});
