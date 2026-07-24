import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cars/';
export const getCars = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};

export const getCars = () => axios.get(API_URL).then(response => response.data);