import { NavLink } from "react-router-dom";
import AnimatedPage from "../AnimatedPages";
import "./_StartPage.scss";
import FilmContainer from "../AddingPage/Adding";
import { Button } from "@mui/material";

const StartPage = () => {
  return (
    <>
      <AnimatedPage>
        <div className="firstPageWrapper">
          <div className="ContentWrapper">
            <h1 className="ContentWrapper__title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit tenetur nam ipsum laudantium sequi, officia soluta
              praesentium voluptate placeat, quod nulla aspernatur repellat
              neque sunt magnam illum animi dolorum illo?
            </h1>
            <Button className="firstPage__button" color="inherit">
              <NavLink to="/addingFilms">Начать</NavLink>
            </Button>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default StartPage;
