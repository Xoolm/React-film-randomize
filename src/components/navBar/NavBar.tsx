import React, { FC, useEffect, useState } from "react";
import {
  NavLink,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import "./_NavBar.scss";
import {
  Button,
  ListItemIcon,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ReactComponent as RUS } from "./img/ru.svg";
import { ReactComponent as EN } from "./img/us.svg";
import "../../style/_Language-change-select.scss";

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}

const NavBar: FC<NavBarProps> = ({ active, setActive }) => {
  const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, "to">>(
    (props, ref) => <RouterLink ref={ref} to="/" {...props} />
  );

  const { t, i18n } = useTranslation();
  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };
  const [value, setValue] = useState<any>(2);

  useEffect(() => {
    if (value === 1) {
      changeLanguage("ru");
    } else if (value === 2) {
      changeLanguage("en");
    }
  }, [value]);
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
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
          <NavLink to="/HomePage">{t("navBar.home")}</NavLink>
        </Button>
        <Button
          className="navLink__btn"
          color="inherit"
          onClick={() => setActive(false)}
        >
          <NavLink to="/addingFilms">{t("navBar.adding")}</NavLink>
        </Button>
        <Button
          className="navLink__btn"
          color="inherit"
          onClick={() => setActive(false)}
        >
          <NavLink to="/choiceFilms">{t("navBar.games")}</NavLink>
        </Button>
        <Select
          value={value}
          onChange={handleChange}
          className="LanguageChangeSelect"
        >
          <MenuItem value={2}>
            <ListItemIcon>
              <EN />
            </ListItemIcon>
          </MenuItem>
          <MenuItem value={1}>
            <ListItemIcon>
              <RUS />
            </ListItemIcon>
          </MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default NavBar;
