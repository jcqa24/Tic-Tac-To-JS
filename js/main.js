var turnos = 1;
var jugador = 1;
function tiro(casilla){
    
    console.log("tiro en la casilla "+casilla);
    $("#"+casilla).prop('disabled',true);
    if (jugador == 1){
        $("#"+casilla).text("X");
        if (turnos >= 4){
                
            g = verificaGanador(jugador);
	if (g == 1){
		alert("Gana el jugador 1");
		reset();
	    }else if( g == 2){
		alert("Gana el jugador 2");
		reset();
	    }    
        }
        jugador = 0;
    }else{
        $("#"+casilla).text("O");
        if (turnos >= 4){
            g = verificaGanador(jugador);
	if (g == 1){
		alert("Gana el jugador 1");
		reset();
	    }else if( g == 2){
		alert("Gana el jugador 2");
		reset();
	    }    
        }
        jugador = 1;
    }
    console.log("turno" +turnos);
    if(turnos == 9){
	alert("empate");
	    reset();
    }
	turnos ++;
    



}

function verificaGanador(jugador){
    if(jugador == 1){
	    t = "X"
    }else{
	t = "O"
    }
	if($("#1").text() == t && $("#5").text() == t && $("#9").text() == t){

		if(t == "X"){
			return 1;
		}else{
			return 2;
		}

        }else if($("#7").text() == t && $("#5").text() == t && $("#3").text() == t){

		if(t == "X"){
			return 1;
		}else{
			return 2;
		}

        }else if($("#1").text() == t && $("#2").text() == t && $("#3").text() == t){

		if(t == "X"){
			return 1;
		}else{
			return 2;
		}
	}else if($("#4").text() == t && $("#5").text() == t && $("#6").text() == t){

		if(t == "X"){
			return 1;
		}else{
			return 2;
		}
	}else if($("#7").text() == t && $("#8").text() == t && $("#9").text() == t){

		if(t == "X"){
			return 1;
		}else{
			return 2;
		}
	} else if($("#1").text() == t && $("#4").text() == t && $("#7").text() == t){

		if(t == "X"){
			return 1;
		}else{
			return 2;
		}
	
        }else if($("#2").text() == t && $("#5").text() == t && $("#8").text() == t){

		if(t == "X"){
			return 1;
		}else{
			return 2;
		}
	
        }else if($("#3").text() == t && $("#6").text() == t && $("#9").text() == t){

		if(t == "X"){
			return 1;
		}else{
			return 2;
		}
	}
	return 0;
}


function reset (){
	for( i = 1;i<10;i++){
		$("#"+i).text("");
    		$("#"+i).prop('disabled',false);
	}
	turnos = 1;
	jugador = 1;
}
