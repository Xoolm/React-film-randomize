import React, { FC } from "react";
import {
  NavLink,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import "./_NavBar.scss";
import { Button } from "@mui/material";

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}

const NavBar: FC<NavBarProps> = ({ active, setActive }) => {
  const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, "to">>(
    (props, ref) => <RouterLink ref={ref} to="/" {...props} />
  );
  console.log(active);
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <Button
          className="navLink__btn"
          color="inherit"
          onClick={() => setActive(false)}
        >
          <NavLink to="/HomePage">Home</NavLink>
        </Button>
        <Button
          className="navLink__btn"
          color="inherit"
          onClick={() => setActive(false)}
        >
          <NavLink to="/addingFilms">Adding</NavLink>
        </Button>
        <Button
          className="navLink__btn"
          color="inherit"
          onClick={() => setActive(false)}
        >
          <NavLink to="/choiceFilms">Game</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
