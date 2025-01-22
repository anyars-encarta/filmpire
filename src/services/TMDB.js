import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    //  Get Movies by [Type]
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
