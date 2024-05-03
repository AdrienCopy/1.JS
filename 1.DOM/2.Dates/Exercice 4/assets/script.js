let main = document.querySelector('main');

let section = document.createElement('section');
section.setAttribute('id', 'section');
let divDay = document.createElement('div');
divDay.setAttribute('id', 'divDay');
let divDate = document.createElement('div');
divDate.setAttribute('id', 'divDate');
let divYear = document.createElement('div');
divYear.setAttribute('id', 'divYear');

let pDay = document.createElement('p');
let pDate = document.createElement('p');
let pMois = document.createElement('p');
let pYear = document.createElement('p');

let section1 = document.createElement('section');
section1.setAttribute('id', 'section1');
let p1 = document.createElement('p');
p1.setAttribute('id', 'heure_minute');
let p2 = document.createElement('p');
p2.setAttribute('id', 'seconde');

function afficheHeure() {
    let toDay = new Date()
    let heure = toDay.getHours();
    let minute = toDay.getMinutes();
    let seconde = toDay.getSeconds();
    if (seconde < 10) {
        seconde = '0' + toDay.getSeconds();
    }
    p1.textContent = heure + ':' + minute;
    p2.textContent = ':' + seconde;
}

function afficheDate() {
    let myDate = new Date();

    let dayNumb = myDate.getDay();
    let dayNames = ["Lundi", "Mardi","Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    let day = dayNames[dayNumb - 1];
    pDay.textContent = day;

    let date = myDate.getDate();
    let moisNumb = myDate.getMonth();
    let moisDeLAnnee = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    let mois = moisDeLAnnee[moisNumb]
    pDate.textContent = date;
    pMois.textContent = mois;

    let years = myDate.getFullYear();
    pYear.textContent = years;
}





main.appendChild(section);
section.appendChild(divDay);
divDay.appendChild(pDay);

section.appendChild(divDate);
divDate.appendChild(pDate);
divDate.appendChild(pMois);

section.appendChild(divYear);
divYear.appendChild(pYear);

main.appendChild(section1);
section1.appendChild(p1);
section1.appendChild(p2);




/*function amPm() {
    let maintenant =  new Date();
    //let h24 = maintenant.getHours();
    let h24 = 2;
    console.log(h24);
    let h12 = h24 - 12;
    if (h24 < 13) {
        h12 = h24;
    }
    console.log(h12);
}

amPm();*/

window.onload=function() {
    afficheHeure();
    afficheDate();
    setInterval(afficheHeure, afficheDate, 1000);
}