import { FC, useContext, useEffect, useMemo, useState } from "react";
import CardOut from "./_RandomCardOut.module.scss";
import { NumbersContext } from "../../../context";
import { IFilm } from "../../../models/IFilm";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomCard from "./components/RandomCard";
import { Button } from "@mui/material";
import FilmWinner from "../../FilmWinner/FilmWinner";

interface RandomCardOutWrappProps {
  winner: boolean;
}

const RandomCardOutWrapp: FC<RandomCardOutWrappProps> = ({ winner }) => {
  const { allFilms, numbers, filmPlate, setFilmPlate } =
    useContext(NumbersContext);
  const [getRandom, { data: random }] = getRandNum.useLazyGetRandNumQuery();
  const [droppedOut, setDroppedOut] = useState<any>();
  const pickAWinner = async () => {
    await getRandom(numbers?.length);
  };
  console.log(random?.result.random.data!);

  useEffect(() => {
    filmPlate?.map((film) => {
      return setDroppedOut(numbers[random?.result.random.data!]);
    });
    setFilmPlate(filmPlate?.filter((film) => film.id !== droppedOut));
  }, [random, droppedOut]);

  // let max = filmPlate?.reduce((acc, curr) =>
  //   acc.chance >= curr.chance ? acc : curr
  // );
  // let bigBoy = max?.id;
  return (
    <>
      {winner ? (
        <div className={CardOut.winnerWrapper}>
          {filmPlate &&
            filmPlate.map((film) => <FilmWinner key={film.id} film={film} />)}
        </div>
      ) : (
        <div className={CardOut.randomCardWrapp}>
          {allFilms &&
            allFilms.map((film) => (
              <RandomCard key={film.id} film={film} droppedOut={droppedOut} />
            ))}
          <Button className={CardOut.addWinner_button} onClick={pickAWinner}>
            Выбрать победителя
          </Button>
        </div>
      )}
    </>
  );
};

export default RandomCardOutWrapp;
