import Games from "./_Games.module.scss";
import AnimatedPage from "../AnimatedPages";
import { Container } from "@mui/material";
import RandomWheelWrapp from "../../components/Games/Random_wheel/RandomWheelWrapp";
import RandomCardOutWrapp from "../../components/Games/Random_card_out/RandomCardOutWrapp";
import { useState } from "react";

const FilmsTemplate = () => {
  const [game, setGame] = useState<number>(1);

  return (
    <AnimatedPage>
      <div className={Games.FilmsChoisePage__background}>
        <Container sx={{ mt: "40px" }}>
          <div className={Games.templateWrapp}>
            <div className={Games.filmsWrapp}>
              {game === 1 ? <RandomCardOutWrapp /> : null}
            </div>
            {game === 2 ? <RandomWheelWrapp /> : null}
          </div>
        </Container>
        <select value={game} onChange={(e) => setGame(Number(e.target.value))}>
          <option value={1}>Карточки на выбывание</option>
          <option value={2}>Колесо рандома</option>
        </select>
      </div>
    </AnimatedPage>
  );
};

export default FilmsTemplate;
