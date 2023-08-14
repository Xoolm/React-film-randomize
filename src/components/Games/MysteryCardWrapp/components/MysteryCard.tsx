import { FC, useState } from "react";
import { IFilm } from "../../../../models/IFilm";
import Card from "./_MysteryCard.module.scss";

interface FilmCard {
  film: IFilm;
}

const MysteryCard: FC<FilmCard> = ({ film }) => {
  const [hideWinner, setHideWinner] = useState(false);

  return (
    <div
      className={hideWinner ? Card.filmCardOut : Card.filmCard}
      onClick={() => setHideWinner(true)}
    >
      <div className={hideWinner ? Card.isFlipped : Card.card}>
        <div className={Card.filmCard__back}>
          {/* <div className={Card.filmCard__author}>{film.id}</div> */}
          <div className={Card.filmCard__title}>{film.option}</div>
        </div>
        <div className={Card.filmCard__front}>
          <div className={Card.filmCard__author}>?</div>
          {/* <div className={Card.filmCard__title}></div> */}
        </div>
      </div>
    </div>
  );
};

export default MysteryCard;
