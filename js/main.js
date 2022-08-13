// let h1 = document.getElementsByTagName('h1')[0];
let sec = 0;
let min = 0;
let hrs = 0;
let t;

letra_actual = {
  fila: 0,
  columna: 0
}

let victorias = 0
let derrotas = 0
let intentos = 0
let matrizDeJuego = ""

//Se selecciona una palabra aleatoria y se formatea el array en mayúsculas
numRando = Math.floor(Math.random() * 1000) % 855;
listapalabras.forEach((element) => {
  listapalabras[listapalabras.indexOf(element)] = element.toUpperCase()
});

let palabraActual = listapalabras[numRando]
let palabraAdivinada = false
console.log(palabraActual)


function tick() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
}

function add() {
  tick();
  // h1.textContent = (hrs > 9 ? hrs : "0" + hrs)
  //   + ":" + (min > 9 ? min : "0" + min)
  //   + ":" + (sec > 9 ? sec : "0" + sec);
  timer();
}
function timer() {
  t = setTimeout(add, 1000);
  if (min >= 5) {
    sec = 0;
    min = 0;
    hrs = 0;
    numRando = Math.floor(Math.random() * 5);
    console.log(numRando)
  }
}

timer();
// start.onclick = timer;
// stop.onclick = function() {
//     clearTimeout(t);
// }

// timeNumRando = setTimeout(numRando = Math.floor(Math.random() * 1000) % 855, 1000*60*5);

function ponerLetra(letter) {
  if (letra_actual.fila < 6 && !palabraAdivinada) {
    if (letra_actual.columna <= 4) {
      cuadro = document.getElementById("cuadro_" + letra_actual.fila + "_" + letra_actual.columna)
      cuadro.innerHTML = '<p class="letraTablero">' + letter + "</p>";
      letra_actual.columna += 1;
    } else {
      console.log('No hay más espacio')
    }
  } else {
    console.log('No hay más filas')
  }
}


function borrar() {
  if (letra_actual.columna > 0 && letra_actual.columna <= 5) {
    letra_actual.columna -= 1;
    cuadro = document.getElementById("cuadro_" + letra_actual.fila + "_" + letra_actual.columna)
    cuadro.firstChild.remove()
  } else {
    console.log('No hay más letras')
  }
}

function enter() {
  document.onfocus
  if (palabraAdivinada) {
    stats.click()
  }
  else if (letra_actual.fila > 6) {
    printModal(`<p class="alerts">No hay más filas</p>`);
  }
  else if (letra_actual.columna == 5) {
    let palabraEscrita = ""

    for (let i = 0; i < 5; i++) {
      cuadro = document.getElementById("cuadro_" + letra_actual.fila + "_" + (i))
      letraCuadro = cuadro.innerText
      palabraEscrita += letraCuadro
    }

    if (listapalabras.indexOf(palabraEscrita) >= 0) {
      palabraAdivinada = true;
      matrizDeJuego += "<br>"
      for (let i = 0; i < 5; i++) {
        cuadro = document.getElementById("cuadro_" + letra_actual.fila + "_" + (i))
        letraCuadro = cuadro.innerText
        if (letraCuadro == palabraActual.charAt(i)) {
          cuadro.style.backgroundColor = "var(--correct-letter)"
          document.getElementById("letra" + letraCuadro).style.backgroundColor = "var(--correct-letter)"
          matrizDeJuego += "🟩"
        }
        else if (palabraActual.indexOf(letraCuadro) != -1) {
          cuadro.style.backgroundColor = "var(--present-letter)"
          document.getElementById("letra" + letraCuadro).style.backgroundColor = "var(--present-letter)"
          palabraAdivinada = false
          matrizDeJuego += "🟨"
        }
        else {
          cuadro.style.backgroundColor = "var(--missing-letter)"
          document.getElementById("letra" + letraCuadro).style.backgroundColor = "var(--missing-letter)"
          palabraAdivinada = false
          matrizDeJuego += "⬛"
        }
      }
      if (palabraAdivinada) {
        stats.click()
      }
      matrizDeJuego += "</br>"

      letra_actual.fila += 1;
      letra_actual.columna = 0;

      if (letra_actual.fila == 6) {
        stats.click()
      }
    }
    else {
      printModal(`<p class="alerts">La palabra no está en la lista</p>`);
    }
  }
  else {
    printModal(`<p class="alerts">No hay sufientes letras</p>`);
  }
}

/**
 * Función que reincia la palabra en juego, el tablero y las estadísticas
 */
function reiniciar() {
  if (!(letra_actual.fila == 0 && letra_actual.columna == 0) || letra_actual.columna != 0) {
    while (letra_actual.fila >= 0) {
      if (letra_actual.fila != 0) {
        letra_actual.fila--
        for (let i = 0; i < 5; i++) {
          cuadroId = "cuadro_" + letra_actual.fila + "_" + i
          cuadro = document.getElementById(cuadroId)
          cuadro.style.backgroundColor = "var(--main-bg-color)"

          teclaId = "letra" + cuadro.firstChild.innerText
          tecla = document.getElementById(teclaId)
          tecla.style.backgroundColor = "var(--default-key-color)"

          cuadro.firstChild.remove()
        }
      }
      else {
        break
      }
    }
  }

  letra_actual.fila = 0;
  letra_actual.columna = 0;

  numRando = Math.floor(Math.random() * 1000) % 855;

  palabraActual = listapalabras[numRando]
  palabraAdivinada = false
  victorias = 0
  derrotas = 0
  matrizDeJuego = ""
  console.log(palabraActual)
}

/**
 * Eventos del teclado
 */
window.addEventListener("keydown", (keyData) => {
  if ((keyData.keyCode >= 65 && keyData.keyCode <= 90) || keyData.keyCode == 192) {
    ponerLetra(keyData.key.toUpperCase())
  }
  else if (keyData.keyCode == 13) {
    enter()
  }
  else if (keyData.keyCode == 8) {
    borrar()
  }
})