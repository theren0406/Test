import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-blog-29878.firebaseio.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;