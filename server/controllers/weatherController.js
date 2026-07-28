import axios from "axios";

export const getWeather = async (req, res) => {
    try {
        const {city} = req.params;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_TIEMPO}`);
        res.json(response.data);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};