import { createRef, lazy } from "react";

const Adding = lazy(() => import("../pages/AddingPage/Adding"));
const AddingLobby = lazy(() => import("../pages/AddingPage/AddingLobby"));
const Games = lazy(() => import("../pages/GamesPage/Games"));
const GamesLobby = lazy(() => import("../pages/GamesPage/GamesLobby"));
const StartPage = lazy(() => import("../pages/StartPage/StartPage"));

export const routes = [
  { path: "/Adding", element: Adding, nodeRef: createRef() },
  { path: "/Adding/:id", element: AddingLobby, nodeRef: createRef() },
  { path: "/Games", element: Games, nodeRef: createRef() },
  { path: "/Games/:id", element: GamesLobby, nodeRef: createRef() },
  { path: "/Home", element: StartPage, nodeRef: createRef() },
];
