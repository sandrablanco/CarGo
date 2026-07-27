import axios from "axios"

const API_URL = "http://localhost:3000/api/bookings";

export const createBooking = async (booking) => {

    const token = localStorage.getItem("token");

    return axios.post(API_URL, booking, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
