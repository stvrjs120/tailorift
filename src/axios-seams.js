import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react2seams.firebaseio.com/'
});

export default instance;