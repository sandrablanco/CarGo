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

export const getBookingsByCar = async (id) => {
  const response = await axios.get(
    `${API_URL}/car/${id}`
  );

  return response.data;
};

export const getPendingSurvey = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API_URL}/pending-survey`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};