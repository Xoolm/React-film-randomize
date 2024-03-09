import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFilm } from "../models/IFilm";
import { IUser } from "../models/IUser";

export const filmAPI = createApi({
  reducerPath: "filmAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["Film"],
  endpoints: (build) => ({
    getUsers: build.query<IUser[], number>({
      query: () => ({
        url: "/Users",
      }),
      providesTags: (result) => ["Film"],
    }),
    createUser: build.mutation<IUser[], IUser>({
      query: (user) => ({
        url: `/Users?`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Film"],
    }),
    removeUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/Users/${user.id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: ["Film"],
    }),
    removeUserFilms: build.mutation<IFilm, IFilm>({
      query: (film) => ({
        url: `/films/${film.id}`,
        method: "DELETE",
        body: film,
      }),
      invalidatesTags: ["Film"],
    }),
    getFilms: build.query<IFilm[], number>({
      query: (id) => ({
        url: `/films/?userId=${id}`,
      }),
      providesTags: (result) => ["Film"],
    }),
    getAllFilms: build.query<IFilm[], number>({
      query: () => ({
        url: `/films/`,
      }),
      providesTags: (result) => ["Film"],
    }),
    createFilm: build.mutation<IFilm[], IFilm>({
      query: (film) => ({
        url: `/films?`,
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
