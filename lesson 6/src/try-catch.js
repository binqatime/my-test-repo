async function backUp() {
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    console.log(data);
}
async function failSkywalkerData() {
    let response;

    try {
        response = await fetch('https://swapi.dev/api/peole/1');
        if (!response.ok) {
            backUp();
        }
    } catch (error) {
        console.log(error);
    }

    console.log(response);
}

failSkywalkerData();
