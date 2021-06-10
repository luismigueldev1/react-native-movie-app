import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '73383ddad9720d82b0e6d6d4f1b637c6',
    language: 'es-ES',
  },
});

export default movieDB;
