import React, { FC, useEffect, useState } from "react";
import Winner from "./_FilmWinner.module.scss";
import { IFilm } from "../../models/IFilm";

interface FilmCard {
  film: IFilm;
}

const FilmWinner: FC<FilmCard> = ({ film }) => {
  return (
    <div className={Winner.confetti}>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.confettiPiece}></div>
      <div className={Winner.filmWinner}>{film.option}</div>
    </div>
  );
};

export default FilmWinner;
