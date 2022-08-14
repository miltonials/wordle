// Andy Porras 
// Milton Barrera 
// 2022

//variables
let sec = 0;
let min = 0;
let hrs = 0;
let t;
let victorias = 0
let ganeFila1 = ""
let ganeFila2 = ""
let ganeFila3 = ""
let ganeFila4 = ""
let ganeFila5 = ""
let ganeFila6 = ""
let derrotas = ""
let partidas = 0
let intentos = 0
let matrizDeJuego = ""

letra_actual = {
  fila: 0,
  columna: 0
}


//Se selecciona una palabra aleatoria y se formatea el array en mayúsculas
numRando = Math.floor(Math.random() * 1000) % 855;
console.log(numRando)
listapalabras.forEach((element) => {
  listapalabras[listapalabras.indexOf(element)] = element.toUpperCase()
});

let palabraActual = listapalabras[numRando]
let palabraAdivinada = false
console.log(palabraActual)


// temporizador
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
  timer();
}
function timer() {
  t = setTimeout(add, 1000);
  if (min >= 5) {
    sec = 0;
    min = 0;
    hrs = 0;
    numRando = Math.floor(Math.random() * 1000) % 855;
    palabraActual = listapalabras[numRando]
    console.log(palabraActual)
    limpiar()
  }
}
timer();

// coloca la letra en el tablero
function ponerLetra(letter) {
  if (letra_actual.fila < 6 && !palabraAdivinada) {
    if (letra_actual.columna < 5) {
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

// borra la última letra del tablero
function borrar() {
  if (letra_actual.columna > 0 && letra_actual.columna <= 5) {
    letra_actual.columna -= 1;
    cuadro = document.getElementById("cuadro_" + letra_actual.fila + "_" + letra_actual.columna)
    cuadro.firstChild.remove()
  } else {
    console.log('No hay más letras')
  }
}

// validad que la palabra sea correcta, si no lo es, se pasa a la siguiente fila
// si es correcta, se termina el juego
function enter() {
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
        let letraTeclado = document.getElementById("letra" + letraCuadro)
        cuadro = document.getElementById("cuadro_" + letra_actual.fila + "_" + (i))
        letraCuadro = cuadro.innerText
        if (letraCuadro == palabraActual.charAt(i)) {
          cuadro.style.backgroundColor = "var(--correct-letter)"
          document.getElementById("letra" + letraCuadro).style.backgroundColor = "var(--correct-letter)"
          matrizDeJuego += "🟩"
        }
        else if (palabraActual.indexOf(letraCuadro) != -1) {
          cuadro.style.backgroundColor = "var(--present-letter)"
          if (letraTeclado.style.backgroundColor != "var(--correct-letter)") {
            document.getElementById("letra" + letraCuadro).style.backgroundColor = "var(--present-letter)"
          }
          palabraAdivinada = false
          matrizDeJuego += "🟨"
        }
        else {
          cuadro.style.backgroundColor = "var(--missing-letter)"
          if (letraTeclado.style.backgroundColor != "var(--correct-letter)") {
            document.getElementById("letra" + letraCuadro).style.backgroundColor = "var(--missing-letter)"
          }
          palabraAdivinada = false
          matrizDeJuego += "⬛"
        }
      }
      if (palabraAdivinada) {
        if (letra_actual.fila == 0) {
          ganeFila1 += "🟩"
        }
        else if (letra_actual.fila == 1) {
          ganeFila2 += "🟩"
        }
        else if (letra_actual.fila == 2) {
          ganeFila3 += "🟩"
        }
        else if (letra_actual.fila == 3) {
          ganeFila4 += "🟩"
        }
        else if (letra_actual.fila == 4) {
          ganeFila5 += "🟩"
        }
        else{
          ganeFila6 += "🟩"
        }
        partidas += 1
        victorias += 1
        stats.click()
      }
      matrizDeJuego += "</br>"

      letra_actual.fila += 1;
      letra_actual.columna = 0;

      if (letra_actual.fila == 6) {
        derrotas += "🟥"
        partidas += 1
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

// limpia el tablero
function limpiar() {
  matrizDeJuego = ""
  palabraAdivinada = false
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
  console.log('Se ha limpiado el tablero')
}
/**
 * Función que reincia la palabra en juego, el tablero y las estadísticas
 */
function reiniciar() {
  limpiar()
  numRando = Math.floor(Math.random() * 1000) % 855;

  palabraActual = listapalabras[numRando]
  palabraAdivinada = false
  victorias = 0
  derrotas = 0
  ganeFila1 = 0
  ganeFila2 = 0
  ganeFila3 = 0
  ganeFila4 = 0
  ganeFila5 = 0
  ganeFila6 = 0
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