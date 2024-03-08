import { FC, useContext, useEffect, useState } from "react";
import { NumbersContext } from "../../../context";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomWheelLobby from "./components/RandomWheelLobby";
import Wheel from "./_RandomWheelWrapp.module.scss";
import { Button } from "@mui/material";
import FilmWinner from "../../FilmWinner/FilmWinner";
import { useTranslation } from "react-i18next";
import { IFilm } from "../../../models/IFilm";
import { useParams } from "react-router-dom";
import { IFilmLobby } from "../../../models/IFilmLobby";

interface RandomWheelProps {
  winner?: IFilm;
  winnerBool: boolean;
  setWinnerBool: (arg0: boolean) => void;
}

const RandomWheelWrappLobby: FC<RandomWheelProps> = ({
  winner,
  winnerBool,
  setWinnerBool,
}) => {
  const { t } = useTranslation();
  const { numbersLobby, lobbyFilmsPlate, setLobbyFilmsPlate, socket } =
    useContext(NumbersContext);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState<any>();
  const [getRandom, { data: random, isSuccess }] =
    getRandNum.useLazyGetRandNumQuery();
  const randomNum = random?.result?.random?.data;
  const params = useParams();

  // хендлер запуска колеса рандома с обращением к api randomOrg
  const handleSpinClick = async () => {
    if (mustSpin) {
      return mustSpin;
    } else {
      await getRandom(numbersLobby?.length);
      socket.emit("MustSpin", true);
    }
  };

  // отправка на сервер данных о лобби
  useEffect(() => {
    socket.emit("RandomWheelGame", params);
  }, []);

  // обработчик ответа от сервера
  useEffect(() => {
    socket.on("responseMustSpin", (data: boolean) => setMustSpin(data));
    socket.on("responsePrizeNumber", (data: number) => setPrizeNumber(data));
    socket.on("responseRandomWheelGame", (data: IFilmLobby[]) =>
      setLobbyFilmsPlate(data)
    );
  }, [socket, random]);

  // обработчик логики выбывания фильма
  useEffect(() => {
    //получаем индекс выбывшего фильма
    lobbyFilmsPlate?.map((film) => {
      let index = lobbyFilmsPlate.findIndex(
        (el) => el.id === numbersLobby[randomNum!]
      );
      // отправляем его на сервер
      socket.emit("PrizeNumber", index);
    });
    // удаляем фильм с задержкой равной времени прокрутки колеса
    isSuccess &&
      setTimeout(() => {
        socket.emit("RemoveFilm", numbersLobby[randomNum!]);
      }, 12500);
  }, [random, socket]);

  return (
    <>
      {winnerBool ? (
        <div className={Wheel.randomWheelWrapp}>
          <FilmWinner winner={winner} />
        </div>
      ) : (
        <div className={Wheel.wheelWrapper}>
          <RandomWheelLobby
            setMustSpin={setMustSpin}
            mustSpin={mustSpin}
            prizeNumber={prizeNumber}
            lobbyFilmsPlate={lobbyFilmsPlate}
          />
          <Button className={Wheel.addWinner} onClick={handleSpinClick}>
            {t("gamesPage.randomWheel.button")}
          </Button>
        </div>
      )}
    </>
  );
};

export default RandomWheelWrappLobby;
