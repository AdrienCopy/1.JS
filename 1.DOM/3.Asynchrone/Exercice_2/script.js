const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);
let main = document.querySelector('main');
let btn = document.getElementById('btn');
let div = document.createElement('div');
div.setAttribute('new', 'id');
main.appendChild(div);


btn.addEventListener('click', function() {
    let input = document.getElementById('Name');
    let inputValue = input.value;
    /*return inputValue;*/
    fetchName(inputValue)
	.then((response) => response.json())
	.then((json) => {
        let p = document.createElement('p');
        p.textContent = json.age;
        div.appendChild(p);
		console.log(json.age);
		console.log(json.count);
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});
}); 

//const fetchCocktail = () => fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
const fetchCocktail = () => {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch((error) => {
            console.error("There was an error fetching the data:", error);
            throw error; // Propager l'erreur pour la gestion ultérieure si nécessaire
        });
};

let btn1 = document.getElementById('random');

btn1.addEventListener('click', function() {
    fetchCocktail()
	.then((json) => {
        if (json.drinks && json.drinks.length > 0) {
            const cocktail = json.drinks[0];
        let p = document.createElement('p');
        //p.textContent = JSON.stringify(json);
        p.textContent = cocktail.strDrink;
        let img = document.createElement('img');
        img.src = cocktail.strDrinkThumb;
        img.style.width = "20%";
        div.appendChild(p);
        div.appendChild(img);
        console.log(cocktail);
        } else {
        console.error("No drinks found in the response.");
    }
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});
}); 
