import "./_Header.scss";
import { useEffect, useState } from "react";
import Logo from "../../images/Header/logomovie.svg";
import FilmReel from "../../images/Header/film_reel.svg";
import NavBar from "./components/NavBar";
import { useTranslation } from "react-i18next";
import { ReactComponent as RUS } from "../../images/Header/ru.svg";
import { ReactComponent as EN } from "../../images/Header/us.svg";
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
        <span className="burgerLine"></span>
        <span className="burgerLine"></span>
        <span className="burgerLine"></span>
        <span className="burgerLine"></span>
      </div>
      <img className="logo2" src={FilmReel} alt="logo2" width="260" />
      <Select
        value={value}
        onChange={handleChange}
        className="LanguageChangeSelect_header"
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
  );
}

export default Header;
