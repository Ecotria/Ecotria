import axios from "axios";
import conf from '../paths/paths'

const register = (username, email, password) => {
  return axios.post(`${conf.apipath}${conf.user.create}`, {
    username,
    email,
    password,
  });
};

export const login = (email, password) => {
  return axios
    .post(`${conf.apipath}${conf.user.login}`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};