import axios from "axios";

const API_URL = "http://localhost:3000/api/bookings";

export const createBooking = async (booking) => {
  return axios.post(API_URL, booking, {
    withCredentials: true,
  });
};

export const getBookingsByCar = async (id) => {
  const response = await axios.get(
    `${API_URL}/car/${id}`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const getPendingSurvey = async () => {
  const response = await axios.get(
    `${API_URL}/pending-survey`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const getMyBookings = async () => {
  const response = await axios.get(
    `${API_URL}/my-bookings`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};
