import { FC, useContext, useEffect, useMemo, useState } from "react";
import CardOut from "./_RandomCardOut.module.scss";
import { NumbersContext } from "../../../context";
import { IFilm } from "../../../models/IFilm";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomCard from "./components/RandomCard";
import { Button } from "@mui/material";
import FilmWinner from "../../FilmWinner/FilmWinner";
import { useTranslation } from "react-i18next";

interface RandomCardOutWrappProps {
  winnerBool: boolean;
  winner?: IFilm;
}

const RandomCardOutWrapp: FC<RandomCardOutWrappProps> = ({
  winnerBool,
  winner,
}) => {
  const { t } = useTranslation();
  const { allFilms, numbers, filmPlate, setFilmPlate } =
    useContext(NumbersContext);
  const [getRandom, { data: random }] = getRandNum.useLazyGetRandNumQuery();
  const [droppedOut, setDroppedOut] = useState<any>();
  const pickAWinner = async () => {
    await getRandom(numbers?.length);
  };
  console.log(filmPlate);

  useEffect(() => {
    filmPlate?.map((film) => {
      return setDroppedOut(numbers[random?.result.random.data!]);
    });
    setFilmPlate(filmPlate?.filter((film) => film.id !== droppedOut));
  }, [random, droppedOut]);

  return (
    <>
      {winnerBool ? (
        <div className={CardOut.winnerWrapper}>
          <FilmWinner winner={winner} />
        </div>
      ) : (
        <div className={CardOut.randomCardWrapp}>
          {allFilms &&
            allFilms.map((film) => (
              <RandomCard key={film.id} film={film} droppedOut={droppedOut} />
            ))}
          <Button className={CardOut.addWinner_button} onClick={pickAWinner}>
            {t("gamesPage.randomCardOutWrapp.button")}
          </Button>
        </div>
      )}
    </>
  );
};

export default RandomCardOutWrapp;
