import React from "react";
import { Link } from "react-router-dom";
import "./_NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__links">
        <Link to={"/addingFilms"}>Добавить</Link>
        <Link to={"/choiceFilms"}>Выбрать</Link>
      </div>
    </div>
  );
};

export default NavBar;