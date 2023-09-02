import { createRef, lazy } from "react";
const FilmContainer = lazy(() => import("../pages/AddingPage/Adding"));
const FilmsTemplate = lazy(() => import("../pages/GamesPage/Games"));
const StartPage = lazy(() => import("../pages/StartPage/StartPage"));

export const routes = [
  { path: "/addingFilms", element: FilmContainer, nodeRef: createRef() },
  { path: "/choiceFilms", element: FilmsTemplate, nodeRef: createRef() },
  { path: "/homePage", element: StartPage, nodeRef: createRef() },
];
