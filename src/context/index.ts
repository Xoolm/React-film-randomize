import { createContext } from "react";
import { IFilm } from "../models/IFilm";
import { IFilmLobby } from "../models/IFilmLobby";
import { io } from "socket.io-client";

interface FilmContext {
  socket: any;
  lobby: boolean;
  setLobby: React.Dispatch<React.SetStateAction<boolean>>;
  numbers: number[];
  numbersLobby: number[];
  allFilms: IFilm[];
  setAllFilms: React.Dispatch<React.SetStateAction<IFilm[]>>;
  filmPlate: IFilm[];
  setFilmPlate: React.Dispatch<React.SetStateAction<IFilm[]>>;
  lobbyAllFilms: IFilmLobby[];
  setLobbyAllFilms: React.Dispatch<React.SetStateAction<IFilmLobby[]>>;
  lobbyFilmsPlate: IFilmLobby[];
  setLobbyFilmsPlate: React.Dispatch<React.SetStateAction<IFilmLobby[]>>;
}

export const NumbersContext = createContext<FilmContext>({
  socket: io(),
  lobby: false,
  setLobby: () => {},
  numbers: [],
  numbersLobby: [],
  allFilms: [],
  setAllFilms: () => {},
  filmPlate: [],
  setFilmPlate: () => {},
  lobbyAllFilms: [],
  setLobbyAllFilms: () => {},
  lobbyFilmsPlate: [],
  setLobbyFilmsPlate: () => {},
});
