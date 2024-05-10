let btn = document.getElementById('btn');
btn.addEventListener('click', getData);

function getData() {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            let ul = document.createElement("ul");
            document.body.appendChild(ul);
            data.forEach((item) => {
                let li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
        })
        .catch((error) => {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        });
}