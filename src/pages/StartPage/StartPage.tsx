import { NavLink } from "react-router-dom";
import AnimatedPage from "../AnimatedPages";
import "./_StartPage.scss";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const StartPage = () => {
  const { t } = useTranslation();
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
              <NavLink to="/addingFilms">{t("firstPage.button")}</NavLink>
            </Button>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default StartPage;
