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

const FilmsTemplate = () => {
  const [game, setGame] = useState<any>(0);
  const { allFilms } = useContext(NumbersContext);
  const [filmPlate, setFilmPlate] = useState<IFilm[]>([]);
  const [winner, setWinner] = useState(false);
  useMemo(() => setFilmPlate(allFilms), [allFilms]);
  const numbers: number[] = [];
  filmPlate &&
    filmPlate.forEach((film) => {
      for (let i = 0; i < 100; i++) {
        numbers.push(film.id);
      }
    });
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
            className={Games.selectGame}
            options={options}
            value={game}
            onChange={setGame}
            placeholder="Выберите вид игры"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderRadius: "20px",
                padding: "5px 30px",
              }),
            }}
          />
          <div className={Games.templateWrapp}>
            {game.value === 1 ? (
              <RandomCardOutWrapp
                filmPlate={filmPlate}
                numbers={numbers}
                setFilmPlate={setFilmPlate}
                winner={winner}
              />
            ) : null}
            {game.value === 3 ? (
              <MysteryCardWrapp
                filmPlate={filmPlate}
                setFilmPlate={setFilmPlate}
                winner={winner}
              />
            ) : null}
            {game.value === 2 ? (
              <RandomWheelWrapp
                winner={winner}
                filmPlate={filmPlate}
                numbers={numbers}
                setFilmPlate={setFilmPlate}
              />
            ) : null}
            {game.value === 0 ? (
              <h3 style={{ color: "white" }}>Выберите игру</h3>
            ) : null}
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FilmsTemplate;
