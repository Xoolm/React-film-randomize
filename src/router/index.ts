import { createRef } from "react";
import FilmContainer from "../pages/FilmsAddingPage/FilmContainer";
import FilmsTemplate from "../pages/FilmsChoicePage/FilmsTemplate";

export const routes = [
  { path: "/addingFilms", element: FilmContainer, nodeRef: createRef() },
  { path: "/choiceFilms", element: FilmsTemplate, nodeRef: createRef() },
];
