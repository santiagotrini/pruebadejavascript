let title = document.querySelector('h1');
console.log(title);

let newElement = document.createElement('h3');
newElement.textContent = 'A mi me creo Esquivel';
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
  if (i++ & 1) { square.classList.add('black'); };
}
