/* eslint-disable consistent-return */
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const moviesApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');
    const token = data.request_token;

    if (data.success) {
      localStorage.setItem('request_token', token);

      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (e) {
    throw new Error('Sorry, you tokem could not be created!', e);
  }
};

export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');

  if (token) {
    try {
      const { data } = await moviesApi.post('/authentication/session/new', {
        request_token: token,
      });

      const sessionId = data.session_id;

      console.log('The data', sessionId);

      localStorage.setItem('session_id', sessionId);

      return sessionId;
    } catch (e) {
      throw new Error('Sorry, your session could not be created!', e);
    }
  }
};
