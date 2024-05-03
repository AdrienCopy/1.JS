let main = document.querySelector('main');
let section = document.createElement('section');
main.appendChild(section);
let h1 = document.createElement('h1');
h1.style.textAlign = 'center';
section.appendChild(h1);

async function write(text) {
    for (let i = 0; i < text.length; i++) {
        h1.textContent+= text[i];
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function machine () {
    await write('Keller-7');
}

machine();