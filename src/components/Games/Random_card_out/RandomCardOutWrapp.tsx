import React, { useContext, useEffect, useMemo, useState } from "react";
import CardOut from "./_RandomCardOut.module.scss";
import { NumbersContext } from "../../../context";
import { IFilm } from "../../../models/IFilm";
import { filmAPI } from "../../../services/FilmServises";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomCard from "./components/RandomCard";

const RandomCardOutWrapp = () => {
  const { data: films } = filmAPI.useGetAllFilmsQuery(100);
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
  const [getRandom, { data: random }] = getRandNum.useLazyGetRandNumQuery();
  const [droppedOut, setDroppedOut] = useState<any>();

  const pickAWinner = async () => {
    await getRandom(numbers?.length);
  };
  useEffect(() => {
    filmPlate?.map((film) => {
      return setDroppedOut(numbers[random?.result.random.data!]);
    });
    setFilmPlate(filmPlate?.filter((film) => film.id !== droppedOut));
  }, [random, droppedOut]);

  // const [winner, setWinner] = useState<any>(undefined);
  // useEffect(() => {
  //   if (filmPlate?.length === 1) {
  //     filmPlate.map((film) => {
  //       setWinner(film.id);
  //     });
  //   }
  // }, [filmPlate]);

  // let max = filmPlate?.reduce((acc, curr) =>
  //   acc.chance >= curr.chance ? acc : curr
  // );
  // let bigBoy = max?.id;
  return (
    <>
      {films &&
        films.map((film) => (
          <RandomCard key={film.id} film={film} droppedOut={droppedOut} />
        ))}
      <button className={CardOut.addWinner} onClick={pickAWinner}>
        Выбрать победителя
      </button>
    </>
  );
};

export default RandomCardOutWrapp;
