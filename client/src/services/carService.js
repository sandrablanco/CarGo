import axios from 'axios';

const API_URL = 'http://localhost:3000/api/cars';
export const getCars = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};

