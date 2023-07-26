import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFilm } from "../models/IFilm";

export const filmAPI = createApi({
  reducerPath: "filmAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["Film"],
  endpoints: (build) => ({
    fetAllFilms: build.query<IFilm[], number>({
      query: () => ({
        url: "/films",
      }),
      providesTags: (result) => ["Film"],
    }),
    getFilmByID: build.query<IFilm, any>({
      query: (id) => ({
        url: `/films/${id}`,
        method: "GET",
      }),
    }),
    createFilm: build.mutation<IFilm, IFilm>({
      query: (film) => ({
        url: "/films",
        method: "POST",
        body: film,
      }),
      invalidatesTags: ["Film"],
    }),
    updateFilm: build.mutation<IFilm, IFilm>({
      query: (film) => ({
        url: `/films/${film.id}`,
        method: "PUT",
        body: film,
      }),
      invalidatesTags: ["Film"],
    }),
    removeFilm: build.mutation<IFilm, IFilm>({
      query: (film) => ({
        url: `/films/${film.id}`,
        method: "DELETE",
        body: film,
      }),
      invalidatesTags: ["Film"],
    }),
  }),
});
