import Games from "./_Games.module.scss";
import AnimatedPage from "../AnimatedPages";
import { Container } from "@mui/material";
import RandomWheelWrapp from "../../components/Games/Random_wheel/RandomWheelWrapp";
import RandomCardOutWrapp from "../../components/Games/Random_card_out/RandomCardOutWrapp";
import { useContext, useMemo, useState } from "react";
import MysteryCardWrapp from "../../components/Games/MysteryCardWrapp/MysteryCardWrapp";
import { NumbersContext } from "../../context";
import { IFilm } from "../../models/IFilm";

const FilmsTemplate = () => {
  const [game, setGame] = useState<number>(1);
  const { allFilms } = useContext(NumbersContext);
  const [filmPlate, setFilmPlate] = useState<IFilm[]>([]);
  useMemo(() => setFilmPlate(allFilms), [allFilms]);
  const numbers: number[] = [];
  filmPlate &&
    filmPlate.forEach((film) => {
      for (let i = 0; i < 100; i++) {
        numbers.push(film.id);
      }
    });

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
          <select
            className={Games.selectGame}
            value={game}
            onChange={(e) => setGame(Number(e.target.value))}
          >
            <option value={1}>Карточки на выбывание</option>
            <option value={2}>Колесо рандома</option>
            <option value={3}>Выбор карточек</option>
          </select>
          <div className={Games.templateWrapp}>
            {game === 1 ? (
              <RandomCardOutWrapp
                filmPlate={filmPlate}
                numbers={numbers}
                setFilmPlate={setFilmPlate}
              />
            ) : null}
            {game === 3 ? <MysteryCardWrapp /> : null}
            {game === 2 ? (
              <RandomWheelWrapp
                filmPlate={filmPlate}
                numbers={numbers}
                setFilmPlate={setFilmPlate}
              />
            ) : null}
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FilmsTemplate;
