const stats = document.getElementById("stats-btn");
const help = document.getElementById("help-btn");

stats.addEventListener("click", () => {
  printModal(`
  <textarea id="matrix-txt" type="text">`+ "WORDTEC📲\n" + matrizDeJuego.replaceAll("</br>","\n").replaceAll("<br>","") + `</textarea>
  <section id="res-matrix" class="emoticons-container">`+ matrizDeJuego + `</section>
  <section class="stats-container">
  <h1 class="stats-tittle">
    ESTADÍSTICAS
  </h1>
  <div class="stats-general-view">
    <div class="game-counter">
      <p>1 Jugadas</p>
    </div>
    <div class="wins-counter">
      <p>100% Victorias</p>
    </div>
  </div>
  <h1 class="stats-tittle">
    DISTRIBUCIÓN
  </h1>
  <div class="stats-distribution-view">
    <p>1:</p>
    <p>2:</p>
    <p>3:</p>
    <p>4:</p>
    <p>5:</p>
    <p>6:</p>
    <p>X:</p>
  </div>
</section>
<div>Siguiente palabra: </div>
<section class="social-networks">
  <button id="copy-to-share-btn">Compartir</button>
</section>`
  );
  let shareBtn = document.getElementById("copy-to-share-btn")
  let matrix = document.getElementById("matrix-txt")
  
  shareBtn.addEventListener("click", () => {
    matrix.select()
    document.execCommand("Copy")
    printModal(`
    <p>Tu partida ha sido copiada para compartir en donde desees🎉</p>
  `);
  })
});

help.addEventListener("click", () => {
  printModal(`
    <video src = "./static/howToPlay.mp4" alt = "¿Cómo jugar?" autoplay/>
  `);
}); 



