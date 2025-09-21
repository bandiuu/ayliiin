// 🌻 Girasoles flotantes (solo girasol1 y girasol2)
const girasoles = ['girasol1.png', 'girasol2.png'];
const contenedorFlores = document.getElementById('flores');

for (let i = 0; i < 15; i++) {
  const flor = document.createElement('img');
  flor.src = girasoles[Math.floor(Math.random() * girasoles.length)];
  flor.className = 'flor';

  const tamaño = Math.random() * 70 + 50;
  flor.style.width = `${tamaño}px`;
  flor.style.left = `${Math.random() * 100}%`;
  flor.style.animationDuration = `${10 + Math.random() * 5}s`;
  flor.style.animationDelay = `${Math.random() * 10}s`;

  flor.onerror = () => flor.remove();
  contenedorFlores.appendChild(flor);
}

// ✍️ Texto máquina de escribir para Ayliiin
const texto = [
  "Ayliiin 💛",
  "",
  "Quiero decirte algo muy especial...",
  "Me gusta mucho pasar tiempo contigo,",
  "porque cada momento a tu lado es especial. ✨",
  "",
  "Hoy quiero regalarte girasoles,",
  "aunque no sean reales, espero te guste 🌻💛",
  "",
  "Me alegra haberte conocido 💫"
];
const destino = document.getElementById("texto-maquina");
let linea = 0, caracter = 0;

function escribirLinea() {
  if (linea < texto.length) {
    if (caracter < texto[linea].length) {
      destino.innerHTML += texto[linea].charAt(caracter);
      caracter++;
      setTimeout(escribirLinea, 60);
    } else {
      destino.innerHTML += "<br/>";
      linea++;
      caracter = 0;
      setTimeout(escribirLinea, 500);
    }
  }
}
escribirLinea();

// 🎶 Música
const audio = document.getElementById("musica");
const boton = document.getElementById("boton-musica");

boton.onclick = () => {
  if (audio.paused) {
    audio.play();
    boton.textContent = '⏸️ Pausar';
  } else {
    audio.pause();
    boton.textContent = '🎵 Música';
  }
};

// 📄 Carta en PDF
document.getElementById("download-pdf").onclick = () => {
  window.location.href = "carta.pdf";
};
