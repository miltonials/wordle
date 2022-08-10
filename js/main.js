

letra_actual = {
  fila: 0,
  columna: 0
}
numRando = Math.floor(Math.random() * 1000) % 855;
console.log(numRando)


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
    letraABorrar = cuadro.innerHTML
    index = letraABorrar.indexOf(">")
    letraABorrar = letraABorrar.slice(index + 1, letraABorrar.length - 4)
    // console.log(letraABorrar)
    boton = document.getElementById("letra" + letraABorrar)
    boton.style.color = '#fff'
    boton.style.backgroundColor = '#767679'
    boton.style.border = 'transparent'
    cuadro.innerHTML = '';
  } else {
    console.log('No hay más letras')
  }
}

function enter() {
  if (letra_actual.fila > 4) {
    console.log('No hay más filas')
  }
  else {
    console.log(letra_actual.columna)
    if (letra_actual.columna == 5) {
      // palabraActual =  "PULPO"
      palabraActual = document.getElementById("cuadro_" + letra_actual.fila + "_" + 0).innerHTML
      index = palabraActual.indexOf(">")
      palabraActual2 = palabraActual.slice(index + 1, palabraActual.length - 4)
      palabraActual = document.getElementById("cuadro_" + letra_actual.fila + "_" + 1).innerHTML
      index = palabraActual.indexOf(">")
      palabraActual2 += palabraActual.slice(index + 1, palabraActual.length - 4)
      palabraActual = document.getElementById("cuadro_" + letra_actual.fila + "_" + 2).innerHTML
      index = palabraActual.indexOf(">")
      palabraActual2 += palabraActual.slice(index + 1, palabraActual.length - 4)
      palabraActual = document.getElementById("cuadro_" + letra_actual.fila + "_" + 3).innerHTML
      index = palabraActual.indexOf(">")
      palabraActual2 += palabraActual.slice(index + 1, palabraActual.length - 4)
      palabraActual = document.getElementById("cuadro_" + letra_actual.fila + "_" + 4).innerHTML
      index = palabraActual.indexOf(">")
      palabraActual2 += palabraActual.slice(index + 1, palabraActual.length - 4)
      palabraActual2 = palabraActual2.toLowerCase()
      // + document.getElementById("cuadro_" + letra_actual.fila + "_" + 1).innerHTML + document.getElementById("cuadro_" + letra_actual.fila + "_" + 2).innerHTML + document.getElementById("cuadro_" + letra_actual.fila + "_" + 3).innerHTML + document.getElementById("cuadro_" + letra_actual.fila + "_" + 4).innerHTML
      console.log(7)
      console.log(palabraActual2)
      console.log(listapalabras[numRando])
      if (listapalabras[numRando] == palabraActual2) {
        document.getElementById("cuadro_" + letra_actual.fila + "_" + 0).style.backgroundColor = 'green'
        document.getElementById("cuadro_" + letra_actual.fila + "_" + 1).style.backgroundColor = 'green'
        document.getElementById("cuadro_" + letra_actual.fila + "_" + 2).style.backgroundColor = 'green'
        document.getElementById("cuadro_" + letra_actual.fila + "_" + 3).style.backgroundColor = 'green'
        document.getElementById("cuadro_" + letra_actual.fila + "_" + 4).style.backgroundColor = 'green'
        console.log('Correcto')
        setTimeout(numRando = Math.floor(Math.random() * 1000) % 855, 1000*60*5);
      }
      letra_actual.fila += 1;
      letra_actual.columna = 0;
    }
    else {
      console.log('No hay 5 letras en la fila')
    }
  }
}


// console.log(listapalabras)