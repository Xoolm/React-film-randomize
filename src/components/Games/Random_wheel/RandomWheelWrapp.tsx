import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { NumbersContext } from "../../../context";
import { IFilm } from "../../../models/IFilm";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomWheel from "./components/RandomWheel";
import Wheel from "./_RandomWheelWrapp.module.scss";
import { Button } from "@mui/material";
import FilmWinner from "../../FilmWinner/FilmWinner";

interface RandomWheelProps {
  filmPlate: IFilm[];
  setFilmPlate: (arg0: IFilm[]) => void;
  numbers: number[];
  winner: boolean;
  setWinner: (arg0: boolean) => void;
}

const RandomWheelWrapp: FC<RandomWheelProps> = ({
  filmPlate,
  setFilmPlate,
  numbers,
  winner,
  setWinner,
}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [idFIlmWinner, setIdFIlmWinner] = useState<any>();
  const [prizeNumber, setPrizeNumber] = useState<any>();
  const [getRandom, { data: random, isSuccess }] =
    getRandNum.useLazyGetRandNumQuery();
  const randomNum = random?.result?.random?.data;

  const handleSpinClick = async () => {
    await getRandom(numbers?.length);
    setMustSpin(true);
  };
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
      setWinner(true);
    }
  }, [filmPlate]);

  return (
    <>
      {winner ? (
        <div className={Wheel.randomWheelWrapp}>
          {filmPlate &&
            filmPlate.map((film) => <FilmWinner key={film.id} film={film} />)}
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
            Выбрать победителя
          </Button>
        </div>
      )}
    </>
  );
};

export default RandomWheelWrapp;
