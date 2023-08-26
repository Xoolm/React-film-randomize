import Games from "./_Games.module.scss";
import AnimatedPage from "../AnimatedPages";
import { Container } from "@mui/material";
import RandomWheelWrapp from "../../components/Games/Random_wheel/RandomWheelWrapp";
import RandomCardOutWrapp from "../../components/Games/Random_card_out/RandomCardOutWrapp";
import { useContext, useEffect, useMemo, useState } from "react";
import MysteryCardWrapp from "../../components/Games/MysteryCardWrapp/MysteryCardWrapp";
import { NumbersContext } from "../../context";
import { IFilm } from "../../models/IFilm";
import Select from "react-select";
import "../../style/_custom-select.scss";

const FilmsTemplate = () => {
  const [game, setGame] = useState<any>(0);
  const { allFilms, filmPlate } = useContext(NumbersContext);
  const [winner, setWinner] = useState(false);
  useEffect(() => {
    if (filmPlate.length === 0) {
      setGame(4);
    }
  }, [game]);

  const options = [
    { value: 1, label: "Карточки на выбывание" },
    { value: 2, label: "Колесо рандома" },
    { value: 3, label: "Выбор карточек" },
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
            placeholder={game === 0 ? "Выберите вид игры" : "Добавьте фильмы"}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderRadius: "20px",
                padding: "5px 30px",
              }),
            }}
          />
          <div className={Games.templateWrapp}>
            <div className={Games.alert}>
              {game === 0 ? <h3>Выберите игру</h3> : null}
              {game === 4 ? <h3>Вы не добавили ни одного фильма</h3> : null}
              {game === 5 ? (
                <h3>Добавление одного фильма не имеет смысла, одумайтесь!</h3>
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
