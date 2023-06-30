
///Música
let audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "audio/y2mate.com - PACMAN Evolution 8bit Pixel Dubstep REMIXXX_v720P.mp4"; 
audio.loop = true;

document.body.addEventListener("mousemove", function () {
  audio.play();
});

///Variables///

const notificacionG = document.getElementById("NotificacionG"),
      
  CellVacias = ["", "", "", "", "", "", "", "", ""];

let contenedor = document.getElementById("Contenedor");

let turnoA = document.getElementById("turno")

let puntaje = document.getElementById("puntaje")

let ganador = document.getElementById("ganador")

let camposC = Array.from(document.getElementsByClassName("cellG"));

let btnReset= document.getElementById("btnReset")

//let puntaje1=0;

let jugador1 =  "👾"  
let maquina =    "🤖" 
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





///Funciones///


function ram() {
  for (let index = 0; index < camposC.length; index++) {
    if (camposC[index].textContent==="") {
      
    }
    
  }
  let nuevaV= filtrarvalores()
  camposC[nuevaV].innerHTML=maquina
  turnoA.innerHTML="TURNO DE LA 👾"
  validacionGanadora(maquina)
  }
  
function filtrarvalores() {
  let celdasvacias=[];
    for (let index = 0; index < camposC.length; index++) {
      if (camposC[index].textContent==="") {
        celdasvacias.push(index)
      }
      
    }

    let nuevoRamdon= Math.floor(Math.random()*celdasvacias.length)
    let union = celdasvacias[nuevoRamdon]
    return union
    
  }

function TurnoJugadores() {
  for (let i = 0; i < 9; i++) {
    camposC[i].addEventListener("click", () => {
      camposC[i].innerHTML = jugador1;
      turnoA.innerHTML="TURNO DEL 🤖"
      
      setTimeout(() => {

        ram() 
  
      }, 2500)
      
      validacionGanadora(jugador1)
      
        });
      }
    };
  
function validacionGanadora(jugador) {
  console.log(combGanador[0]);

  combGanador.forEach(element => {
    if (camposC[element[0]].textContent===jugador && 
      camposC[element[1]].textContent===jugador&&
      camposC[element[2]].textContent===jugador){
        
        //let contadorH=document.getElementById('contadorH');
      ganador.innerHTML="Ha ganado jugador "+jugador
      // puntaje1++
      // contadorH.innerHTML=puntaje1
      setTimeout(()=>{
        location.reload()
      },2000)
     }  
 
  });
}



btnReset.addEventListener('click', function resetear () {
 
  location.reload()
})

///Invocaciones///
TurnoJugadores();





