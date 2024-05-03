let main = document.querySelector('main');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');


function calc() {
    let myDate = new Date('1987-06-10');
    let toDay = new Date();
    let timeDiffMilliseconds = toDay.getTime() - myDate.getTime();
    let timeDiffMinutes = timeDiffMilliseconds / (1000 * 60);
    let minutesInYear = 60 * 24 * 365;
    let years = timeDiffMinutes / minutesInYear;
    let day = years * 365;
    h1.textContent = `nombre d'années : ` + years;
    h2.textContent = 'nombre de jours : ' + day;
    main.appendChild(h1);
    main.appendChild(h2);
}

window.onload=function() {
    calc();
    setInterval(calc, 1000);
}