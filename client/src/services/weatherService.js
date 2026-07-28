import axios from "axios";

export const getWeather = async (city) => {
    const response = await axios.get(`http://localhost:3000/api/weather/${city}`);
    return response.data;
};