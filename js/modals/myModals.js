const stats = document.getElementById("stats-btn");
const help = document.getElementById("help-btn");

stats.addEventListener("click", () => {
    printModal(`
    <section>
      <h1>ESTADÍSTICAS</h1>
    </section>
    `); 
});

help.addEventListener("click", () => {
    printModal(`
    <img src="././static/howToPlay.png" alt="¿Cómo jugar?"  data-view-component="true" class="avatar circle">
    `); 
});