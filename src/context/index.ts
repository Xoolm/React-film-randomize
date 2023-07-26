import { createContext } from "react";
import { IFilm } from "../models/IFilm";

interface FilmContext {
  numbers: number[];
  allFilms: IFilm[] | undefined;
  setAllFilms: React.Dispatch<React.SetStateAction<IFilm[] | undefined>>;
}

export const NumbersContext = createContext<FilmContext>({
  numbers: [],
  allFilms: undefined,
  setAllFilms: () => {},
});
