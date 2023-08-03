import React, { FC, useState } from "react";
import { IFilm } from "../../models/IFilm";
import Modal from "../UI/modal/Modal";
import item from "./_FilmItem.module.scss";
import { filmAPI } from "../../services/FilmServises";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

interface FilmItemProps {
  film: IFilm;
}

const FilmItem: FC<FilmItemProps> = ({ film }) => {
  const [updateFilm, {}] = filmAPI.useUpdateFilmMutation();
  const [deleteFilm, {}] = filmAPI.useRemoveFilmMutation();
  const [editInput, setEditInput] = useState(false);
  // const [modalActive, setModalActive] = useState(false);
  const [title, setTitle] = useState(film.option);
  // const [value, setValue] = useState<number | string>(film.value);

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteFilm(film);
  };

  const hanldeUpdate = async (e: React.MouseEvent) => {
    e.preventDefault();
    setEditInput(false);
    // const setNum = Number(value);
    updateFilm({
      ...film,
      option: title,
      // value: 1 * setNum,
    });
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
        </>
      )}
    </div>
  );
};

export default FilmItem;
