let id;
const url = `https://swapi.dev/api/people/?format=json`;
let resultsDiv = document.querySelector('.searchResults');

function debounceSearchFunction(func, delay) {
    if(id) {
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    }, delay);
}

async function searchCharacter(text) {
    const query = `${url}&search=${text}`;
    let response = await fetch (query);
    let data = await response.json();
    return data.results;
}

async function displayData() {
    let text = document.getElementById('characterNameInput').value;
    resultsDiv.innerHTML = null;
    if(text === '') {
        resultsDiv.innerHTML = null;
        return;
    }
    let searchResults = await searchCharacter(text) || [];
    console.log(searchResults);
    if(searchResults.length === 0) {
        let small = document.createElement('p');
        small.classList = 'small mx-auto';
        small.innerText = 'No results found. Try again...'
        resultsDiv.append(small);
        return;
    }
    searchResults.forEach(function (el) {
        let resultCard = document.createElement('div');
        resultCard.classList = 'resultCard d-flex justify-content-between text-white my-2';
        let nameAndDateDiv = document.createElement('div');
        let name = document.createElement('h6');
        name.classList = 'fw-light';
        name.innerText = el.name;
        let birthYear = document.createElement('p');
        birthYear.classList = 'small fw-lighter';
        birthYear.innerText = el.birth_year;
        nameAndDateDiv.append(name,birthYear);

        let genderDiv = document.createElement('div');
        let gender = document.createElement('p');
        gender.classList = 'small fw-lighter'
        gender.innerText = el.gender;
        genderDiv.append(gender);

        resultCard.append(nameAndDateDiv, genderDiv);
        resultCard.addEventListener('click', function() {
            localStorage.setItem('selectedCharacter', JSON.stringify(el));
            window.location.href = 'selectedCharacter.html';
        })
        resultsDiv.append(resultCard);
    });
}

function createCard(name, birthYear, gender) {

}