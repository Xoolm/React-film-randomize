import React, { FC, useEffect, useState } from "react";
import { IFilm } from "../../models/IFilm";
import cl from "./_FilmCard.module.scss";

interface FilmCard {
  film: IFilm;
  winner: number;
  bigBoy: number | undefined;
}

const FilmCard: FC<FilmCard> = ({ film, winner, bigBoy }) => {
  const [hideWinner, setHideWinner] = useState(false);
  const [greatestChance, setGreatestChance] = useState(false);

  useEffect(() => {
    if (bigBoy === film.id) {
      setGreatestChance(true);
    } else {
      setGreatestChance(false);
    }
  }, [bigBoy]);

  useEffect(() => {
    if (winner === film.id) {
      setHideWinner(true);
    }
  }, [winner]);

  return hideWinner ? (
    <div className="filmCard" style={{ opacity: "0" }}>
      <div className={cl.filmCard__author}>{film.author}</div>
      <div className={cl.filmCard__title}>{film.title}</div>
    </div>
  ) : (
    <div className="filmCard">
      {greatestChance && <h2 className={cl.filmCard__king}>*корона*</h2>}
      <div className={cl.filmCard__author}>{film.author}</div>
      <div className={cl.filmCard__title}>{film.title}</div>
    </div>
  );
};

export default FilmCard;
