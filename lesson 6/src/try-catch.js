async function backUp() {
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    console.log(data);
}

function failSkywalkerData(data) {
    throw new Error(`Ooops! Something went wrong with ${data}`);
}

async function checkSkywalkerData() {
    let response;

    try {
        response = failSkywalkerData('https://swapi.dev/api/peole/1');
    } catch (error) {
        console.log(error);
        if (error.message.includes('Ooops! Something went wrong')) {
            console.log('Take a look at this resource:');
            await backUp();
        }
    }

    console.log(response);
}

checkSkywalkerData();
