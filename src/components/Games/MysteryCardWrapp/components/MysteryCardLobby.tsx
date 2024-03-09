import { FC, useContext, useEffect, useState } from "react";
import { IFilm } from "../../../../models/IFilm";
import Card from "./_MysteryCard.module.scss";
import { NumbersContext } from "../../../../context";

interface FilmCard {
  film: IFilm;
  onDelete: (id: number) => void;
}

const MysteryCardLobby: FC<FilmCard> = ({ film, onDelete }) => {
  const { socket } = useContext(NumbersContext);
  const [hideWinner, setHideWinner] = useState(false);

  // обработчик ответа от сервера на скрывание вылетевшего фильма
  useEffect(() => {
    socket.on("responseHideWinner", (bool: boolean, filmID: number) => {
      if (filmID === film.id) {
        setHideWinner(bool);
      }
    });
  }, [socket, hideWinner, onDelete]);

  // хендлер на удаление фильма и отправка данных о нем на сервер
  const handleDelete = () => {
    onDelete(film.id);
    socket.emit("HideWinner", true, film.id);
  };

  return (
    <div
      className={hideWinner ? Card.filmCardOut : Card.filmCard}
      onClick={handleDelete}
    >
      <div className={hideWinner ? Card.isFlipped : Card.card}>
        <div className={Card.filmCard__back}>
          <div className={Card.filmCard__title}>{film.option}</div>
        </div>
        <div className={Card.filmCard__front}>
          <div className={Card.filmCard__author}>?</div>
        </div>
      </div>
    </div>
  );
};

export default MysteryCardLobby;
