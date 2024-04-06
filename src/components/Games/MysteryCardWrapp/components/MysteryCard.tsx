import { FC, useState } from "react";
import { IFilm } from "../../../../models/IFilm";
import Card from "./_MysteryCard.module.scss";

interface FilmCard {
  film: IFilm;
  index: number;
  onDelete: (id: number) => void;
}

const MysteryCard: FC<FilmCard> = ({ film, onDelete, index }) => {
  const [hideWinner, setHideWinner] = useState(false);
  const handleDelete = () => {
    onDelete(film.id);
    setHideWinner(true);
  };

  return (
    <div
      className={hideWinner ? Card.filmCardOut : Card.filmCard}
      onClick={handleDelete}
    >
      <div className={hideWinner ? Card.isFlipped : Card.card}>
        <div className={Card.filmCard__back}>
          {/* <div className={Card.filmCard__author}>{film.id}</div> */}
          <div className={Card.filmCard__title}>{film.option}</div>
        </div>
        <div className={Card.filmCard__front}>
          <div className={Card.filmCard__author}>{index + 1}</div>
          {/* <div className={Card.filmCard__title}></div> */}
        </div>
      </div>
    </div>
  );
};

export default MysteryCard;
