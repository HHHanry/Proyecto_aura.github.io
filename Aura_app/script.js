const sliderMonto = document.getElementById("monto-slider");
const sliderCuotas = document.getElementById("cuotas-slider");
const montoValor = document.getElementById("monto-valor");
const cuotasValor = document.getElementById("cuotas-valor");
const montoCuota = document.getElementById("monto-cuota");
const detalleMonto = document.getElementById("detalle-monto");
const detalleInteres = document.getElementById("detalle-interes");
const detalleComision = document.getElementById("detalle-comision");
const detalleTotal = document.getElementById("detalle-total");

const INTERES = 0.05;
const COMISION = 2;

function actualizarValores() {
    const monto = parseFloat(sliderMonto.value);
    const cuotas = parseInt(sliderCuotas.value);

    const interes = monto * INTERES;
    const comision = COMISION;
    const total = monto + interes + comision;
    const cuota = total / cuotas;

    montoValor.textContent = monto.toFixed(2);
    cuotasValor.textContent = cuotas;
    montoCuota.textContent = `S/${cuota.toFixed(2)}`;
    detalleMonto.textContent = monto.toFixed(2);
    detalleInteres.textContent = interes.toFixed(2);
    detalleComision.textContent = comision.toFixed(2);
    detalleTotal.textContent = total.toFixed(2);
}

sliderMonto.addEventListener("input", actualizarValores);
sliderCuotas.addEventListener("input", actualizarValores);

document.querySelectorAll(".period-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".period-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
    });
});

actualizarValores();

//finish
function cerrarMensaje() {
    document.querySelector(".aprobacion-container").style.display = "none";
}

function continuar() {
    alert("Redirigiendo a la siguiente página...");
    // Aquí puedes agregar la lógica para redirigir a otra página
}

// Configuración del nombre del usuario dinámicamente
const username = "Juan"; // Puedes cambiar el valor dinámicamente
document.getElementById("username").textContent = username;

//¨*****************
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el botón
  const continuarBtn = document.getElementById("btn-continuar");

  // Verifica si el botón existe
  if (continuarBtn) {
    // Agrega un evento "click" al botón
    continuarBtn.addEventListener("click", function () {
      // Obtén los valores del formulario
      const nombre = document.getElementById("name").value.trim();
      const celular = document.getElementById("celular").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const dni = document.getElementById("dni").value.trim();

      // Valida que todos los campos estén completos
      if (!nombre || !celular || !correo || !dni) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      // Guarda los datos en localStorage
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("celular", celular);
      localStorage.setItem("correo", correo);
      localStorage.setItem("dni", dni);

      // Redirige a selfie.html
      window.location.href = "selfie.html";
    });
  } else {
    console.error("El botón con id 'btn-continuar' no se encontró.");
  }
});