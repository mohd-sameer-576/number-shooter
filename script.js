let circlecontainer = document.querySelector('.circlecontainer');
let targetNumber = document.querySelector('.targetNumber');
let scoreValue = document.querySelector('.scoreValue');
let gameEndPopup = document.querySelector('.gameEndPopup');
let finalScore = document.querySelector('.finalScore');
let gameStartPopup = document.querySelector('.gameStartPopup');
let startButton = document.querySelector('.startButton');
let time = document.querySelector('.time');
let numberOfCircles = 40;
let timer = 10;

startButton.addEventListener('click', () => {
    gameStartPopup.style.display = 'none';
    circlecontainer.style.display = 'flex';
    generateTargetNumber();

setInterval(() => {
    if (timer <= 0) {
        gameEndPopup.style.display = 'flex';
        finalScore.innerText = scoreValue.innerText;
        circlecontainer.style.display = 'none';
        return;
    }
    timer--;
    time.innerText = timer;
}, 1000);
function generateTargetNumber() {
    let randomNumber = Math.ceil(Math.random() * 10);
    targetNumber.innerText = randomNumber;
}
function generateCircles() {
    circlecontainer.innerHTML = ''; // Clear previous circles
    for (let i = 0; i < 40; i++) {
        let circle = document.createElement('div');
        circle.className = 'circle';
        let number = Math.ceil(Math.random() * 10);
        circle.innerText = number;
        circlecontainer.append(circle);
    }
}
generateTargetNumber();
generateCircles();
circlecontainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        let currentTarget = parseInt(targetNumber.innerText);
        let clickedNumber = parseInt(e.target.innerText);

        if (clickedNumber === currentTarget) {
            scoreValue.innerText = parseInt(scoreValue.innerText) + 1;
            generateTargetNumber();
            generateCircles();

        } else {
            alert('Wrong number! Try again.');
        }
    }
});
circlecontainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('circle')) {
        e.target.style.backgroundColor = 'lightblue';
    }
});
circlecontainer.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('circle')) {
        e.target.style.backgroundColor = '';
    }
});
});
document.querySelector('.restartButton').addEventListener('click', () => {
    location.reload(); // Reload the page to restart the game
});
