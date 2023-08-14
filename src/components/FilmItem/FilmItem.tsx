import React, { FC, useContext, useState } from "react";
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
  const { allFilms, setAllFilms } = useContext(NumbersContext);
  const [editInput, setEditInput] = useState(false);
  const [title, setTitle] = useState(film.option);
  const [optionSize, setOptionSize] = useState(film.optionSize);

  const handlePlus = () => {
    if (optionSize <= 9) {
      setOptionSize((prev) => prev + 1);
    }
  };
  const handleMinus = () => {
    if (optionSize >= 2) {
      setOptionSize((prev) => prev - 1);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    setAllFilms(allFilms.filter((item) => item.id !== film.id));
  };

  const hanldeUpdate = (e: React.MouseEvent) => {
    setAllFilms(
      allFilms.map((item) => {
        if (film.id === item.id) {
          return { ...item, option: title, optionSize: optionSize };
        } else {
          return item;
        }
      })
    );
    setEditInput(false);
  };

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
              <div className={item.counterWrapp__display}>{optionSize}</div>
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
            <p className={item.filmFactor}>{film.optionSize} | </p>
            <p className={item.filmChance}>| {film.chance} %</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FilmItem;
