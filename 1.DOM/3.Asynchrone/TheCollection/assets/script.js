let collection;
function coll () {
    return fetch("assets/collection.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((json) => {
        
        if (json && Array.isArray(json) && json.length > 0) {
            //collection = JSON.stringify(json);
            collection = json;
            //console.log(collection);
            return collection;
        } else {
            throw new Error("Invalid JSON data or empty array");
        }
    })
    .catch((error) => {
        console.error("An error occurred while fetching or processing the JSON:", error);
    });
}

coll()
    .then((reCollection) => {
        collection = reCollection;
        console.log(collection);
        return collection;
    })
    .catch((error) => {
        // Gestion des erreurs si nécessaire
        console.error("An error occurred during data retrieval:", error);
    });


setTimeout(() => {
    showFilm(collection); // Utilise la collection une fois qu'elle est récupérée (simulé avec un délai)
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
    let title = "Adrien's Collection";
    let header = document.querySelector('header');
    let nav = document.createElement('nav');

    let titleHeader = document.createElement('h1');
    titleHeader.textContent = title;
    header.appendChild(titleHeader);

    let drameButton = document.createElement('button');
    drameButton.textContent = "Drame";
    drameButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Drame");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(drameButton);

    let actionButton = document.createElement('button');
    actionButton.textContent = "Action";
    actionButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Action");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(actionButton);

    let sfButton = document.createElement('button');
    sfButton.textContent = "Science-fiction";
    sfButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Science-fiction");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(sfButton);

    let thrillerButton = document.createElement('button');
    thrillerButton.textContent = "Thriller";
    thrillerButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Thriller");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(thrillerButton);
    
    let aventureButton = document.createElement('button');
    aventureButton.textContent = "Aventure";
    aventureButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Aventure");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(aventureButton);

    let policeButton = document.createElement('button');
    policeButton.textContent = "Policier";
    policeButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Policier");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(policeButton);

    let fantasyButton = document.createElement('button');
    fantasyButton.textContent = "Fantasy";
    fantasyButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Fantasy");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(fantasyButton);

    let romanceButton = document.createElement('button');
    romanceButton.textContent = "Romance";
    romanceButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Romance");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(romanceButton);

    let allGenresButton = document.createElement('button');
    allGenresButton.textContent = "Tous les genres";
    allGenresButton.addEventListener('click', function() {
        showFilm(collection);
    });
    
nav.appendChild(allGenresButton);
    header.appendChild(nav);

});

function filtreFilm(genre) {
    return collection.filter(film => film.genre.includes(genre));
}

//console.log(filtreFilm("Drame"));

function showFilm(films) {
    let main = document.querySelector('main');
    main.innerHTML = '';

    films.forEach(function(film, index) {
        let article = document.createElement('article');
        let figure = document.createElement('figure');

        let title = document.createElement('h1');
        title.textContent = film.name;

        let image = document.createElement('img');
        image.src = film.picture;
        figure.appendChild(image);

        let realisateur = document.createElement('h2');
        realisateur.textContent = film.director;
        
        let year = document.createElement('p');
        year.textContent = film.releaseYear;
        year.classList.add('year');

        let style = document.createElement('p');
        style.textContent = film.genre.join(',  ');

        let casting = document.createElement('p');
        casting.textContent = film.cast.join(',  ');

        let synopsis = document.createElement('p');
        synopsis.textContent = film.synopsis
        
        article.setAttribute('data-index', index);


       
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.addEventListener('click', function() {
            deleteFilm(index);
            main.removeChild(article);
        });

        
        article.appendChild(figure);
        article.appendChild(title);
        article.appendChild(realisateur);
        article.appendChild(year);
        article.appendChild(style);
        article.appendChild(casting);
        article.appendChild(synopsis);
        article.appendChild(deleteButton);

        main.appendChild(article);


        //console.log(article.getAttribute('data-index'));
    });  
}

function deleteFilm(index) {
    if (index >= 0 && index < collection.length) {
        collection.splice(index, 1);//rappel, le 1 pour supprimer un seul element.
    } else {
        console.log("Index de film invalide.");
    }
}




