import { FC, useContext, useEffect, useMemo, useState } from "react";
import { NumbersContext } from "../../../context";
import Mystery from "./_MysteryCardWrapp.module.scss";
import MysteryCard from "./components/MysteryCard";
import { IFilm } from "../../../models/IFilm";
import FilmWinner from "../../FilmWinner/FilmWinner";
import { useShuffle } from "../../../hooks/useShuffle";

interface MysteryCardOutWrappProps {
  winner: boolean;
}

const MysteryCardWrapp: FC<MysteryCardOutWrappProps> = ({ winner }) => {
  const { allFilms, filmPlate, setFilmPlate } = useContext(NumbersContext);
  const [mysteryCard, setMysteryCard] = useState<IFilm[]>();

  const handleDelete = (id: number) => {
    setFilmPlate(filmPlate.filter((film: IFilm) => film.id !== id));
  };

  const shuffleAarray = [...allFilms];
  const shafle = useShuffle(shuffleAarray!);
  useMemo(() => setMysteryCard(shafle), [allFilms]);

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
