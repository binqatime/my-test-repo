async function fetchSkywalkerData() {
    const response = await fetch('https://swapi.dev/api/people/1');
    const data = await response.json();

    const name = data.name;
    const eyes = data.eye_color;
    const hair = data.hair_color;

    console.log(`Let me introduce super hero: ${name}! Yep, that man with ${eyes} eyes and ${hair} hair!`);
}

fetchSkywalkerData();
