//Variable global para contar el numero de cambios realizados
var contadorCambios = 0;
//Timer para iniciar la funcion de voltear cartas despues de 3 segundos
window.setTimeout(voltearCartas,3000);

//Arreglo con imagenes
var lista=[
"Cartas/Ac.jpg","Cartas/2c.jpg","Cartas/3c.jpg","Cartas/4c.jpg","Cartas/5c.jpg","Cartas/6c.jpg","Cartas/7c.jpg","Cartas/8c.jpg","Cartas/9c.jpg","Cartas/Dc.jpg","Cartas/Jc.jpg","Cartas/Qc.jpg","Cartas/Kc.jpg",
"Cartas/Ae.jpg","Cartas/2e.jpg","Cartas/3e.jpg","Cartas/4e.jpg","Cartas/5e.jpg","Cartas/6e.jpg","Cartas/7e.jpg","Cartas/8e.jpg","Cartas/9e.jpg","Cartas/De.jpg","Cartas/Je.jpg","Cartas/Qe.jpg","Cartas/Ke.jpg",
"Cartas/Ad.jpg","Cartas/2d.jpg","Cartas/3d.jpg","Cartas/4d.jpg","Cartas/5d.jpg","Cartas/6d.jpg","Cartas/7d.jpg","Cartas/8d.jpg","Cartas/9d.jpg","Cartas/Dd.jpg","Cartas/Jd.jpg","Cartas/Qd.jpg","Cartas/Kd.jpg",
"Cartas/At.jpg","Cartas/2t.jpg","Cartas/3t.jpg","Cartas/4t.jpg","Cartas/5t.jpg","Cartas/6t.jpg","Cartas/7t.jpg","Cartas/8t.jpg","Cartas/9t.jpg","Cartas/Dt.jpg","Cartas/Jt.jpg","Cartas/Qt.jpg","Cartas/Kt.jpg"
];

//Funcion para generar numeros aleatorios
function numeroAleatorios(min,max)
{
	return Math.round(Math.random()*(max-min)+min);		
}

//Funcion para cambiar el mazo
function CambiarMazo()
{
	let ganancia;
	const input = document.getElementById('money-input').value;
	let inputElement = parseFloat(input.replace(/[$,]/g, ''));
	const valorInput = inputElement;
	if(valorInput >= 10000)
	{
		resta = 1000;
	}
	else
	{
		resta = 10;
	}

	ganancia = valorInput-resta;
	// volver a formatear el resultado como una cadena de moneda
	let resultadoFormateado = '$ ' + ganancia.toLocaleString();
	// actualizar el valor del input con el resultado
	document.getElementById("money-input").value = resultadoFormateado;
	// Obtener los estados de los checkboxes
	const checkbox1 = document.getElementById("checkCarta1");
	const checkbox2 = document.getElementById("checkCarta2");
	const checkbox3 = document.getElementById("checkCarta3");
	const checkbox4 = document.getElementById("checkCarta4");
	const checkbox5 = document.getElementById("checkCarta5");

	// Verificar si todos los checkboxes están desactivados
	if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked && !checkbox4.checked && !checkbox5.checked) {
		// Cambiar todas las cartas
		voltearCartas()
	}
	else
	{
		//LLamar esta funcion si algun checkbox esta activado
		evaluarCheckbox() 
	}
	contadorCambios++;
	console.log(contadorCambios);
	var boton = document.getElementById("Cambio");
	if (contadorCambios => 1)
	{
		boton.disabled = true;
	}
}

//Funcion para verificar el estado de los checkbox
function evaluarCheckbox() 
{
	// Recorrer cada uno de los checkbox
	for (var i = 1; i <= 5; i++) 
	{
	  //Obtener id del checkbox dependiendo el numero de la iteracion
	  var checkbox = document.getElementById("checkCarta" + i);
	  //Obtener id de la imagen dependiendo el numero de la iteracion
	  var contenedor = ("ii" + i)
	  //Evaluacion sí el checkbox esta activado
	  if (checkbox.checked) 
	  {
		comprobar(contenedor);
	  }
	  else
	  {
		
	  }
	}
}

//Funcion para no repetir cartas
function comprobar(contenedor)
{
	//Obtener Direccion de la imagen = http://127.0.0.1:5500/8t.jpg
	urlcarta1 = document.getElementById("ii1").src
	urlcarta2 = document.getElementById("ii2").src
	urlcarta3 = document.getElementById("ii3").src
	urlcarta4 = document.getElementById("ii4").src
	urlcarta5 = document.getElementById("ii5").src
	//Separar direccion y obtener el nombre de la imagen solamente "8t.jpg"
	var carta1 = urlcarta1.split("/").pop();
	var carta2 = urlcarta2.split("/").pop();
	var carta3 = urlcarta3.split("/").pop();
	var carta4 = urlcarta4.split("/").pop();
	var carta5 = urlcarta5.split("/").pop();
	//Generar nueva carta para cambiar
  	nuevacarta = lista[numeroAleatorios(0,50)]

	//Evaluar para que no se repita la carta
	  switch(nuevacarta)
	  {
		case 'carta1':
			comprobar(contenedor);
		case 'carta2':
			comprobar(contenedor);
		case 'carta3':
			comprobar(contenedor);
		case 'carta4':
			comprobar(contenedor);
		case 'carta5':
			comprobar(contenedor);
		default:
			document.getElementById(contenedor).src = nuevacarta
	  }
}

//Funcion que activa el checkbox al hacerle click sobre la imagen de la carta
function activarcheck(num)
{
	var imagen = document.getElementById("ii" + num);

	if (imagen.classList.contains("clicked")) 
	{
		imagen.classList.remove("clicked");
		document.getElementById("checkCarta" + num).checked = false;
	} 
	else 
	{
		imagen.classList.add("clicked");
		document.getElementById("checkCarta" + num).checked = true;
	}
}

//Funcion para Evaluar la Jugadas
function EvaluarJugada()
{
	// Verifica qué tipo de mano es
	contadorCambios = 0;
	console.log(contadorCambios);
	var boton = document.getElementById("Cambio");
	boton.disabled = false;

	let jugada;
	let ganancia;
	const input = document.getElementById('money-input').value;
	let inputElement = parseFloat(input.replace(/[$,]/g, ''));
	const valorInput = inputElement;

	if(valorInput >= 10000)
	{
		resta = 1000;
	}
	else
	{
		resta = 10;
	}

	//Obtener todas las imágenes por su ID
	var images = document.querySelectorAll("img");

	// Crear un arreglo vacío para almacenar los nombres
	var cartas = [];

	// Iterar sobre cada imagen y obtener su nombre sin la extensión ".jpg"
	images.forEach(function(image) 
	{
		var nombre = image.src.split('/').pop().split('.')[0];
		cartas.push(nombre);
	});

	// El arreglo 'Cartas' ahora contiene los nombres de las imágenes sin la extensión ".jpg"
	console.log(cartas);

	// Separa los valores de las cartas y los palos
	const valores = cartas.map(carta => carta.charAt(0));
	const palos = cartas.map(carta => carta.charAt(1));

	//Variable de referencia para ordenar los valores en la siguiente funcion flecha
	const valoresOrdenados = '23456789DJQKA';

	//Ordenar los valores de las cartas de menos a mayor
	valores.sort((a,b) => {
		return valoresOrdenados.indexOf(a) - valoresOrdenados.indexOf(b);
	});
	console.log(valores)

	//Verifica si hay escalera funcion
	var esEscalera;
	if (valores.every((valor, index) => {
		if (index === 0) {
		  return true;
		} else {
		  const valorAnterior = valores[index - 1];
		  return valoresOrdenados.indexOf(valor) === valoresOrdenados.indexOf(valorAnterior) + 1;
		}
	  })) {
		esEscalera = true;
	  } else {
		esEscalera = false;
	  }
 
	//Verifica si hay color
	const esColor = palos.every(palo => palo === palos[0]);
	console.log(esColor)

	//Verifica la jugada Flor Imperial
	if (esEscalera && esColor && valores[0] === 'D') 
	{
		jugada = "Flor imerial"
		Ganaste(jugada)
		ganancia = valorInput*20;

	}
	else if (esEscalera && esColor) {
		jugada = "Escalera de color"
		Ganaste(jugada)
		ganancia = valorInput*15;
	}
	else if (esColor) {
		jugada = "Color"
		Ganaste(jugada)
		ganancia = valorInput*5;
	} 
	else if (esEscalera == true) {
		jugada = "Escalera"
		Ganaste(jugada)
		ganancia = valorInput*2;

	} else if (valores[0] === valores[3] || valores[1] === valores[4]) {
		jugada = "Poker"
		Ganaste(jugada)
		ganancia = valorInput*9;
	} 
	else if ((valores[0] === valores[2] && valores[3] === valores[4]) || (valores[0] === valores[1] && valores[2] === valores[4])) {
		jugada = "Full House"
		Ganaste(jugada)
		ganancia = valorInput*7;
	} 
	else if (valores[0] === valores[2] || valores[1] === valores[3] || valores[2] === valores[4]) {
		jugada = "Tercia"
		Ganaste(jugada)
		ganancia = valorInput*3;
	} 
	else if ((valores[0] === valores[1] && valores[2] === valores[3]) || (valores[0] === valores[1] && valores[3] === valores[4]) || (valores[1] === valores[2] && valores[3] === valores[4])) {
		jugada = "Dos pares"
		Ganaste(jugada)
		ganancia = valorInput*4;
	} 
	else if (valores[0] === valores[1] || valores[1] === valores[2] || valores[2] === valores[3] || valores[3] === valores[4]) {
		jugada = "Par"
		Ganaste(jugada)
		ganancia = valorInput*2;
	} 
	else {
		perdio = "Carta Alta"
		Perdiste(perdio)
		ganancia = valorInput-20;
	}

	if (jugada === "Carta Alta")
	{
		
		// volver a formatear el resultado como una cadena de moneda
		let resultadoFormateado = '$ ' + ganancia.toLocaleString();
    
		// actualizar el valor del input con el resultado
		document.getElementById("money-input").value = resultadoFormateado;
	}
	else
	{
		// volver a formatear el resultado como una cadena de moneda
		let resultadoFormateado = '$ ' + ganancia.toLocaleString();
    
		// actualizar el valor del input con el resultado
		document.getElementById("money-input").value = resultadoFormateado;
	}

	window.setTimeout(voltearCartas,2500);

}

//Funcion de Alerta Ganadora
function Ganaste(jugada)
{
	Swal.fire({
		title: 'Haz ganado!!',
		text: 'Excelente jugada con ' + jugada, 
		showConfirmButton: false,
		timer: 2000
	  })
}
//Funcion de Alerta Perdedora
function Perdiste(perdio)

{
	Swal.fire({
		Height:200,
		Width:30,
		title: 'Haz perdido :c',
		text: 'Perdiste por ' + perdio, 
		text: '-20 creditos ',
		showConfirmButton: false,
		timer: 2000
	  })
}

//Funcion de Alerta Te quedaste pobre
function sinDinero()
{
	Swal.fire({
		Icon:'error',
		Height:200,
		Width:30,
		title: '!Te quedaste sin creditos!',
		text: 'Ingresa mas para seguir jugando',
		Intput: '', 
		showConfirmButton: false,
		timer: 2000
	  })
}

function voltearCartas()
{
	comprobar("ii1");
	comprobar("ii2");
	comprobar("ii3");
	comprobar("ii4");
	comprobar("ii5");
}
//Funcion para comenzar a jugar
function jugar()
{
	const game = document.getElementById("money-input").value;
	//Se evalua el puntaje para saber si se puede seguir jugando
	if (game == "$ 0")
	{
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Volviendo a iniciar una nueva partida :c Haz perdido todos los creditos',
		  })
		reiniciarPagina(game);
	}
	else
	{
		EvaluarJugada();
	}
}

//Funcion para Reiniciar la Partida
function nuevaPartida()
{
	const game = document.getElementById("money-input").value;
	Swal.fire({
		title: 'Comenzando Nueva Partida...',
		text: 'Suerte!',
	  })
	reiniciarPagina(game);
}

//Funcion para reiniciar la pagina
function reiniciarPagina(game) {
	let inputElement = parseFloat(game.replace(/[$,]/g, ''));
	var valorInput = inputElement;
	valorInput = 0;
	ganancia = valorInput + 100;
	// volver a formatear el resultado como una cadena de moneda
	let resultadoFormateado = '$ ' + ganancia.toLocaleString();
    
	// actualizar el valor del input con el resultado
	document.getElementById("money-input").value = resultadoFormateado;
	
	document.getElementById("ii1").src = "Cartas/trasera.jpg";
	document.getElementById("ii2").src = "Cartas/trasera.jpg";
	document.getElementById("ii3").src = "Cartas/trasera.jpg";
	document.getElementById("ii4").src = "Cartas/trasera.jpg";
	document.getElementById("ii5").src = "Cartas/trasera.jpg";
	window.setTimeout(voltearCartas,5000);
}

//Mostrar reglas
function mostrarMensaje() {
    var reglas = "1 Par= Gana la apuesta. 2 Pares= Gana el doble de la apuesta. Tercia= Gana el triple de la apuesta. Escalera = Gana 4 veces la apuesta. Flor = Gana 5 veces la apuesta. Full house tercia + par = Gana 6 veces la apuesta. Poker = Gana 10 veces la apuesta. Flor + Escalera = Gana 15 veces la apuesta."; // Aquí puedes poner las reglas del juego
	var divReglas = document.createElement("div");
	divReglas.innerHTML = reglas;
	divReglas.style.position = "fixed";
	divReglas.style.bottom = "0";
	divReglas.style.right = "0";
	divReglas.style.backgroundColor = "white";
	divReglas.style.padding = "10px";
	divReglas.style.border = "1px solid black";
	divReglas.style.borderRadius = "5px";
	document.body.appendChild(divReglas);

	var boton = document.getElementById("btnReglas");
    boton.addEventListener("mouseout", function() {
        document.body.removeChild(divReglas);
    });
}