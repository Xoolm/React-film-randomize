import Games from "./_Games.module.scss";
import AnimatedPage from "../AnimatedPages";
import { Container } from "@mui/material";
import RandomWheelWrapp from "../../components/Games/Random_wheel/RandomWheelWrapp";
import RandomCardOutWrapp from "../../components/Games/Random_card_out/RandomCardOutWrapp";
import { useContext, useEffect, useState } from "react";
import MysteryCardWrapp from "../../components/Games/MysteryCardWrapp/MysteryCardWrapp";
import { NumbersContext } from "../../context";
import Select from "react-select";
import "../../style/_custom-select-games.scss";
import { useTranslation } from "react-i18next";
import { IFilm } from "../../models/IFilm";

const FilmsTemplate = () => {
  const { t } = useTranslation();
  const [game, setGame] = useState<any>(0);
  const { filmPlate, setAllFilms, allFilms } = useContext(NumbersContext);
  const [winnerBool, setWinnerBool] = useState(false);
  const [winner, setWinner] = useState<IFilm>();
  useEffect(() => {
    if (filmPlate.length === 0) {
      setGame(4);
    }
  }, []);

  const options = [
    { value: 1, label: t("gamesPage.select.eliminationCards") },
    { value: 2, label: t("gamesPage.select.randomWheel") },
    { value: 3, label: t("gamesPage.select.choiceCard") },
  ];

  useEffect(() => {
    if (game.value === 2) {
      if (filmPlate?.length === 1) {
        setTimeout(() => {
          setWinnerBool(true);
          filmPlate.map((film) => {
            setWinner(film);
            const updateFilms = allFilms.filter((item) => item.id !== film.id);
            const newAllFilms = updateFilms.map((film) => {
              if (film.value === 10) {
                return {
                  ...film,
                  value: 10,
                  optionSize: 1,
                  quantity: 10,
                };
              } else {
                return {
                  ...film,
                  value: film.value + 1,
                  optionSize: film.optionSize - 1,
                  quantity: Math.floor(100 - film.value * 10),
                };
              }
            });
            setAllFilms(newAllFilms);
          });
        }, 0);
      }
    } else {
      if (filmPlate?.length === 1) {
        setTimeout(() => {
          setWinnerBool(true);
          filmPlate.map((film) => {
            setWinner(film);
            const updateFilms = allFilms.filter((item) => item.id !== film.id);
            const newAllFilms = updateFilms.map((film) => {
              if (film.value === 10) {
                return {
                  ...film,
                  value: 10,
                  optionSize: 1,
                  quantity: 10,
                };
              } else {
                return {
                  ...film,
                  value: film.value + 1,
                  optionSize: film.optionSize - 1,
                  quantity: Math.floor(100 - film.value * 10),
                };
              }
            });
            setAllFilms(newAllFilms);
          });
        }, 3500);
      }
    }
  }, [allFilms, filmPlate]);

  return (
    <AnimatedPage>
      <div className={Games.FilmsChoisePage__background}>
        <></>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
              <RandomCardOutWrapp winner={winner} winnerBool={winnerBool} />
            ) : null}
            {game.value === 3 ? (
              <MysteryCardWrapp winner={winner} winnerBool={winnerBool} />
            ) : null}
            {game.value === 2 ? (
              <RandomWheelWrapp
                winner={winner}
                winnerBool={winnerBool}
                setWinnerBool={setWinnerBool}
              />
            ) : null}
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FilmsTemplate;
