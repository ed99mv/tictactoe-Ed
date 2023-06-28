///Variables///

const notificacionG = document.getElementById("NotificacionG"),
      CellVacias=["x","j","x","j","g","m","gt","",""]
      result= CellVacias.filter(word => word.length <1)
      console.log(result);
let contenedor = document.getElementById("Contenedor")

let camposC = document.getElementsByClassName("cellG");

let jugador1 = "&#128054"; //perro
let maquina = "&#128049"; //gato
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
];

msjTurno = () => `Turno del jugador ${jugador1}`;



///Funciones///
function main() {
  estadoJuego(msjTurno());
}

function estadoJuego(mensaje) {
  notificacionG.innerHTML = mensaje;
}

function ram() {
  for (let index = 0; index < 8; index++) {
    
    let valoR1 = Math.floor(Math.random() * 8);
    
    if (valoR1 != 0) {
      return valoR1;
    }
  }
}


function TurnoJugadores() {

  for (let i = 0; i < 9; i++) {

    camposC[i].addEventListener("click", () => {
      camposC[i].innerHTML = jugador1;
      console.log(camposC);
      if(camposC!==""){
        ;
      }else{
        true
      }
      let valoR = Math.floor(Math.random() * 8);
      let blanco = camposC[i].textContent;
  
       console.log(blanco);
  
       console.log(valoR);
      
      if (blanco[i] != "") {
        setTimeout(() => {
          let valores = i;
          if (valoR !== valores) {
            camposC[valoR].innerHTML = maquina;
          } else {
            alert("soy el mismo numero que acabas de clickear pero me van a cambiar");
            let vali = ram();
            camposC[vali].innerHTML = maquina;
          }
        }, 1500);
      }
    });
  }

  }


/*let div = document.querySelector('.cellG')
if (!div.innerHTML.trim()) {
  let valorRa=ram()
  let final=div.innerHTML=valorRa
}*/

///Invocaciones///
TurnoJugadores();
main();
