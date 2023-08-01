import React, { useContext, useEffect, useMemo, useState } from "react";
import { filmAPI } from "../../services/FilmServises";
import FilmCard from "../../components/FilmCard/FilmCard";
import cl from "./_FilmsTemplate.module.scss";
import { IFilm } from "../../models/IFilm";
import { getRandNum } from "../../services/RandomOrgAPI";
import { NumbersContext } from "../../context";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AnimatedPage from "../AnimatedPage";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import Card from "../../components/FilmCard/_FilmCard.module.scss";

const FilmsTemplate = () => {
  const { data: films } = filmAPI.useGetAllFilmsQuery(100);
  const { allFilms } = useContext(NumbersContext);
  const [filmPlate, setFilmPlate] = useState<IFilm[]>();
  const [droppedOut, setDroppedOut] = useState<any>();
  const [winner, setWinner] = useState<any>();
  useMemo(() => setFilmPlate(allFilms), [allFilms]);

  useEffect(() => {
    if (filmPlate?.length === 1) {
      filmPlate.map((film) => {
        setWinner(film.id);
      });
    }
  }, [filmPlate]);

  const numbers: number[] = [];
  filmPlate &&
    filmPlate.forEach((film) => {
      for (let i = 0; i < 100 / film.value; i++) {
        numbers.push(film.id);
      }
    });
  // let max = filmPlate?.reduce((acc, curr) =>
  //   acc.chance >= curr.chance ? acc : curr
  // );
  // let bigBoy = max?.id;

  const { data: random, refetch } = getRandNum.useGetRandNumQuery(
    numbers?.length
  );

  const randomNum = random?.result?.random.data;

  const pickAWinner = (e: React.MouseEvent) => {
    e.preventDefault();
    refetch();
    filmPlate?.map((film) => {
      return setDroppedOut(numbers[randomNum!]);
    });
  };
  useEffect(() => {
    setFilmPlate(filmPlate?.filter((film) => film.id !== droppedOut));
  }, [droppedOut]);

  console.log(filmPlate);

  return (
    <AnimatedPage>
      <div className={cl.FilmsChoisePage__background}>
        <Container sx={{ mt: "40px" }}>
          <div className={cl.templateWrapp}>
            <div className={cl.filmsWrapp}>
              {films &&
                films.map((film) => (
                  <FilmCard key={film.id} film={film} droppedOut={droppedOut} />
                ))}
            </div>
            <button className={cl.addWinner} onClick={pickAWinner}>
              Выбрать победителя
            </button>
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FilmsTemplate;
