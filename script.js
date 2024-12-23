const participantes = [
    "Juan Pérez", "María López", "Carlos García", "Ana Sánchez", "Luis Martínez",
    "Marta Gómez", "Pedro Fernández", "Sofía Ruiz", "José Torres", "Laura Ramírez",
    "Elena Moreno", "Diego Ortega", "Lucía Navarro", "Álvaro Castro", "Paula Molina",
    "Hugo Delgado", "Clara Romero", "Mateo Gil", "Nuria León", "Andrés Herrera",
    "Valeria Lozano", "Iván Serrano", "Carmen Ibáñez", "Sergio Pastor", "Julia Rivera",
    "Roberto Campos", "Patricia Peña", "Fernando Vega", "Victoria Medina", "Ricardo Ponce",
    "Isabel Núñez", "Adriana Méndez", "David Blanco", "Rocío Suárez", "Samuel Cortés",
    "Alejandra Fuentes", "Manuel Delgado", "Cristina Torres", "Jorge Vargas", "Natalia Díaz"
];

const listaElement = document.getElementById('participantes');
const sorteoBtn = document.getElementById('sorteoBtn');
const resultadoDiv = document.getElementById('resultado');
const ganadorElement = document.getElementById('ganador');

// Iniciar lista animada
let interval;
function iniciarLista() {
    listaElement.textContent = participantes.join("  -  ");
}

// Simular sorteo
sorteoBtn.addEventListener('click', () => {
    clearInterval(interval);
    listaElement.style.animation = "none";

    const ganador = participantes[Math.floor(Math.random() * participantes.length)];
    ganadorElement.textContent = ganador;

    setTimeout(() => {
        resultadoDiv.classList.remove('oculto');
    }, 500);
});

// Iniciar al cargar la página
iniciarLista();
