let selectedCharacter = JSON.parse(localStorage.getItem('selectedCharacter')) || {};
if(selectedCharacter) {
    document.getElementById('birthYear').innerText = selectedCharacter.birth_year;
    document.getElementById('gender').innerText = selectedCharacter.gender;
    document.getElementById('height').innerText = selectedCharacter.height;
    document.getElementById('mass').innerText = selectedCharacter.mass;
    document.getElementById('hairColor').innerText = selectedCharacter.hair_color;
    document.getElementById('eyeColor').innerText = selectedCharacter.eye_color;
    document.getElementById('character').innerText = selectedCharacter.name;
}