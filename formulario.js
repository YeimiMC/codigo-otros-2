var formulario = document.querySelector(".formulario");
//el formulario no se está obteniendo correctamente, para obtenerlo a partir de su clase 

formulario.onsubmit = function (e) {

  e.preventDefault();  //aquí había un error de sintáxis ya que la función correcta para prevenir el comportamiento predeterminado de un evento JS es e.preventDefault la cual es la forma correcta de invocar el método

  //Vamos a usar estas variables con el id que creamos en el html 

  //Colocándo las variables como elementos de entrada (Inputs) y valores 

  var nombreInput = formulario.elements.name;
  var edadInput = formulario.elements.age;
  var nacionalidadInput = formulario.elements.nationality;

  var nombre = nombreInput.value;
  var edad = edadInput.value;

  var i = nacionalidadInput.selectedIndex; //Para seleccionar dentro del indice y se cambiaron los nombres para mejor claridad en el código
  var nacionalidad = nacionalidadInput.options[i].value;

  //Para comprobar que se están obteniendo correctamente los valores hacemos un console.log que se podrá comentar posterior a ser comprobado.

  console.log(nombre, edad);
  console.log(nacionalidad);

  //Se realizarán los cambios como se pusieron las variables para agregar la clase error a cada uno
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  if (nombre.length > 0 //para verificar si la lomngitud es mayor que 0 
    && (edad >= 18 //si es menor o igual a 18
      && edad <= 120)) { //menor o igual a 120
    //si se cumplen las 3 con las condiciones entonces se agregará el invitado a la lista
    agregarInvitado(nombre, edad, nacionalidad);
  }

  //Estas variables se quedan así
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";

  //Vamos a llamar los elementos por su Id para obtener una referencia al elemento del DOM que nos va a permitir manipular el elemento y agregar elementos hijos
  var corteLinea = document.createElement("br"); //El salto de línea se queda así
  document.getElementById("lista-de-invitados").appendChild(corteLinea);
  document.getElementById("lista-de-invitados").appendChild(botonBorrar); //Se agrega el botón de borrar a la lista de invitados



  //Esta función nos sirve tal cual está
  function agregarInvitado(nombre, edad, nacionalidad) {

    if (nacionalidad === "ar") {
      nacionalidad = "Argentina";
    }
    else if (nacionalidad === "mx") {
      nacionalidad = "Mexicana";
    }
    else if (nacionalidad === "vnzl") {
      nacionalidad = "Venezolana";
    }
    else if (nacionalidad === "per") {
      nacionalidad = "Peruana";
    }

    var lista = document.getElementById("lista-de-invitados");

    var elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista"); //aquí hay otro error ya que el método correcto para agregar una clase a un elemento es classList.add() no classList.added()

    lista.appendChild(elementoLista);

    /*Ya contamos con una función para crear elementos de la lista de invitados y esta no aplica:
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = "Nombre: "
    inputNombre.value = nombre 
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
    */

    //Esta funcion para crear elementos de la lista de invitados se queda así
    function crearElemento(descripcion, valor) {
      var spanNombre = document.createElement("span");
      var inputNombre = document.createElement("input");
      var espacio = document.createElement("br");
      spanNombre.textContent = descripcion + ": ";
      inputNombre.value = valor;
      elementoLista.appendChild(spanNombre);
      elementoLista.appendChild(inputNombre);
      elementoLista.appendChild(espacio);
    }

    crearElemento("Nombre", nombre);
    crearElemento("Edad", edad);
    crearElemento("Nacionalidad", nacionalidad);


    var botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";
    botonBorrar.id = "boton-borrar";

    var corteLinea = document.createElement("br");
    elementoLista.appendChild(corteLinea);
    elementoLista.appendChild(botonBorrar);


    /*De este botón podemos cambiar el método para que en lugar de sólo ocultar el elemento, lo borre de forma permanente de la lista de invitados (no es necesario pero es una opción):
     botonBorrar.onclick = function() {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
      }
    */

    //Ejemplo
    botonBorrar.onclick = function () {
      elementoLista.remove();
    }
  }
}