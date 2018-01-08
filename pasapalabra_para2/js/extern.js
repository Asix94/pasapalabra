
function constructquestion(letter,answer,status,question){

	this.letter = letter;
	this.answer = answer;
	this.status = status;
	this.question = question;

}

function preguntas(){

	questions = [

		A = new constructquestion(
			"letraA",
			["abducir","absolver","agenda"],
			[0,0],
			["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.",
			"CON LA A. Declarar el confesor a un penitente perdonados sus pecados despues de la confesion.",
			"CON LA A. Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer."]),
		B = new constructquestion(
			"letraB",
			["bingo","barbacoa","bonanza"],
			[0,0],
			["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso.",
			"CON LA B. Parrilla usada para asar al aire libre carne o pescado.",
			"CON LA B. Prosperidad."]),
		C = new constructquestion(
			"letraC",
			["churumbel","clara","caracol"],
			[0,0],
			["CON LA C. Niño, crío, bebé.",
			"CON LA C. Cerveza mezclada con gaseosa.",
			"CON LA C. Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse."]),
		D = new constructquestion(
			"letraD",
			["diarrea","descuento","dormir"],
			[0,0],
			["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida.",
			"CON LA D. Tiempo que se añade en un partido de futbol para compensar el perdido con las interrupciones del juego.",
			"CON LA D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios."]),
		E = new constructquestion(
			"letraE",
			["ectoplasma","estreno","entrecot"],
			[0,0],
			["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación.",
			"CON LA E. Primera funcion de una obra de teatro u otros espectaculos, o primer pase de una pelicula.",
			"CON LA E. Trozo de carne sacado de entre costilla y costilla de la res."]),
		F = new constructquestion(
			"letraF",
			["facil","fuelle","farhadi"],
			[0,0],
			["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad.",
			"CON LA F. Instrumento para coger aire y lanzarlo con una direccion determinada.",
			"CON LA F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017."]),
		G = new constructquestion(
			"letraG",
			["galaxia","gaceta","gorgorito"],
			[0,0],
			["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas.",
			"CON LA G. Nombre que se aplicaba antiguamente a los periodicos.",
			"CON LA G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar."]),
		H = new constructquestion(
			"letraH",
			["harakiri","hipocrita","hidroavión"],
			[0,0],
			["CON LA H. Suicidio ritual japonés por desentrañamiento.",
			"CON LA H. Persona que finge cualidades o sentimientos contrarios a los que verdaderamente se tienen.",
			"CON LA H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua."]),
		I = new constructquestion(
			"letraI",
			["iglesia","ignifugo","inapetencia"],
			[0,0],
			["CON LA I. Templo cristiano.",
			"CON LA I. Se aplica a los que protege contra el fuego.",
			"CON LA I. Falta de gana de comer."]),
		J = new constructquestion(
			"letraJ",
			["jabali","juerguista","jardinería"],
			[0,0],
			["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba.",
			"CON LA J. Persona aficionada a las juegas.",
			"CON LA J. Arte y oficio del jardinero."]),
		K = new constructquestion(
			"letraK",
			["kamikaze","karate","katiusca"],
			[0,0],
			["CON LA K. Persona que se juega la vida realizando una acción temeraria.",
			"CON LA K. Modalidad de lucha japonesa, basada en golpes secos realizados con el borde en la mano, los codos o los pies.",
			"CON LA K. Bota de caucho usada para protegerse del augua."]),
		L = new constructquestion(
			"letraL",
			["licantropo","liron","lobera"],
			[0,0],
			["CON LA L. Hombre lobo.",
			"CON LA L. Mamifero roedor parecido al raton, que vive en los arboles y que pasa el invierno aletargado.",
			"CON LA L. Guarida de lobos."]),
		M = new constructquestion(
			"letraM",
			["misantropo","murdoch","mentira"],
			[0,0],
			["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas.",
			"CON LA M. Apellido del ingeniero que invento e introdujo la iluminacion de gas en Gran Bretaña en 1792.",
			"CON LA M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída."]),
		N = new constructquestion(
			"letraN",
			["necedad","norcoreano","nativo"],
			[0,0],
			["CON LA N. Demostración de poca inteligencia.",
			"CON LA N. Natural del pais asiatico con capital en Pyong Yang.",
			"CON LA N. Se aplica al que ha nacido en el lugar de que se trata"]),
		Ñ = new constructquestion(
			"letraNN",
			["señal","montañes","hogaño"],
			[0,0],
			["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
			"CONTINE LA Ñ. Perteneciente o relativo a Cantabria, comunidad autonoma de España.",
			"CONTINE LA Ñ. De tiempo que indica en esta época diferencia de antaño en época inferior."]),
		O = new constructquestion(
			"letraO",
			["orco","opositar","organo"],
			[0,0],
			["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien.",
			"CON LA O. Hacer opociciones a un cargo o empleo.",
			"CON LA O. De las partes del pulpo, animal o vegetal que ejercen una función."]),
		P = new constructquestion(
			"letraP",
			["protoss","perfil","plotino"],
			[0,0],
			["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft.",
			"CON LA P. Postura en la que no se deja ver si no una de las dos mitades laterales del cuerpo.",
			"CON LA P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría."]),
		Q = new constructquestion(
			"letraQ",
			["queso","adquisitivo","chisquero"],
			[0,0],
			["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche.",
			"CONTIENE LA Q. Se aplica al poder que da capacidad economica para adquirir bienes o servicios.",
			"CONTIENE LA Q. Encendedor antiguo de bolsillo."]),
		R = new constructquestion(
			"letraR",
			["raton","rielar","rafaga"],
			[0,0],
			["CON LA R. Roedor.",
			"CON LA R. Temblar, tiritar.",
			"CON LA R. Viento fuerte, resentido y de corta duración."]),
		S = new constructquestion(
			"letraS",
			["stackoverflow","Sorbona","simple"],
			[0,0],
			["CON LA S. Comunidad salvadora de todo desarrollador informático.",
			"CON LA S. Termino con el que se conoce a la historica universidad de Paris.",
			"CON LA S. Se aplica a lo que no tiene complicación."]),
		T = new constructquestion(
			"letraT",
			["terminator","trecho","trece"],
			[0,0],
			["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.",
			"CON LA T. Tramo o trayecto o trozo de camino o de una longitud que se recorre.",
			"CON LA T. Número cardinal equivalente a 10 + 3."]),
		U = new constructquestion(
			"letraU",
			["unamuno","Uffizi","uderzo"],
			[0,0],
			["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914.",
			"CON LA U. Galeria publica de pintura italiana situada junto a la plaza de la Señoria en Florencia.",
			"CON LA U. Apellido del dibujante y guionista francés autor de la serie Asterix."]),
		V = new constructquestion(
			"letraV",
			["vikingos","vudu","verde"],
			[0,0],
			["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa.",
			"CON LA V. Practica religiosa que incluye el empleo del trance como medio de comunicacion con sus deidades.",
			"CON LA V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda."]),
		W = new constructquestion(
			"letraW",
			["sandwich","walkman","woofer"],
			[0,0],
			["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso.",
			"CON LA W. Casco con audifonos unido a un lector de cassettes o a un receptor de radio portatiles, que permite oir musica y desplazarse al mismo tiempo.",
			"CON LA W. Altavoz de graves."]),
		X = new constructquestion(
			"letraX",
			["botox","papiroflexia","exegesis"],
			[0,0],
			["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética.",
			"CONTIENE LA X. Tecnica de hacer figuras doblando convenientemente un trozo de papel.",
			"CONTIENE LA X. Explicación o interpretación particularmente de los libros de la Biblia"]),
		Y = new constructquestion(
			"letraY",
			["peyote","paraguayo","moncayo"],
			[0,0],
			["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos.",
			"CONTIENE LA Y. Natural del pais con capital en Asuncion.",
			"CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico."]),
		Z = new	constructquestion(
			"letraZ",
			["zen","zala","zoodiacal"],
			[0,0],
			["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional.",
			"CON LA Z. Rezo o accion de orar de los musulmanes.",
			"CON LA Z. Perteneciente o relativo al zoodíaco."]),
	
	];

}