import axios from "axios";

const API_URL = "http://localhost:3000/api/reviews";

export const createReview = async (review) => {
  const response = await axios.post(
    API_URL,
    review,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

