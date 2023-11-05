$(document).ready(function () {
    // Manejador de eventos para los botones
    $(".boton").click(function () {
        // Obtener el índice del botón seleccionado
        let index = $(this).index();

        // Eliminar el contenido existente en el section
        $("section").empty();

        // Dependiendo del índice, cargar HTML y JavaScript
        switch (index) {
            case 0:
                //HTML y JavaScript 
                let contenidoEj17 = "<h2>Ejercicio 17 - Tabla de Multiplicar</h2>";
                $("section").append(contenidoEj17);
                //  JavaScript
                ejercicio17();
                break;
            case 1:
                // HTML y JavaScript 
                let contenidoEj18 = "<h2>Ejercicio 18 - Comparación de Números</h2>";
                $("section").append(contenidoEj18);
                // JavaScript 
                ejercicio18();
                break;
            case 2:
                //HTML y JavaScript 
                let contenidoEj19 = "<h2>Ejercicio 19 - Fecha de Nacimiento</h2>";
                $("section").append(contenidoEj19);
                //lógica JavaScript 
                ejercicio19();
                break;
            case 3:
                //HTML y JavaScript 
                let contenidoEj20 = "<h2>Ejercicio 20 - Clics</h2>";
                $("section").append(contenidoEj20);
                $("section").append('<h1 id="Click">JavaScript Click</h1>');
                $("section").append('<h1 id="DobleClick">JavaScript Doble Click</h1>');
                // JavaScript 
                ejercicio20();
                break;
            case 4:
                //  HTML y JavaScript
                let contenidoEj21 = '<h2>Ejercicio 21 - Cuadrados de colores</h2>' +
                    '<div id="container">' +
                    '<div class="cuadrito" id="cuadrito1"></div>' +
                    '<div class="cuadrito" id="cuadrito2"></div>' +
                    '<div class="cuadrito" id="cuadrito3"></div>' +
                    '<div class="cuadrito" id="cuadrito4"></div>' +
                    '<div class="cuadrito" id="cuadrito5"></div>' +
                    '</div>';
                $("section").append(contenidoEj21);
                // JavaScript 
                ejercicio21();
                break;
            case 5:
                //  HTML y JavaScript
                let contenidoEj3='<h2>Ejercicio 03 - DNI</h2>'+ '<br>'
                +'<input type="Text" id="dni" placeholder="Ingrese su número de Dni"></input>' + '<br>'
                +'<input type="Text" id="letra" placeholder="Ingrese la letra de su Dni"></input>' + '<br>'
                +'<button onclick="comprobarDni()">Comprobar</button>';
                $("section").append(contenidoEj3);
                // JavaScript 
                ejercicio3();
                break;
            default:
                // Contenido Predeterminado.
                let contenidopredt =
                    "<h2>¡Bienvenido a la práctica del tema 8 de Lenguaje de Marcas!</h2>"+
                    "<p>Haga clic en cualquier de los botones para visualizar los ejercicios propuestos.</p>";
                $("section").append(contenidopredt);
                break;
        }
    });

    //JavaScript Ejercicio 17
    function ejercicio17() {
        let cadena = prompt("Dame un número: ");

        if (cadena === null) {
            alert("Has Cancelado");
        } 
        else {
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
    //JavaScript Ejercicio 19
    function ejercicio19() {
        let fecha = prompt("Dame tu fecha de nacimiento: ", "00/00/0000");
        let fecha_actual = new Date();


        let calculo = fecha_actual.getFullYear() - fecha.split("/")[2];

        $("section").append("<p>Tu edad es: " + calculo + " años</p>");
    }
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
            alert(message);
        }
    }
    //JavaScript Ejercicio21 
    function ejercicio21() {
        // Obtener las referencias a los elementos de los cuadrados
        let cuadrito1 = document.getElementById('cuadrito1');
        let cuadrito2 = document.getElementById('cuadrito2');
        let cuadrito3 = document.getElementById('cuadrito3');
        let cuadrito4 = document.getElementById('cuadrito4');
        let cuadrito5 = document.getElementById('cuadrito5');

        // Establecer los colores predefinidos de los cuadrados
        cuadrito1.style.backgroundColor = 'LightSalmon';
        cuadrito2.style.backgroundColor = 'LemonChiffon';
        cuadrito3.style.backgroundColor = 'Lavender';
        cuadrito4.style.backgroundColor = 'LightCyan';
        cuadrito5.style.backgroundColor = 'HoneyDew';

        // Agregar el evento 'mouseover' a cada cuadrado
        cuadrito1.addEventListener('mouseover', cambiarColor);
        cuadrito2.addEventListener('mouseover', cambiarColor);
        cuadrito3.addEventListener('mouseover', cambiarColor);
        cuadrito4.addEventListener('mouseover', cambiarColor);
        cuadrito5.addEventListener('mouseover', cambiarColor);
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
    //JavaScript Ejercicio3
    function ejercicio3() {
        let dni = document.getElementById('dni').value;
        let letra = document.getElementById('letra').value.toUpperCase();
        button.addEventListener('onclick, comprobarDni');
        letra.addEventListener('onclick, comprobarDni');
    }

    function comprobarDni(event){
        if (dni<0 || dni > 99999999){
            alert('El número de Dni es incorrecto')
            return;
        }
        
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
        'K', 'E', 'T'];

        let  resto= dni % 23;
        let  letraCalcular= letras[resto];

        if(letra!== letraCalcular){
            alert('La letra que indicó es incorrecta.');
        }
        else {
            alert('El número del Dni y la letra son correctos');        
        }
    }
    
    
});
