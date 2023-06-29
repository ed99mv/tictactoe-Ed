///Variables///

const notificacionG = document.getElementById("NotificacionG"),
      
  CellVacias = ["", "", "", "", "", "", "", "", ""];

let contenedor = document.getElementById("Contenedor");

let turnoA = document.getElementById("turno")

let puntaje = document.getElementById("puntaje")


let camposC = Array.from(document.getElementsByClassName("cellG"));
console.log(camposC);
let jugador1 =  "X"  //"&#128054"; //perro
let maquina =    "O" //"&#128049"; //gato
let juegoActivo = true;
combGanador = [
  [0, 1, 2], //Horizontales
  [3, 4, 5], //Horizontales
  [6, 7, 8], //Horizontales
  [0, 3, 6], //Verticales
  [1, 4, 7], //Verticales
  [2, 5, 8], //Verticales
  [0, 4, 8], //Diagonales
  [2, 4, 6], //Diagonales
],

msjTurno = () => `Turno del jugador ${jugador1}`;
msjGanador=()=>`¡El jugador ${jugador1} ha ganado!`
msjEmpate=()=>`EL juego ha terminado empate`



///Funciones///

function main() {
  estadoJuego(msjTurno());

}

function estadoJuego(mensaje) {
  notificacionG.innerHTML = mensaje;

}

function ram() {
  for (let index = 0; index < camposC.length; index++) {
    if (camposC[index].textContent==="") {
      
    }
    
  }
  let nuevaV= filtrarvalores()
  camposC[nuevaV].innerHTML=maquina
  turnoA.innerHTML="TURNO DE LA X"
  }

function filtrarvalores() {
    let celdasvacias=[];
    for (let index = 0; index < camposC.length; index++) {
      if (camposC[index].textContent==="") {
        celdasvacias.push(index)
      }
      
    }

    let nuevoRamdon= Math.floor(Math.random()*celdasvacias.length)
    return celdasvacias[nuevoRamdon]
  }

function TurnoJugadores() {
  for (let i = 0; i < 9; i++) {
    camposC[i].addEventListener("click", () => {
      camposC[i].innerHTML = jugador1;
      turnoA.innerHTML="TURNO DEL O"
      
      setTimeout(() => {

        ram() 
  
      }, 1500)

      validacionGanadora()
        });
      }
    };
  
function validacionGanadora() {
  let rondaGanada= false
  for (let i = 0; i < combGanador.length; i++) {
    let condicionGanadora=combGanador[i]
    let posicion1=CellVacias[condicionGanadora[0]],
     posicion2=CellVacias[condicionGanadora[1]],
     posicion3=CellVacias[condicionGanadora[2]]
    
     if (posicion1==='' || posicion2==='' || posicion3==='') {
      continue;
     }
     if (posicion1===posicion2 && posicion2===posicion3) {
      rondaGanada=true
      break
     }
  }

  if (rondaGanada) {
    TurnoJugadores(msjGanador())
    juegoActivo=false

    console.log("GANO JUGADOR")
    return
  }
  let turnoEmpate= !CellVacias.includes('')
  if (turnoEmpate) {
    TurnoJugadores(msjEmpate())
    juegoActivo=false
    return
  }
  cambioJugador()
}





///Invocaciones///
TurnoJugadores();
main();
validacionGanadora()



