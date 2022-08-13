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
    < img src = "././static/howToPlay.png" alt = "¿Cómo jugar?"  data - view - component="true" class= "avatar circle" >
    `);
});