import axios from "axios";
axios.defaults.baseURL = "https://reqres.in/api"

export const ApiService = {

  async login(data) {

    try {

      const res = await axios.post('/login', data);
      const token = res.data.token;
      window.localStorage.setItem("token", token);
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return res.data; 

    } catch (error) {

      console.error('Error en la función login:', error);
      throw error; 

    }

  },

  async create(data) {

    try {

      const res = await axios.post('/users', data, { headers });
      console.log(res);

    } catch (error) {

      console.error('Error en la función create:', error);
      throw error;

    }

  },

  async getUsers() {

    try {

      const response = await axios.get('/users?page=2', { headers });
      return response.data.data;

    } catch (error) {

      console.error('Error en la función getUsers:', error);
      throw error;
      
    }

  }
};
