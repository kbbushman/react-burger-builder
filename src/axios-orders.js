import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-myburgerbuilder.firebaseio.com/'
});

export default instance;
