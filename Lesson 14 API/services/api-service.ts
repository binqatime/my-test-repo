import axios from 'axios';
import { DogApiDto } from './dog-api.dto';


export class ApiService {

    public instance = axios.create({
        baseURL: 'https://dogapi.dog/api',
        timeout: 1000
    });

    public async getData(params: string): Promise<any> {
        try {
            const response = await this.instance.get(params);
            console.log(response.data);
            return response as DogApiDto;
        } catch (error) {
            console.error('Request failed', error);
            throw error;
        }
    }
}

