import "./_Header.scss";
import { useEffect, useState } from "react";
import Logo from "./image/logomovie.svg";
import FilmReel from "./image/film_reel.svg";
import NavBar from "../navBar/NavBar";
import { useTranslation } from "react-i18next";
import { ReactComponent as RUS } from "../navBar/img/ru.svg";
import { ReactComponent as EN } from "../navBar/img/us.svg";
import "../../style/_Language-change-select.scss";
import {
  ListItemIcon,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

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
  console.log(value);
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

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
      <Select
        value={value}
        onChange={handleChange}
        className="LanguageChangeSelect_header"
      >
        <MenuItem value={1}>
          <ListItemIcon>
            <RUS />
          </ListItemIcon>
        </MenuItem>
        <MenuItem value={2}>
          <ListItemIcon>
            <EN />
          </ListItemIcon>
        </MenuItem>
      </Select>
    </div>
  );
}

export default Header;
