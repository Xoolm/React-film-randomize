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

const FilmsTemplate = () => {
  const { t } = useTranslation();
  const [game, setGame] = useState<any>(0);
  const { filmPlate } = useContext(NumbersContext);
  const [winner, setWinner] = useState(false);
  useEffect(() => {
    if (filmPlate.length === 0) {
      setGame(4);
    }
  }, [game]);

  const options = [
    { value: 1, label: t("gamesPage.select.eliminationCards") },
    { value: 2, label: t("gamesPage.select.randomWheel") },
    { value: 3, label: t("gamesPage.select.choiceCard") },
  ];

  useEffect(() => {
    if (filmPlate?.length === 1) {
      setTimeout(() => {
        setWinner(true);
      }, 3500);
    }
  }, [filmPlate]);

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
            {game.value === 1 ? <RandomCardOutWrapp winner={winner} /> : null}
            {game.value === 3 ? <MysteryCardWrapp winner={winner} /> : null}
            {game.value === 2 ? (
              <RandomWheelWrapp winner={winner} setWinner={setWinner} />
            ) : null}
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FilmsTemplate;
