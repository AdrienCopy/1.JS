let container = document.getElementById('container');
let circles = document.querySelectorAll('.circle');
let divScore = document.getElementById('score');
divScore.textContent = 'Score : 0';
let tab = [];
let score = 0;

circles.forEach(circle => {
            tab.push(circle);
});

function resetColors() {
    tab.forEach(circle => {
        circle.style.backgroundColor = "white";
    });
}

function color () {
    resetColors();
    let randomIndex = Math.floor(Math.random() * tab.length);
    let randomCircle = tab[randomIndex];
    randomCircle.style.backgroundColor = "red";

    randomCircle.addEventListener('click', () => {
        if (randomCircle.style.backgroundColor === "red") {
            score ++;
            console.log(score);
            divScore.textContent = (`Score : ${score}`);
        }
    });
    console.log(score);
}

color ();
setInterval(color, 1000);

