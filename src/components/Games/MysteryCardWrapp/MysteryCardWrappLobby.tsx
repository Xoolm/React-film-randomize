import { FC, useContext, useEffect, useMemo, useState } from "react";
import { NumbersContext } from "../../../context";
import Mystery from "./_MysteryCardWrapp.module.scss";
import MysteryCardLobby from "./components/MysteryCardLobby";
import { IFilm } from "../../../models/IFilm";
import FilmWinner from "../../FilmWinner/FilmWinner";
import { useShuffle } from "../../../hooks/useShuffle";
import { IFilmLobby } from "../../../models/IFilmLobby";
import { useParams } from "react-router-dom";

interface MysteryCardOutWrappProps {
  winnerBool: boolean;
  winner?: IFilmLobby;
}

const MysteryCardWrappLobby: FC<MysteryCardOutWrappProps> = ({
  winnerBool,
  winner,
}) => {
  const { lobbyAllFilms, lobbyFilmsPlate, setLobbyFilmsPlate, socket } =
    useContext(NumbersContext);
  const [mysteryCard, setMysteryCard] = useState<IFilm[]>();
  const shuffleAarray = [...lobbyAllFilms];
  const shafle = useShuffle(shuffleAarray!);
  useMemo(() => setMysteryCard(shafle), [lobbyAllFilms]);
  const params = useParams();

  // обработчик ответа с сервера на удаление вылетевшего фильма
  useEffect(() => {
    socket.on("responseMysteryCard", (data: IFilmLobby[]) =>
      setLobbyFilmsPlate(data)
    );
  }, [socket, lobbyFilmsPlate]);

  // хендлер на удаление фильма и отправка данных о нем на сервер
  const handleDelete = (id: number) => {
    socket.emit("MysteryCard", id, params);
  };

  return (
    <>
      {winnerBool ? (
        <div className={Mystery.winnerWrapper}>
          <FilmWinner winner={winner} />
        </div>
      ) : (
        <div className={Mystery.mysteryCardWrapp}>
          {mysteryCard &&
            mysteryCard.map((film) => (
              <MysteryCardLobby
                onDelete={handleDelete}
                key={film.id}
                film={film}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default MysteryCardWrappLobby;
