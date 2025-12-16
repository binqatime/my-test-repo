import {ApiObjectDto, ApiObjectClass} from './models/index';


async function getApiObjectsData(): Promise<ApiObjectDto[]> {
    const response = await fetch('https://swapi.dev/api/people/1');
    const json = await response.json();
    return json as ApiObjectDto[];
}

async function getApiObjectsDataFromClass(): Promise<ApiObjectClass[]> {
    const response = await fetch('https://swapi.dev/api/people/1');
    const json = await response.json();
    return (json as Record<string, string>[]).map((value) => new ApiObjectClass(value));
}

(async () => {
    // const apiObjects = await getApiObjectsData();
    // console.log(apiObjects);
    const classObj = getApiObjectsDataFromClass();
    console.log(classObj);

})();
