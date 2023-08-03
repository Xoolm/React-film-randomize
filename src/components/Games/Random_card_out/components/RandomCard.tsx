import React, { FC, useEffect, useState } from "react";
import { IFilm } from "../../../../models/IFilm";
import Card from "./_FilmCard.module.scss";

interface FilmCard {
  film: IFilm;
  droppedOut: number;
}

const RandomCard: FC<FilmCard> = ({ film, droppedOut }) => {
  const [hideWinner, setHideWinner] = useState(false);

  useEffect(() => {
    if (droppedOut === film.id) {
      setHideWinner(true);
    }
  }, [droppedOut]);

  return (
    <div className={hideWinner ? Card.filmCardOut : Card.filmCard}>
      <div className={Card.filmCard__author}>{film.author}</div>
      <div className={Card.filmCard__title}>{film.option}</div>
    </div>
  );
};

export default RandomCard;
