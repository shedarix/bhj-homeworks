const holes = document.querySelectorAll('.hole');
const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');

let wins = 0;
let losses = 0;

function getHole(index) {
    return holes[index];
}

function updateStats() {
    winsElement.textContent = wins;
    lossesElement.textContent = losses;
}

// Функция для проверки победы или поражения
function checkGameOver() {
    if (wins >= 10) {
        alert('Вы победили!');
        resetGame();
    } else if (losses >= 5) {
        alert('Вы проиграли!');
        resetGame();
    }
}

function resetGame() {
    wins = 0;
    losses = 0;
    updateStats();
    holes.forEach(hole => {
        hole.classList.remove('hole_has-mole');
    });
}

function showMole() {
    const randomHole = Math.floor(Math.random() * holes.length);
    holes.forEach(hole => {
        hole.classList.remove('hole_has-mole');
    });
    getHole(randomHole).classList.add('hole_has-mole');
}

holes.forEach(hole => {
    hole.addEventListener('click', (event) => {
        if (hole.classList.contains('hole_has-mole')) {
            wins++;
        } else {
            losses++;
        }
        updateStats();
        checkGameOver();
        showMole();
    });
});

showMole();