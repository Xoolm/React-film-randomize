import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { NumbersContext } from "../../../context";
import { IFilm } from "../../../models/IFilm";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomWheel from "./components/RandomWheel";
import Wheel from "./_RandomWheelWrapp.module.scss";
import { Button } from "@mui/material";

interface RandomWheelProps {
  filmPlate: IFilm[];
  setFilmPlate: (arg0: IFilm[]) => void;
  numbers: number[];
}

const RandomWheelWrapp: FC<RandomWheelProps> = ({
  filmPlate,
  setFilmPlate,
  numbers,
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
      }, 11500);
  }, [random, idFIlmWinner]);

  // const [winner, setWinner] = useState<any>(undefined);
  // useEffect(() => {
  //   if (filmPlate?.length === 1) {
  //     filmPlate.map((film) => {
  //       setWinner(film.id);
  //     });
  //   }
  // }, [filmPlate]);

  return (
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
  );
};

export default RandomWheelWrapp;
