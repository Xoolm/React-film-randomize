import { FC, useContext, useEffect, useState } from "react";
import CardOut from "./_RandomCardOut.module.scss";
import { NumbersContext } from "../../../context";
import { IFilm } from "../../../models/IFilm";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomCard from "./components/RandomCard";
import { Button } from "@mui/material";
import FilmWinner from "../../FilmWinner/FilmWinner";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { IFilmLobby } from "../../../models/IFilmLobby";

interface RandomCardOutWrappProps {
  winnerBool: boolean;
  winner?: IFilm;
}

const RandomCardOutLobby: FC<RandomCardOutWrappProps> = ({
  winnerBool,
  winner,
}) => {
  const { t } = useTranslation();
  const { lobbyAllFilms, numbersLobby, setLobbyFilmsPlate, socket } =
    useContext(NumbersContext);
  const [getRandom, { data: random }] = getRandNum.useLazyGetRandNumQuery();
  const [droppedOut, setDroppedOut] = useState<any>();
  const params = useParams();

  // хендлер с обращением к api randomOrg
  const pickAWinner = async () => {
    await getRandom(numbersLobby?.length);
  };

  // обработчик выбора рандомного фильма и отправка его на сервер
  useEffect(() => {
    socket.emit(
      "RandomCardOutGame",
      numbersLobby[random?.result?.random?.data!],
      params
    );
  }, [random]);

  // обработчик ответа сервера с удалением отправленного фильма
  useEffect(() => {
    socket.on("responseRandomCardOutGame", (lobbyFilms: IFilmLobby[]) =>
      setLobbyFilmsPlate(lobbyFilms)
    );
    socket.on("responseDroppedOutID", (data: number) => {
      if (droppedOut !== data) {
        setDroppedOut(data);
      }
    });
  }, [setLobbyFilmsPlate, socket]);

  return (
    <>
      {winnerBool ? (
        <div className={CardOut.winnerWrapper}>
          <FilmWinner winner={winner} />
        </div>
      ) : (
        <div className={CardOut.randomCardWrapp}>
          {lobbyAllFilms &&
            lobbyAllFilms.map((film) => (
              <RandomCard key={film.id} film={film} droppedOut={droppedOut} />
            ))}
          <Button className={CardOut.addWinner_button} onClick={pickAWinner}>
            {t("gamesPage.randomCardOutWrapp.button")}
          </Button>
        </div>
      )}
    </>
  );
};

export default RandomCardOutLobby;
