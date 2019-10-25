// Getting references to all elements I want to interact with
const pokeData = document.getElementById('poke-data');
const pokeImg = document.getElementById('poke-img');
const pokeSubmit = document.getElementById('poke-submit');
const pokeInput = document.getElementsByName('poke-input')[0];

const apiPrefix = 'https://pokeapi.co/api/v2/pokemon'

// What elements will I update?
// Creating helper methods to do this
const updatePokeData = (pokeName, pokeNum) => {
    // template literal - allows injection of values using ${}
    const str = `#${pokeNum} ${pokeName}`;
    pokeData.innerText = str;
}

const updatePokeImg = (imgUrl) => {
    pokeImg.src = imgUrl;
}

const clearInput = () => {
    pokeInput.value = '';
}

// The HTTP request and its response processing
// Could probably be broken into two methods
// This is a process called decomposition
// Functional decomposition, algorithmic decomposition,
// and structural decomposition. 
const pokeRequestXHR = (str) => {
    const url = `${apiPrefix}/${str}`;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('loadend', () => {
        const body = JSON.parse(xhr.response);

        const pokeId = body.id;
        const pokeName = body.name;
        const pokeImg = body.sprites.front_default;
        
        updatePokeData(pokeName, pokeId);
        updatePokeImg(pokeImg);
    });

    xhr.open('GET', url);
    xhr.send();
}

pokeRequestFetch = (str) => {
    const url = `${apiPrefix}/${str}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(body => {
            const pokeId = body.id;
            const pokeName = body.name;
            const pokeImg = body.sprites.front_default;
            
            updatePokeData(pokeName, pokeId);
            updatePokeImg(pokeImg);
        })
}

pokeRequestAsync = async (str) => {
    const url = `${apiPrefix}/${str}`;
    const response = await fetch(url);
    const body = await response.json();

    const pokeId = body.id;
    const pokeName = body.name;
    const pokeImg = body.sprites.front_default;
    
    updatePokeData(pokeName, pokeId);
    updatePokeImg(pokeImg);
}

/* Add Event handlers */
pokeSubmit.addEventListener('click', () => {
    const input = pokeInput.value;
    if (input) {
        pokeRequestAsync(input);
    }
})

