///Variables///

const notificacionG = document.getElementById("NotificacionG");

let camposC = document.getElementsByClassName("cellG");

let jugador1 = "&#128054"; //perro
let maquina = "&#128049"; //gato
let juegoActivo = true;



function ram() {
    
  
    for (let index = 0; index < 30; index++) {
       
        let valoR1 = Math.floor(Math.random() * 8);


        if (valoR1!=0) {
            
            return valoR1
        }
    }
    

  
    
}







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

function TurnoJugadores() {
  camposC[0].addEventListener("click", () => {
    camposC[0].innerHTML = jugador1;

    let valoR = Math.floor(Math.random() * 8);
    let  blanco = camposC[0].textContent

    console.log(blanco)

console.log(valoR)
////copiar
    if (blanco[0]!="") {
        setTimeout(() => {

            if (valoR!=0) {

                camposC[valoR].innerHTML = maquina;
            }else{
                alert("soy un cero pero me van a cambiar")
                let vali=ram()
                camposC[vali].innerHTML = maquina;


            }
           
          }, 1500);
    }

     

    
  });

  /////////////////////////////////////////////////////////////////////

  camposC[1].addEventListener("click", () => {
    camposC[1].innerHTML = jugador1;
    let valoR = Math.floor(Math.random() * 8);
    let  blanco = camposC[1].textContent

    console.log(blanco)



    if (blanco[1]!="") {
        setTimeout(() => {
            camposC[valoR].innerHTML = maquina;
          }, 1500);
    }
/////copiar
    
     

  });

  camposC[2].addEventListener("click", () => {
    camposC[2].innerHTML = jugador1;


    let valoR = Math.floor(Math.random() * 8);
    let  blanco = camposC[2].textContent

    console.log(blanco)



    if (blanco[2]!="") {
        setTimeout(() => {
            camposC[valoR].innerHTML = maquina;
          }, 1500);
    }

    
  });

  camposC[3].addEventListener("click", () => {
    camposC[3].innerHTML = jugador1;

    setTimeout(() => {
      camposC[valoR].innerHTML = maquina;
    }, 1500);
  });
  camposC[4].addEventListener("click", () => {
    camposC[4].innerHTML = jugador1;

    setTimeout(() => {
      camposC[valoR].innerHTML = maquina;
    }, 1500);
  });
  camposC[5].addEventListener("click", () => {
    camposC[5].innerHTML = jugador1;

    setTimeout(() => {
      camposC[valoR].innerHTML = maquina;
    }, 1500);
  });

  camposC[6].addEventListener("click", () => {
    camposC[6].innerHTML = jugador1;

    setTimeout(() => {
      camposC[valoR].innerHTML = maquina;
    }, 1500);
  });

  camposC[7].addEventListener("click", () => {
    camposC[7].innerHTML = jugador1;

    setTimeout(() => {
      camposC[valoR].innerHTML = maquina;
    }, 1500);
  });
  camposC[8].addEventListener("click", () => {
    camposC[8].innerHTML = jugador1;

    setTimeout(() => {
      camposC[valoR].innerHTML = maquina;
    }, 1500);
  });
}

///Invocaciones///
TurnoJugadores();
main();
