import { FC, useContext, useEffect, useState } from "react";
import { NumbersContext } from "../../../context";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomWheel from "./components/RandomWheel";
import Wheel from "./_RandomWheelWrapp.module.scss";
import { Button } from "@mui/material";
import FilmWinner from "../../FilmWinner/FilmWinner";
import { useTranslation } from "react-i18next";
import { IFilm } from "../../../models/IFilm";

interface RandomWheelProps {
  winner?: IFilm;
  winnerBool: boolean;
  setWinnerBool: (arg0: boolean) => void;
}

const RandomWheelWrapp: FC<RandomWheelProps> = ({
  winner,
  winnerBool,
  setWinnerBool,
}) => {
  const { t } = useTranslation();
  const { numbers, filmPlate, setFilmPlate, setAllFilms, allFilms } =
    useContext(NumbersContext);
  const [mustSpin, setMustSpin] = useState(false);
  const [idFIlmWinner, setIdFIlmWinner] = useState<any>();
  const [prizeNumber, setPrizeNumber] = useState<any>();
  const [getRandom, { data: random, isSuccess }] =
    getRandNum.useLazyGetRandNumQuery();
  const randomNum = random?.result?.random?.data;

  const handleSpinClick = async () => {
    if (mustSpin) {
      return mustSpin;
    } else {
      await getRandom(numbers?.length);
      setMustSpin(true);
    }
  };
  console.log(filmPlate);
  useEffect(() => {
    filmPlate?.map((film) => {
      let index = filmPlate.findIndex((el) => el.id === numbers[randomNum!]);
      return setPrizeNumber(index);
    });
    setIdFIlmWinner(numbers[randomNum!]);
    isSuccess &&
      setTimeout(() => {
        setFilmPlate(filmPlate?.filter((film) => film.id !== idFIlmWinner));
      }, 12500);
  }, [random, idFIlmWinner]);

  useEffect(() => {
    if (filmPlate?.length === 1) {
      setWinnerBool(true);
      // filmPlate.map((film) => {
      //   setAllFilms(allFilms.filter((item) => item.id !== film.id));
      // });
    }
  }, [filmPlate]);

  return (
    <>
      {winnerBool ? (
        <div className={Wheel.randomWheelWrapp}>
          <FilmWinner winner={winner} />
        </div>
      ) : (
        <div className={Wheel.wheelWrapper}>
          <RandomWheel
            setMustSpin={setMustSpin}
            mustSpin={mustSpin}
            prizeNumber={prizeNumber}
            filmPlate={filmPlate}
          />
          <Button className={Wheel.addWinner} onClick={handleSpinClick}>
            {t("gamesPage.randomWheel.button")}
          </Button>
        </div>
      )}
    </>
  );
};

export default RandomWheelWrapp;
