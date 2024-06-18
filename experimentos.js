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