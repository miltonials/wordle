const stats = document.getElementById("stats-btn");
const help = document.getElementById("help-btn");

stats.addEventListener("click", () => {
  printModal(`
    <section class="stats-container">
    ` + matrizDeJuego +
    `</section>`
  );
});

help.addEventListener("click", () => {
  printModal(`
    <video src = "./static/howToPlay.mp4" alt = "¿Cómo jugar?" autoplay/>
  `);
});