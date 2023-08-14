import "./_Header.scss";
import { Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  NavLink,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Logo from "./image/logomovie.svg";
import FilmReel from "./image/film_reel.svg";
import NavBar from "../navBar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
      <NavBar active={menuActive} setActive={setMenuActive} />
      <div
        className={menuActive ? "nav-icon3 open" : "nav-icon3"}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img className="logo2" src={FilmReel} alt="logo2" width="260" />
    </div>
  );
}

export default Header;
