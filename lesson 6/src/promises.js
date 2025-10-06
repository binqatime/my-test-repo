function fetchSkywalkerData() {
    return fetch('https://swapi.dev/api/people/1')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data;
            const name = data.name;
            const hairColor = data.hair_color;
            const eyesColor = data.eye_color;
            console.log('Skywalker discription goes here: ');
            console.log(`This is ${name}, he is a super hero with ${hairColor} hair and ${eyesColor} eyes. Welcome!`);
        })
        .catch((error) => console.log('Failed!' + error));
}

fetchSkywalkerData();
