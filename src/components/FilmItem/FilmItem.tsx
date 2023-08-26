import React, { FC, useContext, useEffect, useState } from "react";
import { IFilm } from "../../models/IFilm";
import item from "./_FilmItem.module.scss";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";
import { NumbersContext } from "../../context";

interface FilmItemProps {
  film: IFilm;
}

const FilmItem: FC<FilmItemProps> = ({ film }) => {
  const { allFilms, setAllFilms, numbers } = useContext(NumbersContext);
  const [editInput, setEditInput] = useState(false);
  const [title, setTitle] = useState(film.option);
  const [value, setValue] = useState(film.value);

  const handlePlus = () => {
    if (value <= 9) {
      setValue((prev) => prev + 1);
    }
  };
  const handleMinus = () => {
    if (value >= 2) {
      setValue((prev) => prev - 1);
    }
  };
  const handleRemove = (e: React.MouseEvent) => {
    setAllFilms(allFilms.filter((item) => item.id !== film.id));
  };

  const hanldeUpdate = (e: React.MouseEvent) => {
    const updateFilms = allFilms.map((item) => {
      if (film.id === item.id) {
        return {
          ...item,
          option: title,
          optionSize: 11 - value,
          value: value,
          quantity: Math.floor(110 - value * 10),
        };
      } else {
        return item;
      }
    });
    setAllFilms(updateFilms);
    setEditInput(false);
  };

  const chance = Math.round((film.quantity / numbers.length) * 100);

  return (
    <div className={item.filmWrapp}>
      {editInput ? (
        <div className={item.FormWrapper}>
          <form className={item.FormWrapper__form}>
            <input
              className={item.inputTitle}
              placeholder="Название"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className={item.counterWrapp}>
              <Fab className={item.counterWrapp__plus} onClick={handlePlus}>
                <AddIcon />
              </Fab>
              <div className={item.counterWrapp__display}>{value}</div>
              <Fab className={item.counterWrapp__minus} onClick={handleMinus}>
                <RemoveIcon />
              </Fab>
            </div>
            <div className={item.formButtons}>
              <Fab
                color="info"
                className={item.FormWrapper__edit}
                size="small"
                aria-label="edit"
                onClick={hanldeUpdate}
              >
                <CheckIcon className={item.edit__icon} />
              </Fab>
              <Fab
                className={item.FormWrapper__close}
                onClick={() => setEditInput(false)}
                size="small"
                aria-label="add"
              >
                <CloseIcon className={item.close__icon} />
              </Fab>
            </div>
          </form>
        </div>
      ) : (
        <>
          <h2 className={item.filmWrapp__title}>{film.option}</h2>

          <Fab
            color="info"
            className={item.edit}
            size="small"
            aria-label="edit"
            onClick={() => setEditInput(true)}
          >
            <EditIcon className={item.filmWrapp__edit__icon} />
          </Fab>
          <Fab
            size="small"
            className={item.filmWrapp__remove}
            onClick={handleRemove}
          >
            <DeleteIcon className={item.filmWrapp__remove__icon} />
          </Fab>
          <div className={item.chanceWrapp}>
            <p className={item.filmFactor}>{film.value} | </p>
            <p className={item.filmChance}>| {chance} %</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FilmItem;
