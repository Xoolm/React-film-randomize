import { FC } from "react";
import Winner from "./_FilmWinner.module.scss";
import { IFilm } from "../../models/IFilm";

interface FilmCard {
  winner?: IFilm;
}

const FilmWinner: FC<FilmCard> = ({ winner }) => {
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
      <div className={Winner.filmWinner}>{winner?.option}</div>
    </div>
  );
};

export default FilmWinner;
