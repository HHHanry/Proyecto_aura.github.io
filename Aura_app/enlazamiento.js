document.addEventListener("DOMContentLoaded", function () {
    const btnContinuar = document.querySelector(".boton_submit");
    btnContinuar.addEventListener("click", function () {
        const nombreUsuario = document.getElementById("name").value;
        if (nombreUsuario.trim() !== "") {
            localStorage.setItem("nombreUsuario", nombreUsuario);
            window.location.href = "index2.html";
        } else {
            alert("Por favor, ingrese su nombre de usuario.");
        }
    });
});
