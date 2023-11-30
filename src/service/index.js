import axios from "axios";
axios.defaults.baseURL = "https://reqres.in/api"


const headers = {
  // Esta linea puedo definir mis encabezados
  // Authorization: 'Bearer tuToken',
  // Tambien puedo colocar otros estados segun lol que he consultado
};

export const ApiService = {
  async login(data) {
    try {
      const res = await axios.post('/login', data);
      const token = res.data.token;
      window.localStorage.setItem("token", token);
      //Achtung! de esta linea a la linea 22 debo entender mas a profundidad y p
      // Agregar el token al header de las solicitudes futuras
    //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Redireccionar a otra ruta o realizar otras acciones después del login
      // Puedes usar react-router-dom history o Redirect para redireccionar
    //   history.push('/otra-ruta');
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
