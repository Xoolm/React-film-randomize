import Games from "./_Games.module.scss";
import AnimatedPage from "../AnimatedPages";
import { Container } from "@mui/material";
import RandomWheelWrappLobby from "../../components/Games/Random_wheel/RandomWheelWrappLobby";
import RandomCardOutWrappLobby from "../../components/Games/Random_card_out/RandomCardOutLobby";
import { useContext, useEffect, useState } from "react";
import MysteryCardWrappLobby from "../../components/Games/MysteryCardWrapp/MysteryCardWrappLobby";
import { NumbersContext } from "../../context";
import Select from "react-select";
import "../../style/_custom-select-games.scss";
import { useTranslation } from "react-i18next";
import { IFilmLobby } from "../../models/IFilmLobby";
import { useParams } from "react-router-dom";

const FilmsTemplate = () => {
  const { t } = useTranslation();
  const [game, setGame] = useState<any>(0);
  const { lobbyFilmsPlate, setLobbyFilmsPlate, socket } =
    useContext(NumbersContext);
  const [winnerBool, setWinnerBool] = useState(false);
  const [winner, setWinner] = useState<IFilmLobby>();
  const params = useParams();

  // Вывод сообщения что фильмы не заполнены
  useEffect(() => {
    if (lobbyFilmsPlate.length === 0) {
      setGame(4);
    }
  }, []);

  // востановление фильмов после смены игры
  useEffect(() => {
    if (game.value === 1 || game.value === 2 || game.value === 3) {
      socket.emit("RefreshGameFilms", params);
      socket.on("RefreshFilms", (data: IFilmLobby[]) =>
        setLobbyFilmsPlate(data)
      );
    }
  }, [game, socket]);

  // значения селекта и названия игр
  const options = [
    { value: 1, label: t("gamesPage.select.eliminationCards") },
    { value: 2, label: t("gamesPage.select.randomWheel") },
    { value: 3, label: t("gamesPage.select.choiceCard") },
  ];

  // обработчик победителя игры и вывода его на экране с разным таймингом на колесе, и на других играх
  useEffect(() => {
    // если выбранно колесо
    if (game.value === 2) {
      if (lobbyFilmsPlate?.length === 1) {
        setTimeout(() => {
          setWinnerBool(true);
          lobbyFilmsPlate.map((film) => {
            return setWinner(film);
          });
        }, 0);
      }
      // если выбранны остальные игры
    } else {
      if (lobbyFilmsPlate?.length === 1) {
        setTimeout(() => {
          setWinnerBool(true);
          lobbyFilmsPlate.map((film) => {
            return setWinner(film);
          });
        }, 3500);
      }
    }
  }, [game.value, lobbyFilmsPlate]);

  return (
    <AnimatedPage>
      <div className={Games.FilmsChoisePage__background}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ color: "red" }}>test server</div>
          <Select
            className={Games.select}
            classNamePrefix="customSelect"
            isDisabled={game === 4 || game === 5 ? true : false}
            isSearchable={false}
            options={options}
            value={game}
            onChange={setGame}
            placeholder={
              game === 0
                ? t("gamesPage.select.placeholder1")
                : t("gamesPage.select.placeholder2")
            }
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderRadius: "20px",
                padding: "5px 30px",
              }),
            }}
          />
          <div className={Games.templateWrapp}>
            <div className={Games.alert}>
              {game === 0 ? (
                <h3>{t("gamesPage.addingMessage.chooseAGame")}</h3>
              ) : null}
              {game === 4 ? (
                <h3>{t("gamesPage.addingMessage.YouHaveNotAddedAnyMovies")}</h3>
              ) : null}
              {game === 5 ? (
                <h3>
                  {t("gamesPage.addingMessage.addingOneMovieDoesNotMakeSense")}
                </h3>
              ) : null}
            </div>
            {game.value === 1 ? (
              <RandomCardOutWrappLobby
                winner={winner}
                winnerBool={winnerBool}
              />
            ) : null}
            {game.value === 2 ? (
              <RandomWheelWrappLobby
                winner={winner}
                winnerBool={winnerBool}
                setWinnerBool={setWinnerBool}
              />
            ) : null}
            {game.value === 3 ? (
              <MysteryCardWrappLobby winner={winner} winnerBool={winnerBool} />
            ) : null}
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FilmsTemplate;
