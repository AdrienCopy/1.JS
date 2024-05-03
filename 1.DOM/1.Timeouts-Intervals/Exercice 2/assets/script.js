let main = document.querySelector('main');
let section = document.createElement('section');
main.appendChild(section);
let h1 = document.createElement('h1');
h1.style.textAlign = 'center';
let p = document.createElement('p');
p.style.textAlign = 'center';
section.appendChild(h1);
section.appendChild(p);

let compteur = 0;

function minute() {
    h1.textContent = `Sur le site depuis ${compteur} minute${compteur < 2 ? ' ' : 's '}!`
    compteur++
}

minute()
setInterval(minute, 60000);

let compteurSecond = 0;

function second() {
    p.textContent = `Sur le site depuis ${compteurSecond} seconde${compteurSecond < 2 ? ' ' : 's '}!`
    compteurSecond++
}

second()
setInterval(second, 1000);
