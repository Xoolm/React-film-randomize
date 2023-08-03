import React, { useContext, useEffect, useMemo, useState } from "react";
import { NumbersContext } from "../../../context";
import { IFilm } from "../../../models/IFilm";
import { filmAPI } from "../../../services/FilmServises";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomWheel from "./components/RandomWheel";
import Wheel from "./_RandomWheelWrapp.module.scss";

const RandomWheelWrapp = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const { allFilms } = useContext(NumbersContext);
  const [filmPlate, setFilmPlate] = useState<IFilm[]>();
  useMemo(() => setFilmPlate(allFilms), [allFilms]);
  const numbers: number[] = [];
  filmPlate &&
    filmPlate.forEach((film) => {
      for (let i = 0; i < 100; i++) {
        numbers.push(film.id);
      }
    });
  const [getRandom, { data: random, isSuccess }] =
    getRandNum.useLazyGetRandNumQuery();

  const randomNum = random?.result?.random?.data;
  const [idFIlmWinner, setIdFIlmWinner] = useState<any>();
  const [prizeNumber, setPrizeNumber] = useState<any>();
  console.log(idFIlmWinner);
  console.log(prizeNumber);
  console.log(filmPlate);

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFilmPlate(filmPlate?.filter((film) => film.id !== idFIlmWinner));
  //   }, 11500);
  // }, [randomNum]);

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
      <button className={Wheel.addWinner} onClick={handleSpinClick}>
        Выбрать победителя
      </button>
    </div>
  );
};

export default RandomWheelWrapp;
