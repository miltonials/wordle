const stats = document.getElementById("stats-btn");
const help = document.getElementById("help-btn");

// muestra las estadisticas
stats.addEventListener("click", () => {
  tiempoRestanteMin = 4-min;
  tiempoRestanteSec = 60-sec;
  printModal(`
  <textarea id="matrix-txt" type="text">`+ "WORDTEC📲\n" + matrizDeJuego.replaceAll("</br>","\n").replaceAll("<br>","") + `</textarea>
  <section id="res-matrix" class="emoticons-container">`+ matrizDeJuego + `</section>
  <section class="stats-container">
  <h1 class="stats-tittle">
    ESTADÍSTICAS
  </h1>
  <div class="stats-general-view">
    <div class="game-counter">
      <p>`+partidas+` Jugadas </p>
    </div>
    <div class="wins-counter">
      <p> `+((victorias/partidas)*100)+`% Victorias</p>
    </div>
  </div>
  <h1 class="stats-tittle">
    DISTRIBUCIÓN
  </h1>
  <div class="stats-distribution-view">
    <p>1:`+ganeFila1+`</p>
    <p>2:`+ganeFila2+`</p>
    <p>3:`+ganeFila3+`</p>
    <p>4:`+ganeFila4+`</p>
    <p>5:`+ganeFila5+`</p>
    <p>6:`+ganeFila6+`</p>
    <p>X:`+derrotas+`</p>
  </div>
</section>
<div>Siguiente palabra: `+(4-min)+`:`+(60-sec)+`</div>
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

// muestra la ayuda
help.addEventListener("click", () => {
  printModal(`
    <video src = "./static/howToPlay.mp4" alt = "¿Cómo jugar?" autoplay/>
  `);
}); 



