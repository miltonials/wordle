

letra_actual = {
  fila: 0,
  columna: 0
}


function letra(letter, id) {
  console.log(listapalabras)

  if (letra_actual.columna <= 4) {
    console.log("cuadro_" + letra_actual.fila + "_" + letra_actual.columna)
    cuadro = document.getElementById("cuadro_" + letra_actual.fila + "_" + letra_actual.columna)
    cuadro.innerHTML = '<p class="letraTablero">' + letter + "</p>";

    boton = document.getElementById(id)
    boton.style.color = 'red'
    boton.style.backgroundColor = 'gray'

    letra_actual.columna += 1;
  } else {
    console.log('No hay más espacio')
  }
}


function borrar() {

  if (letra_actual.columna > 0 && letra_actual.columna <= 5) {
    letra_actual.columna -= 1;
    cuadro = document.getElementById("cuadro_" + letra_actual.fila + "_" + letra_actual.columna)
    cuadro.innerHTML = '';
  } else {
    console.log('No hay más letras')
  }

}

console.log(listapalabras)