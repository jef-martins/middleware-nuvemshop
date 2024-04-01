import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HttpService {
    async get(endpoint: string, config: any): Promise<any> {
        try {
            const response = await axios.get(endpoint, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async post(endpoint: string, data: any, config: any): Promise<any> {
        try {
            const response = await axios.post(endpoint, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
