import "./_Header.scss";
import { Button } from "@mui/material";
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

function Header() {
  // const [state, setState] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   if (location.pathname === "/HomePage") {
  //     setState(true);
  //   } else {
  //     return;
  //   }
  // }, [location]);

  // console.log(state);

  const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, "to">>(
    (props, ref) => <RouterLink ref={ref} to="/" {...props} />
  );
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" width="300" />
      <div className="menu">
        <Button className="navLink__btn" color="inherit">
          <NavLink to="/HomePage">Home</NavLink>
        </Button>
        <Button className="navLink__btn" color="inherit">
          <NavLink to="/addingFilms">Adding</NavLink>
        </Button>
        <Button className="navLink__btn" color="inherit">
          <NavLink to="/choiceFilms">Game</NavLink>
        </Button>
      </div>

      <img src={FilmReel} alt="logo2" width="260" />
    </div>
  );
}

export default Header;
