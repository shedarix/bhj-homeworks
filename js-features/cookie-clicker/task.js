
const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');


let clicks = 0;                   
let lastClickTime = null;          
let clickSpeed = 0;               
let currentWidth = 200;           
let isIncreasing = true;           

function updateClicks() {
    clicks++;
    clickCounter.textContent = clicks;
}

function calculateClickSpeed(currentTime) {
    if (lastClickTime === null) {
        lastClickTime = currentTime;
        return;
    }

    const timeDifference = (currentTime - lastClickTime) / 1000; 
    clickSpeed = 1 / timeDifference;                           
    console.log(`Скорость клика: ${clickSpeed.toFixed(2)} кликов/сек`); 
    lastClickTime = currentTime;
}


function changeSize() {
    if (isIncreasing) {
        currentWidth += 10; 
    } else {
        currentWidth -= 10; 
    }
    cookie.style.width = `${currentWidth}px`;
    isIncreasing = !isIncreasing; 
}


cookie.addEventListener('click', (event) => {
    const now = new Date().getTime(); 
    updateClicks();
    calculateClickSpeed(now);
    changeSize();
});