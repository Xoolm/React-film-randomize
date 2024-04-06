import { FC, useContext, useEffect, useMemo, useState } from "react";
import { NumbersContext } from "../../../context";
import Mystery from "./_MysteryCardWrapp.module.scss";
import MysteryCard from "./components/MysteryCard";
import { IFilm } from "../../../models/IFilm";
import FilmWinner from "../../FilmWinner/FilmWinner";
import { useShuffle } from "../../../hooks/useShuffle";

interface MysteryCardOutWrappProps {
  winnerBool: boolean;
  winner?: IFilm;
}

const MysteryCardWrapp: FC<MysteryCardOutWrappProps> = ({
  winnerBool,
  winner,
}) => {
  const { allFilms, filmPlate, setFilmPlate } = useContext(NumbersContext);
  const [mysteryCard, setMysteryCard] = useState<IFilm[]>();
  const shuffleAarray = [...allFilms];
  const shafle = useShuffle(shuffleAarray!);
  useMemo(() => setMysteryCard(shafle), [allFilms]);
  const handleDelete = (id: number) => {
    setFilmPlate(filmPlate.filter((film: IFilm) => film.id !== id));
  };
  console.log(filmPlate);

  return (
    <>
      {winnerBool ? (
        <div className={Mystery.winnerWrapper}>
          <FilmWinner winner={winner} />
        </div>
      ) : (
        <div className={Mystery.mysteryCardWrapp}>
          {mysteryCard &&
            mysteryCard.map((film, index) => (
              <MysteryCard
                onDelete={handleDelete}
                key={film.id}
                film={film}
                index={index}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default MysteryCardWrapp;
