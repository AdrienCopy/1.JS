const fetchQuote = () => {
    return fetch("https://thatsthespir.it/api")
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

//console.log(fetchQuote());

const main = document.querySelector('main');
const section = document.createElement('section');
const btn1 = document.createElement('button');
btn1.textContent = 'random';

main.appendChild(btn1);
main.appendChild(section);


btn1.addEventListener('click', function() {
    fetchQuote()
	.then((json) => {
        const quote = json;
        console.log(quote);
        section.textContent = "";
        let blockquote = document.createElement('blockquote');
        /*blockquote.textContent = JSON.stringify(json);*/
        section.appendChild(blockquote);

        const p = document.createElement('p');
        p.textContent = JSON.stringify(json.quote);
        blockquote.appendChild(p);

        const cite = document.createElement('cite');
        cite.textContent = JSON.stringify(json.author);
        blockquote.appendChild(cite);

        const img = document.createElement('img');
        img.src = json.photo;
        blockquote.appendChild(img);

        
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});
}); 
