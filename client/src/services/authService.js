import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData, {
    withCredentials: true,
  });
};

export const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials, {
    withCredentials: true,
  });
};

export const logout = () => {
  return axios.post(
    `${API_URL}/logout`,
    {},
    {
      withCredentials: true,
    }
  );
};



