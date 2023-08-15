import { FC, useContext, useEffect, useMemo, useState } from "react";
import { NumbersContext } from "../../../context";
import Mystery from "./_MysteryCardWrapp.module.scss";
import MysteryCard from "./components/MysteryCard";
import { IFilm } from "../../../models/IFilm";
import FilmWinner from "../../FilmWinner/FilmWinner";

interface MysteryCardOutWrappProps {
  filmPlate: IFilm[];
  setFilmPlate: (arg0: IFilm[]) => void;
  winner: boolean;
}

const MysteryCardWrapp: FC<MysteryCardOutWrappProps> = ({
  winner,
  filmPlate,
  setFilmPlate,
}) => {
  const { allFilms } = useContext(NumbersContext);
  const [mysteryCard, setMysteryCard] = useState<IFilm[]>();

  useMemo(() => setMysteryCard(allFilms), [allFilms]);
  const shuffle = (array: IFilm[], arr: IFilm[]) => {
    let m = mysteryCard?.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };
  useEffect(() => {
    shuffle(mysteryCard!, filmPlate!);
  }, []);

  const handleDelete = (id: number) => {
    setFilmPlate(filmPlate.filter((film: IFilm) => film.id !== id));
  };

  return (
    <>
      {winner ? (
        <div className={Mystery.winnerWrapper}>
          {filmPlate &&
            filmPlate.map((film) => <FilmWinner key={film.id} film={film} />)}
        </div>
      ) : (
        <div className={Mystery.mysteryCardWrapp}>
          {mysteryCard &&
            mysteryCard.map((film) => (
              <MysteryCard onDelete={handleDelete} key={film.id} film={film} />
            ))}
        </div>
      )}
    </>
  );
};

export default MysteryCardWrapp;
