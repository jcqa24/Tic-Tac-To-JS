var turnos = 1;
var jugador = 1;
function tiro(casilla){
    
    console.log("tiro en la casilla "+casilla);
    $("#"+casilla).prop('disabled',true);
    if (jugador == 1){
        $("#"+casilla).text("X");
        if (turnos >= 4){
            verificaGanador(jugador);    
        }
        jugador = 0;
    }else{
        $("#"+casilla).text("O");
        if (turnos >= 4){
            verificaGanador(jugador);    
        }
        jugador = 1;
    }
    console.log("turno" +turnos);
    turnos ++;
    



}

function verificaGanador(jugador){
    if(jugador == 1){
        console.log("content "+$("#1").text());
        if($("#1").text() == "X" && $("#5").text() == "X" && $("#9").text() == "X"){
            console.log("Gana el jugador 1");
        }
    }else{

    }
}