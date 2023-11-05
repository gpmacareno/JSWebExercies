$(document).ready(function () {
  // Manejador de eventos para los botones
  $(".boton").click(function () {
    // Obtener el índice del botón seleccionado
    let index = $(this).index();

    // Eliminar el contenido existente en el section
    $("section").empty();

    // Dependiendo del índice, cargar HTML y JavaScript
    switch (index) {
      //------------------------------------------------------------------------------------------------------------------------------------------------//
      case 0:
        //HTML y JavaScript
        let contenidoEj17 = "<h2>Ejercicio 17 - Tabla de Multiplicar</h2>";
        $("section").append(contenidoEj17);
        //  JavaScript
        ejercicio17();
        break;
      //------------------------------------------------------------------------------------------------------------------------------------------------//

      case 1:
        // HTML y JavaScript
        let contenidoEj18 = "<h2>Ejercicio 18 - Comparación de Números</h2>";
        $("section").append(contenidoEj18);
        // JavaScript
        ejercicio18();
        break;
      //------------------------------------------------------------------------------------------------------------------------------------------------//

      case 2:
        //HTML y JavaScript
        let contenidoEj19 = "<h2>Ejercicio 19 - Fecha de Nacimiento</h2>";
        $("section").append(contenidoEj19);
        //JavaScript
        ejercicio19();
        break;
      //------------------------------------------------------------------------------------------------------------------------------------------------//

      case 3:
        //HTML y JavaScript
        let contenidoEj20 = "<h2>Ejercicio 20 - Clics</h2>";
        $("section").append(contenidoEj20);
        $("section").append('<h1 id="Click">JavaScript Click</h1>');
        $("section").append('<h1 id="DobleClick">JavaScript Doble Click</h1>');
        // JavaScript
        ejercicio20();
        break;
      //------------------------------------------------------------------------------------------------------------------------------------------------//

      case 4:
        //  HTML y JavaScript
        let contenidoEj21 =
          "<h2>Ejercicio 21 - Cuadrados de colores</h2>" +
          '<div id="container">' +
          '<div class="cuadrito" id="cuadrito1"></div>' +
          '<div class="cuadrito" id="cuadrito2"></div>' +
          '<div class="cuadrito" id="cuadrito3"></div>' +
          '<div class="cuadrito" id="cuadrito4"></div>' +
          '<div class="cuadrito" id="cuadrito5"></div>' +
          "</div>";
        $("section").append(contenidoEj21);
        // JavaScript
        ejercicio21();
        break;
      //------------------------------------------------------------------------------------------------------------------------------------------------//

      // HTML y JavaScript

      case 5:
        let contenidoEj3 =
          "<h2>Ejercicio 03 - DNI</h2>" +
          "<br>" +
          '<input type="number" id="dni" placeholder="Ingrese su número de DNI"></input>' +
          "<br>" +
          '<input type="Text" id="letra" placeholder="Ingrese la letra de su DNI"></input>' +
          "<br>" +
          '<button id="comprobarboton">Comprobar</button>';
        $("section").append(contenidoEj3);
        //  JavaScript
        ejercicio3();
        break;
      //------------------------------------------------------------------------------------------------------------------------------------------------//

      case 6:
        //   HTML y JavaScript

        let contenidoEj6 =
          "<h2>Ejercicio 6 - Simulación de lanzamiento de dos dados</h2>" +
          '<button id="calcularEj6">Calcular</button>' +
          '<ul id="resultados"></ul>';
        $("section").append(contenidoEj6);

        //  JavaScript
        $("#calcularEj6").click(function () {
          ejercicio6();
        });
        break;
      //------------------------------------------------------------------------------------------------------------------------------------------------//

      case 7:
        //  HTML y JavaScript

        let contenidoEj8 =
          "<h2>Ejercicio 8 - Verificador de Palíndromos</h2>" +
          '<label for="inputTexto">Ingrese un texto:</label>' +
          '<input type="text" id="inputTexto">' +
          '<button onclick="verificarPalindromo()">Verificar</button>';
        $("section").append(contenidoEj8);
        break;
      //------------------------------------------------------------------------------------------------------------------------------------------------//

      //  HTML y JavaScript

      case 8:
        let contenidoEj10 =
          "<h2 id='seguridad'>Ejercicio 10 - Mostrar Capital</h2>" +
          "<h3>Pasa el ratón por encima del país para ver su capital</h3>" +
          '<h1><span id="pais-espana"><img class="bandera" src="imagenes/espana.png" alt="Bandera de España"></span></h1>' +
          '<h1><span id="pais-portugal"><img class="bandera"  src="imagenes/portugal.png" alt="Bandera de Portugal"></span></h1>' +
          '<h1><span id="pais-francia"><img class="bandera"  src="imagenes/francia.png" alt="Bandera de Francia"></span></h1>' +
          '<h1><span id="pais-italia"><img class="bandera"  src="imagenes/italia.png" alt="Bandera de Italia"></span></h1>';
        $("section").append(contenidoEj10);
        //JavaScript
        ejercicio10();
        break;
      //------------------------------------------------------------------------------------------------------------------------------------------------//

      //  HTML y JavaScript

      case 9:
        let contenidoEj2 = "<h2>Ejercicio 2 - ¡Saludo!</h2>";
        $("section").append(contenidoEj2);
        // JavaScript
        ejercicio2();
        break;

      //------------------------------------------------------------------------------------------------------------------------------------------------//
      default:
        // Contenido Predeterminado.
        let contenidopredt =
          "<h2>¡Bienvenido a la práctica del tema 8 de Lenguaje de Marcas!</h2>" +
          "<p>Haga clic en cualquier de los botones para visualizar los ejercicios propuestos.</p>";
        $("section").append(contenidopredt);
        break;
    }
  });

  //------------------------------------------------------------------------------------------------------------------------------------------------//

  //JavaScript Ejercicio 17
  function ejercicio17() {
    let cadena = prompt("Dame un número: ");

    if (cadena === null) {
      alertify.alert("Has Cancelado").set({transition:'fade'}).show();
    } else {
      function multiplicacion(j) {
        let result = "";
        for (i = 0; i <= 10; i++) {
          result += "<ul>" + j + "x " + i + " = " + j * i + "</ul>";
        }
        $("section").append(
          "<h2>Tabla de multiplicar del " + cadena + "</h2>" + result
        );
      }
      multiplicacion(cadena);
    }
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------//

  //JavaScript Ejercicio 18
  function ejercicio18() {
    let num1 = prompt("Dame un número: ");
    let num2 = prompt("Dame otro número: ");

    if (num1 === num2) {
      $("section").append("<p>Son iguales</p>");
    } else if (num1 !== num2) {
      $("section").append("<p>Son distintos</p>");
    }
  }
  //------------------------------------------------------------------------------------------------------------------------------------------------//

  //JavaScript Ejercicio 19
  function ejercicio19() {
    let fecha = prompt("Dame tu fecha de nacimiento: ", "00/00/0000");
    let fecha_actual = new Date();

    let calculo = fecha_actual.getFullYear() - fecha.split("/")[2];

    $("section").append("<p>Tu edad es: " + calculo + " años</p>");
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------//

  //JavaScript Ejercicio20
  function ejercicio20() {
    let clic = document.getElementById("Click");
    let dobleclic = document.getElementById("DobleClick");

    clic.addEventListener("click", function () {
      showAlert("Has hecho click");
    });

    dobleclic.addEventListener("dblclick", function () {
      showAlert("Has hecho doble click");
    });

    function showAlert(message) {
      alertify.alert(message).set({transition:'slide'}).show();
    }
  }
  //------------------------------------------------------------------------------------------------------------------------------------------------//

  //JavaScript Ejercicio21
  function ejercicio21() {
    // Obtener las referencias a los elementos de los cuadrados
    let cuadrito1 = document.getElementById("cuadrito1");
    let cuadrito2 = document.getElementById("cuadrito2");
    let cuadrito3 = document.getElementById("cuadrito3");
    let cuadrito4 = document.getElementById("cuadrito4");
    let cuadrito5 = document.getElementById("cuadrito5");

    // Establecer los colores predefinidos de los cuadrados
    cuadrito1.style.backgroundColor = "LightSalmon";
    cuadrito2.style.backgroundColor = "LemonChiffon";
    cuadrito3.style.backgroundColor = "Lavender";
    cuadrito4.style.backgroundColor = "LightCyan";
    cuadrito5.style.backgroundColor = "HoneyDew";

    // Agregar el evento 'mouseover' a cada cuadrado
    cuadrito1.addEventListener("mouseover", cambiarColor);
    cuadrito2.addEventListener("mouseover", cambiarColor);
    cuadrito3.addEventListener("mouseover", cambiarColor);
    cuadrito4.addEventListener("mouseover", cambiarColor);
    cuadrito5.addEventListener("mouseover", cambiarColor);
  }

  // Función para cambiar el color de fondo al pasar el mouse sobre el cuadrado
  function cambiarColor(event) {
    let cuadrito = event.target;
    let color = cuadrito.style.backgroundColor;

    // Cambiar el color de fondo del cuadrado
    cuadrito.style.backgroundColor = color;

    // Cambiar el color de fondo del documento
    document.body.style.backgroundColor = color;
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------//

  //JavaScript Ejercicio3

  //Obtenemos id y añadimos el evento.
  function ejercicio3() {
    let button = document.getElementById("comprobarboton");
    button.addEventListener("click", comprobarDni);
  }
  // Obtenemos el valor
  function comprobarDni(event) {
    let dni = document.getElementById("dni").value;
    let letra = document.getElementById("letra").value.toUpperCase();
    // Comprobación de errores para dni númerico.
    if (dni < 0 || dni > 99999999) {
      alertify.alert("El número de DNI es incorrecto").set({transition:'slide'}).show();
      return;
    }
    // Array de letras
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let resto = dni % 23;
    let letraCalcular = letras[resto];
    //Comprobación.
    if (letra !== letraCalcular) {
      alertify.alert("La letra que indicó es incorrecta.").set({transition:'slide'}).show();
    } else {
      alertify.alert("El número del DNI y la letra son correctos").set({transition:'slide'}).show();
      alertify.success("Ha tenido éxito");
    }
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  // JavaScript Ejercicio 6
  function ejercicio6() {
    $("ul#resultados").empty(); // Limpiar resultados anteriores
    // Definimos letiables
    let tiradas = 36000;
    let resultados = [];
    //Bucle que recorra las 36000 tiradas
    for (let i = 0; i < tiradas; i++) {
      let dado1 = Math.floor(Math.random() * 6) + 1;
      let dado2 = Math.floor(Math.random() * 6) + 1;
      //Sumamos los resultados
      let suma = dado1 + dado2;
      //Guardamos en una letiable
      resultados.push(suma);
    }
    //Creamos una lista con los resultados
    let listaResultados = document.createElement("ul");

    for (let j = 0; j < resultados.length; j++) {
      let tirada = j + 1;
      let suma = resultados[j];

      let resultadoItem = document.createElement("li");
      resultadoItem.textContent = "Tirada " + tirada + ": " + suma;
      listaResultados.appendChild(resultadoItem);
    }
    //Boramos el section para asegurarnos evitar errores
    let section = $("section");
    section.empty(); // Limpiar contenido existente en el section
    // Creamos un nuevo contenido con un margin top exagerado para evitar que se salga de la pantalla.
    let contenidoEj6 =
      '<div style="margin-top: 648000px;">' +
      "<h2>Ejercicio 6 - Simulación de lanzamiento de dos dados</h2>" +
      '<button id="calcularEj6">Calcular</button>' +
      '<ul id="resultados"></ul>' +
      "</div>";
    // Agregar la lista de resultados al elemento <section>.
    section.append(contenidoEj6);
    section.append(listaResultados);
    //Volvemos a darle funciona al boton.
    $("#calcularEj6").click(function () {
      ejercicio6();
    });
  }
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// JavaScript Ejercicio 8

// Función para eliminar los espacios en blanco de una cadena
function eliminarEspacios(cadena) {
  return cadena.replace(/\s/g, "");
}

// Función para verificar si una cadena es un palíndromo
function esPalindromo(cadena) {
  cadena = eliminarEspacios(cadena).toLowerCase(); // Elimina espacios y convierte a minúsculas
  return cadena == cadena.split("").reverse().join(""); // Compara la cadena con su versión invertida
}

// Función que se activa en respuesta a un evento de clic para verificar un palíndromo
function verificarPalindromo() {
  let texto = document.getElementById("inputTexto").value; // Obtiene el valor de la entrada de texto

  if (esPalindromo(texto)) {
    alertify.alert("El texto es un palíndromo.");
  } else {
    alertify.alert("El texto no es un palíndromo.");
  }
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// JavaScript Ejercicio 10
function ejercicio10() {
  // Obtener elementos de los países y las capitales
  let paisEspana = document.getElementById("pais-espana");
  let paisPortugal = document.getElementById("pais-portugal");
  let paisFrancia = document.getElementById("pais-francia");
  let paisItalia = document.getElementById("pais-italia");

  let capitalEspaña = "Madrid";
  let capitalPortugal = "Lisboa";
  let capitalFrancia = "París";
  let capitalItalia = "Roma";

  // Agregar eventos de mouseover a los países
  paisEspana.addEventListener("mouseover", function () {
    mostrarCapital(capitalEspaña);
  });
  paisPortugal.addEventListener("mouseover", function () {
    mostrarCapital(capitalPortugal);
  });
  paisFrancia.addEventListener("mouseover", function () {
    mostrarCapital(capitalFrancia);
  });
  paisItalia.addEventListener("mouseover", function () {
    mostrarCapital(capitalItalia);
  });

  // Función para mostrar la capital correspondiente al país
  function mostrarCapital(capital) {
    alertify.alert('La capital es:'+capital).set({transition:'flipx'}).show();
  }
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// JavaScript Ejercicio 2

function ejercicio2() {
  // Solicitar al usuario que ingrese su nombre
  let nombre = prompt("Ingrese su nombre:");

  // Inicializar variables para el saludo y la hora del sistema
  let saludo = "";
  let horaSistema = new Date().getHours();

  // Determinar el saludo según la hora del día
  if (horaSistema >= 5 && horaSistema < 12) {
    saludo = "Buenos días";
  } else if (horaSistema >= 12 && horaSistema < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  // Crear el contenido del saludo con formato HTML
  let contenidoSaludo =
    "<h3 style='font-family: Comic Sans MS; font-size: 40px;'>¡" +
    saludo +
    ", " +
    nombre +
    "!</h3>";

  // Agregar el contenido del saludo a la sección HTML
  $("section").append(contenidoSaludo);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
