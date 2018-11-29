import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-sandwich.firebaseio.com/'
});

export default instance;