var cajas = document.getElementsByTagName('div');
// var cajas = document.getElementsByClassName('caja');
// cajas[0].innerHTML = 'Hola Mundo';
// cajas[1].textContent = 'Adios';
// cajas[1].style.background = 'red';
// cajas[1].style.color = 'white';
// cajas[1].style.padding = '20px';

// Agregando nuevos nodos
var newNode = document.createElement('div');
var newTextNode = document.createTextNode('Nuevo nodo');



// Otra forma de editar atributos
var newNode2 = document.createElement('div');
newNode2.id = 'caja5';
newNode2.textContent = 'Otro Nuevo nodo';
newNode2.setAttribute('class','caja');
// document.write(newNode2.parentNode); // null ?? 


newNode.appendChild(newTextNode); // le metemos el contenido al  nodo
newNode.setAttribute('class','caja');


// Añado estilos
newNode.style.background = 'red';
newNode.style.color = 'white';

// Los meto en el documento
var contenedor = document.getElementById('contenedor');


var parent = cajas[0].parentNode;
//parent.insertBefore(newNode, cajas[0]); // inserta antes del primer nodo
contenedor.appendChild(newNode);
contenedor.appendChild(newNode2); //agrego otro nodo
//parent.replaceChild(newNode, newNode2); // reemplaza el primer nodo por el nuevo
parent.removeChild(cajas[3]); // elimina el nodo 3



