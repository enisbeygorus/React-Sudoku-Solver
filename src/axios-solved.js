import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sudoku-solve-app.firebaseio.com/'
});


export default instance;