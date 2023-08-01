import React from "react";
import AnimatedPage from "../AnimatedPage";
import "./_StartPage.scss";

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
            <button>начать</button>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default StartPage;
