fun = (a) => {
   return a;
}



const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const counterElement = document.getElementById('counter');
let counterValue = 0;

decrementButton.addEventListener('click', () => {
   counterValue--;
   updateCounter();
});

incrementButton.addEventListener('click', () => {
   counterValue++;
   updateCounter();
});

function updateCounter() {
   counterElement.textContent = counterValue;
}
