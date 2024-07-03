document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;

    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');

    incrementBtn.addEventListener('click', () => {
        counter++;
        updateCounterDisplay();
    });

    decrementBtn.addEventListener('click', () => {
        counter--;
        updateCounterDisplay();
    });

    function updateCounterDisplay() {
        counterDisplay.textContent = counter;
    }
});
document.body.appendChild.counter