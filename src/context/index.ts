import { createContext } from "react";
import { IFilm } from "../models/IFilm";

interface FilmContext {
  numbers: number[];
  allFilms: IFilm[];
  setAllFilms: React.Dispatch<React.SetStateAction<IFilm[]>>;
  filmPlate: IFilm[];
  setFilmPlate: React.Dispatch<React.SetStateAction<IFilm[]>>;
}

export const NumbersContext = createContext<FilmContext>({
  numbers: [],
  allFilms: [],
  setAllFilms: () => {},
  filmPlate: [],
  setFilmPlate: () => {},
});
