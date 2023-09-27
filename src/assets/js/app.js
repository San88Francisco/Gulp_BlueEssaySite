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





const block = document.getElementById("block");

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = 10;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const angle = Math.atan2(deltaY, deltaX);

    const translateX = offsetX * Math.cos(angle);
    const translateY = offsetX * Math.sin(angle);

    block.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
