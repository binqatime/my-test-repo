function fetchSkywalkerData() {
    return fetch('https://swapi.dev/api/people/1')
        .then((response) => {
            return response.json();
        })
        .then((data) => fetchData(data))
        .catch((error) => console.log('Failed!' + error));
}

function fetchData(json) {
    console.log(json);
}

console.log('------');

function getToKnowSkywalker() {
    // eslint-disable-next-line @stylistic/space-before-blocks
    const data = fetchSkywalkerData().then(function (data) {
        console.log(data);
    });

    const name = data.name;
    const eyes = data.eye_color;
    const hair = data.hair_color;

    console.log(`get to know the super hero: ${name}! A strong man with ${hair} hair and ${eyes} eyes.`);
}

getToKnowSkywalker();
