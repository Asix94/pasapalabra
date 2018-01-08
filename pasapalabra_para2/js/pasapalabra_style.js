	/*Pasapalabra Game! (Final JS) 🎮⁉️

	Resource: https://www.youtube.com/watch?v=xJp2c_rcHDc

	Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra y el usuario deberá adivinar que palabra estamos tratando, por ejemplo:

	'>>>'With the letter "M", Capital of Spain, located in the center of the country.
	'>>>' "Madrid"
	'>>>'Correct, you have 1 Point!
	Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuantas ha acertado. Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. El juego deberá, cuando finalize, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.*/

	var jugador = 0;

	/* numero de la pregunta de ambos jugadores */
	var numA = 0;
	var numN = 0;

	var questions = [];
	var ranking = [];

	/* preguntas correctas de ambos jugadores */
	var correctA = 0;
	var correctN = 0;

	/* preguntas incorrectas de ambos jugadores */
	var incorrectA = 0;
	var incorrectN = 0;

	var answer = "";

	/* tiempo de ambos jugadores */
	var tiempoA = 130;
	var tiempoN = 130;

	/* variable para controlar el tiempo de ambos jugadores */ 
	var tA;
	var tN;

	document.write("<script type='text/javascript' src='js/extern.js'></script>");

	function start(){

		document.getElementById("start").setAttribute("style", "display:none;");

		document.getElementById("cabezeraA").setAttribute("style", "display:none;");
		document.getElementById("cabezeraN").setAttribute("style", "display:none;");

		document.getElementById("juegoA").setAttribute("style", "display:block;");
		document.getElementById("juegoN").setAttribute("style", "display:block;");

		document.getElementById("contadorA").innerHTML = correctA;
		document.getElementById("contadorN").innerHTML = correctN;

		time();
		preguntas();
		answers();

	}

	function constructranking(name,puntuation){

		this.name = name;
		this.puntuation = puntuation;

	}

	function userranking(name,puntuation){

		ranking.push(
			name = new constructranking(name,puntuation),
		)
	}

	function answers(){

		if (jugador == 0) {
			if(questions[numA].status[0] == 0){

				document.getElementById("preguntaA").innerHTML = questions[numA].question[0];
				document.getElementById("preguntaN").innerHTML = "";
				document.getElementById("comprobarN").disabled='disabled';
				document.getElementById("pasarpalabraN").disabled='disabled';
				document.getElementById("textoN").disabled='disabled';
				document.getElementById("comprobarA").disabled='';
				document.getElementById("pasarpalabraA").disabled='';
				document.getElementById("textoA").disabled='';
			}

			else{

				numA++;
				answers();

			}
		}

		else{
			if(questions[numN].status[1] == 0){

				document.getElementById("preguntaN").innerHTML = questions[numN].question[1];
				document.getElementById("preguntaA").innerHTML = "";
				document.getElementById("comprobarA").disabled='disabled';
				document.getElementById("pasarpalabraA").disabled='disabled';
				document.getElementById("textoA").disabled='disabled';
				document.getElementById("comprobarN").disabled='';
				document.getElementById("pasarpalabraN").disabled='';
				document.getElementById("textoN").disabled='';
			
			}

			else{

				numN++;
				answers();

			}
		}

		

	}

	function comprobar(){

		if (jugador == 0) {
			var answer = document.getElementById("textoA").value;
			answer = answer.toLowerCase();

			if(answer == questions[numA].answer[0]){
				
				document.getElementById("A"+questions[numA].letter).setAttribute("style", "background: radial-gradient(green, green, white);");
				questions[numA].status[0] = 1;
				correctA++;
				document.getElementById("incorrecto").setAttribute("style", "display:none;");
				document.getElementById("correcto").setAttribute("style", "display:block;");
				document.getElementById("contadorA").innerHTML = correctA;
			}

			else{
		
				document.getElementById("A"+questions[numA].letter).setAttribute("style", "background: radial-gradient(red, red, white);");
				questions[numA].status[0] = 1;
				incorrectA++;
				document.getElementById("incorrecto").setAttribute("style", "display:block;");
				document.getElementById("respuestaI").innerHTML = "La respuesta Correcta es:" + questions[numA].answer[0]
				document.getElementById("correcto").setAttribute("style", "display:none;");
				jugador = 1;
			}

			if (correctA + incorrectA == questions.length && correctN + incorrectN == questions.length) {

				stopCount();
				document.getElementById("correcto").setAttribute("style", "display:none;");
				document.getElementById("incorrecto").setAttribute("style", "display:none;");
				document.getElementById("resultadoA").innerHTML = "Felicidades, has tenido un total de " + correctA + " preguntas acertadas, y un total de " + incorrectA + " preguntas falladas.";
				document.getElementById("resultadoN").innerHTML = "Felicidades, has tenido un total de " + correctN + " preguntas acertadas, y un total de " + incorrectN + " preguntas falladas.";
				document.getElementById("tableroA").setAttribute("style", "display:none;");
				document.getElementById("tableroN").setAttribute("style", "display:none;");
				document.getElementById("resultadoA").setAttribute("style", "display:block;");
				document.getElementById("resultadoN").setAttribute("style", "display:block;");
				document.getElementById("nombreranking").setAttribute("style", "display:block;");
				
			}

			else{

				vuelta();
			}
		}

		else{
			var answer = document.getElementById("textoN").value;
			answer = answer.toLowerCase();

			if(answer == questions[numN].answer[1]){
				
				document.getElementById("N"+questions[numN].letter).setAttribute("style", "background: radial-gradient(green, green, white);");
				questions[numN].status[1] = 1;
				correctN++;
				document.getElementById("incorrecto").setAttribute("style", "display:none;");
				document.getElementById("correcto").setAttribute("style", "display:block;");
				document.getElementById("contadorN").innerHTML = correctN;
			}

			else{
		
				document.getElementById("N"+questions[numN].letter).setAttribute("style", "background: radial-gradient(red, red, white);");
				questions[numN].status[1] = 1;
				incorrectN++;
				document.getElementById("incorrecto").setAttribute("style", "display:block;");
				document.getElementById("respuestaI").innerHTML = "La respuesta Correcta es:" + questions[numN].answer[1]
				document.getElementById("correcto").setAttribute("style", "display:none;");
				jugador = 0;
			}

			if (correctN + incorrectN == questions.length && correctA + incorrectA == questions.length) {

				stopCount();
				document.getElementById("correcto").setAttribute("style", "display:none;");
				document.getElementById("incorrecto").setAttribute("style", "display:none;");
				document.getElementById("resultadoA").innerHTML = "Felicidades, has tenido un total de " + correctA + " preguntas acertadas, y un total de " + incorrectA + " preguntas falladas.";
				document.getElementById("resultadoN").innerHTML = "Felicidades, has tenido un total de " + correctN + " preguntas acertadas, y un total de " + incorrectN + " preguntas falladas.";
				document.getElementById("tableroA").setAttribute("style", "display:none;");
				document.getElementById("tableroN").setAttribute("style", "display:none;");
				document.getElementById("resultadoA").setAttribute("style", "display:block;");
				document.getElementById("resultadoN").setAttribute("style", "display:block;");
				document.getElementById("nombreranking").setAttribute("style", "display:block;");
				
			}

			else{

				vuelta();
			}
		}


	}

	function pasarpalabra(){

		if (jugador == 0) {
			jugador = 1;
			numA++;
		}
		else{
			jugador = 0;
			numN++;
		}

		vuelta();
	}

	function vuelta(){

		if (correctA + incorrectA == questions.length || tiempoA == 0) {
			jugador = 1;
		}

		if (correctN + incorrectN == questions.length || tiempoN == 0) {
			jugador = 0;
		}

		if (jugador == 0) {
			if (numA+1 < questions.length) {

				document.getElementById("textoA").value = "";
				document.getElementById("textoN").value = "";
				answers();

			}

			else{

				numA = 0;
				document.getElementById("textoA").value = "";
				document.getElementById("textoN").value = "";
				answers();
			}
		}
		else{
			if (numN+1 < questions.length) {

				document.getElementById("textoN").value = "";
				document.getElementById("textoA").value = "";
				answers();

			}

			else{

				numN = 0;
				document.getElementById("textoN").value = "";
				document.getElementById("textoA").value = "";
				answers();
			}
		}

	}

	function rankings(){

		var count = 0;
		var nameA = document.getElementById("nameA").value;
		var nameN = document.getElementById("nameN").value;

		if(nameA != "" && nameA != null){
			userranking(nameA,correctA);
			count++;
		}

		if(nameN != "" && nameN != null){
			userranking(nameN,correctN);
			count++;
		}

		document.getElementById("rank").innerHTML = "Este es el ranking de jugadores de pasapalabra";
		
		for(var i=ranking.length - count; i < ranking.length; i++){
			var p = document.createElement("p");
			var t = document.createTextNode(ranking[i].name + " " + ranking[i].puntuation);
    		p.appendChild(t);
    		document.getElementById("tablaranking").appendChild(p);
		}

		document.getElementById("nombreranking").setAttribute("style", "display:none;");
		document.getElementById("ranking").setAttribute("style", "display:block;");
	}

	function noacabado(){

		stopCount();

		document.getElementById("rank").innerHTML = "No has acabado el juego, pero terminaste con un total de " + correctA + " preguntas acertadas, y un total de " + incorrectA + " preguntas falladas.";

		document.getElementById("ranking").setAttribute("style", "display:block;");

	}

	function returngames(){

		for (var i = 0; i < questions.length; i++) {
			document.getElementById("A"+questions[i].letter).setAttribute("style", "background: radial-gradient(blue, blue, white);");
			document.getElementById("N"+questions[i].letter).setAttribute("style", "background: radial-gradient(blue, blue, white);");
		}
		
		document.getElementById("tableroA").setAttribute("style", "display:block;");
		document.getElementById("tableroN").setAttribute("style", "display:block;");
		document.getElementById("resultadoA").setAttribute("style", "display:none;");
		document.getElementById("resultadoN").setAttribute("style", "display:none;");
		document.getElementById("nombreranking").setAttribute("style", "display:none;");
		document.getElementById("ranking").setAttribute("style", "display:none;");
		document.getElementById("nameA").value = "";
		document.getElementById("nameN").value = "";
		document.getElementById("textoA").value = "";
		document.getElementById("textoN").value = "";

		document.getElementById("tiempoA").innerHTML = 130;
		document.getElementById("tiempoN").innerHTML = 130;

		document.getElementById("contadorA").innerHTML = 0;
		document.getElementById("contadorN").innerHTML = 0;

		questions = [];
		correctA = 0;
		correctN = 0;
		incorrectA = 0;
		incorrectN = 0;
		numA = 0;
		numN = 0;
		tiempoA = 130;
		tiempoN = 130;

		jugador = 0;

		start();

	}

	function fin(){

		for (var i = 0; i < questions.length; i++) {
			document.getElementById("A"+questions[i].letter).setAttribute("style", "background: radial-gradient(blue, blue, white);");
			document.getElementById("N"+questions[i].letter).setAttribute("style", "background: radial-gradient(blue, blue, white);");
		}

		document.getElementById("cerrar").setAttribute("style", "display:block;");
		document.getElementById("ranking").setAttribute("style", "display:none;");
		document.getElementById("tiempoA").innerHTML = 0;
		document.getElementById("tiempoN").innerHTML = 0;

		questions = [];
		correctA = 0;
		correctN = 0;
		incorrectA = 0;
		incorrectN = 0;
		num = 0;
		tiempoA = 0;
		tiempoN = 0;

		jugador = 0;

	}

	function time() {

		if (jugador == 0) {

			tiempoA--;
			document.getElementById("tiempoA").innerHTML = tiempoA;

		    if (tiempoA == 0) {
		    	if(tiempoN == 0) {
		    		noacabado();
		    	}
		    	else{
		    		jugador = 1;
		    		time();
		    		vuelta();
		    	}
		    }
		    else{
		    	tA = setTimeout(function(){ time() }, 1000)
		    }

		}

		else{

			tiempoN--;
			document.getElementById("tiempoN").innerHTML = tiempoN;

		    if (tiempoN == 0) {
		    	if(tiempoA == 0){
		    		noacabado();
		    	}
		    	else{
		    		jugador = 0;
		    		time();
		    		vuelta();
		    	}
		    }
		    else{
		    	tN = setTimeout(function(){ time() }, 1000)
		    }
		}

	}

	function stopCount() {
		if (jugador == 0) {
	    	clearTimeout(tA);
		}
		else{
			clearTimeout(tN);
		}
	}