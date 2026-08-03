import axios from "axios";

const API_URL = "http://localhost:3000/api/reviews";

export const createReview = async (review) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    API_URL,
    review,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

