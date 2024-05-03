// premiere partie

let main = document.querySelector('main');
let section1 = document.createElement('section');
let H2A = document.createElement('h2');

let toDay = new Date();
let heures = 80000;
let tempsMillisecondes = heures * 3600 * 1000;
let add = new Date(toDay.getTime() + tempsMillisecondes);

let jour = add.getDate();
let mois = add.getMonth() + 1; 
let annee = add.getFullYear();

let date = `${jour}/${mois}/${annee}`;

H2A.textContent = 'Dans 80 000 jours, la date : ' + date;
main.appendChild(section1);
section1.appendChild(H2A);

// deuxieme partie

let section2 = document.createElement('section');
let input = document.createElement('input');
let p1 = document.createElement('p');
p1.textContent = `Entre le nombre d'heure`;
let p2 = document.createElement('p');

input.setAttribute('id', 'input');

function calc () {
    input.addEventListener('keyup', function() {
        let time = parseInt(input.value)
            
        let TMS = time * 3600 * 1000;
        let addition = new Date(toDay.getTime() + TMS);
        
        let secondes = addition.getMinutes()
        let minutes = addition.getMinutes();
        let heures = addition.getHours();
        let jours = addition.getDate();
        let moiss = addition.getMonth() +1;
        let annees = addition.getFullYear();
        
        let result = `${jours}/${moiss}/${annees}, ${heures}h${minutes} et ${secondes}s`;
        if (isNaN(jours) || isNaN(moiss) || isNaN(annees)) {
            result = 'Entrez un nombre valide !'
        }
        p2.textContent = `Date : ` + result;
    })
}


window.onload=function() {
    calc();
    setInterval(calc, 1000);
}


main.appendChild(section2);
section2.appendChild(p1);
section2.appendChild(input);
section2.appendChild(p2);
