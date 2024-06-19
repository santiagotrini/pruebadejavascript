let title = document.querySelector('h1');
console.log(title);

let newElement = document.createElement('h3');
newElement.textContent = 'A mi me creo Regaldo';
console.log(newElement);
document.body.append(newElement);


// setTimeout(() => { newElement.remove() }, 2000) // no se si entra esto
setTimeout(() => { 
  newElement.classList.remove('blue');
  newElement.classList.add('green'); 
}, 2000) // no se si entra esto

setInterval(() => {
  newElement.classList.toggle('green');
}, 4000);

newElement.classList.add('blue');

// en JS las propiedades de CSS se escriben
// en camelCase, no en kebab-case
title.style.textDecoration = 'underline'; // 


// ciclo for ... of para loopear sobre una lista de elementos

let board = document.createElement('div');
board.classList.add('board');
document.body.append(board);

for (let i = 0; i < 49; i++) {
  let square = document.createElement('div');
  square.classList.add('square');
  board.append(square);
}

let squares = document.querySelectorAll('.square');
// aca tengo la lista de divs con clase square
console.log(squares);

let i = 0;

for (let square of squares) {
  //if (i++ & 1) { square.classList.add('black'); };
  if (i % 2 == 1) 
    square.classList.add('black');
  i++;
}


function handleSubmit(event) {
  event.preventDefault();
  // alert('enviaste el formulario!');
  let s = event.target.b1.value + ' ' + event.target.b2.value + ' ' + event.target.b3.value;
  let h1 = document.createElement('h1');
  h1.textContent = s;
  let h2 = document.createElement('h2');
  h2.textContent = calcularValorResistencia(event.target.b1.value, event.target.b2.value, event.target.b3.value);
  event.target.append(h1);
  event.target.append(h2);
  event.target.reset();
}

function calcularValorResistencia(b1, b2, b3) {
  let colores = {
    negro: 0, marron: 1, rojo: 2, naranja: 3, amarillo: 4,
    verde: 5, azul: 6, violeta: 7, gris: 8, blanco: 9
  };
  return (colores[b1]*10 + colores[b2]) * 10 ** colores[b3];
}

