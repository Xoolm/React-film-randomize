import { createRef } from "react";
import FilmContainer from "../pages/FilmsAddingPage/FilmContainer";
import FilmsTemplate from "../pages/FilmsChoicePage/FilmsTemplate";
import StartPage from "../pages/StartPage/StartPage";

export const routes = [
  { path: "/addingFilms", element: FilmContainer, nodeRef: createRef() },
  { path: "/choiceFilms", element: FilmsTemplate, nodeRef: createRef() },
  { path: "/homePage", element: StartPage, nodeRef: createRef() },
];
