import React, { useContext, useEffect, useMemo, useState } from "react";
import { filmAPI } from "../../services/FilmServises";
import FilmCard from "../../components/FilmCard/FilmCard";
import cl from "./_FilmsTemplate.module.scss";
import { IFilm } from "../../models/IFilm";
import { getRandNum } from "../../services/RandomOrgAPI";
import { NumbersContext } from "../../context";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import AnimatedPage from "../AnimatedPage";

const FilmsTemplate = () => {
  const { data: films } = filmAPI.useFetAllFilmsQuery(100);
  const { allFilms } = useContext(NumbersContext);
  const [filmPlate, setFilmPlate] = useState<IFilm[]>();
  const [winner, setWinner] = useState<any>();
  useMemo(() => setFilmPlate(allFilms), [allFilms]);

  const numbers: number[] = [];
  filmPlate &&
    filmPlate.forEach((film) => {
      for (let i = 0; i < 100 / film.value; i++) {
        numbers.push(film.id);
      }
    });
  let max = filmPlate?.reduce((acc, curr) =>
    acc.chance >= curr.chance ? acc : curr
  );
  let bigBoy = max?.id;
  console.log(filmPlate);

  const { data: random, refetch } = getRandNum.useGetRandNumQuery(
    numbers?.length
  );

  const randomNum = random?.result?.random.data;

  const pickAWinner = (e: React.MouseEvent) => {
    e.preventDefault();
    refetch();
    filmPlate?.map((film) => {
      return setWinner(numbers[randomNum!]);
    });
  };
  useEffect(() => {
    setFilmPlate(filmPlate?.filter((film) => film.id !== winner));
  }, [winner]);

  return (
    <AnimatedPage>
      <div className={cl.templateWrapp}>
        <TransitionGroup className={cl.filmsWrapp} component="div">
          {films &&
            films.map((film) => (
              <CSSTransition
                classNames="filmCard"
                key={film.id}
                timeout={500}
                appear={true}
                in={true}
              >
                <FilmCard film={film} winner={winner} bigBoy={bigBoy} />
              </CSSTransition>
            ))}
        </TransitionGroup>
        <button className={cl.addWinner} onClick={pickAWinner}>
          Выбрать победителя
        </button>
      </div>
    </AnimatedPage>
  );
};

export default FilmsTemplate;
