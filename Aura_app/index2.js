document.addEventListener("DOMContentLoaded", function () {
    const nombreUsuario = localStorage.getItem("nombreUsuario");
    if (!nombreUsuario) {
        alert("Debe ingresar un nombre de usuario.");
        window.location.href = "index.html";
    }

    document.querySelector("#btn-continuar").addEventListener("click", function () {
        window.location.href = "selfie.html";
    });
});
