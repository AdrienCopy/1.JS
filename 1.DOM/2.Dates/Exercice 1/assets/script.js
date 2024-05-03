

let main = document.querySelector('main');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let h2Ice = document.createElement('h2');
let h2StP = document.createElement('h2');


function heure() {
    let now = new Date();
    let anchorage = new Date().toLocaleString("en-US", { timeZone: "America/Anchorage" });
    let reykjavik = new Date().toLocaleString("is-IS", { timeZone: "Atlantic/Reykjavik" });
    let stP = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

    h1.textContent = 'Bruxelles : ' + now;
    h2.textContent = 'Anchorage : ' + anchorage;
    h2Ice.textContent = 'Reykjavik : ' + reykjavik;
    h2StP.textContent = 'Saint-Petersburg : ' + stP;

    main.appendChild(h1);
    main.appendChild(h2);
    main.appendChild(h2Ice);
    main.appendChild(h2StP);
}

window.onload=function() {
    heure();
    setInterval(heure, 1000);
}