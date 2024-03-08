import React, { FC, useContext, useEffect, useState } from "react";
import item from "./_FilmItem.module.scss";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";
import { NumbersContext } from "../../context";
import { IFilmLobby } from "../../models/IFilmLobby";
import { IUserLobby } from "../../models/IUserLobby";

interface FilmItemLobbyProps {
  userLocal: IUserLobby;
  film: IFilmLobby;
}

const FilmItemLobby: FC<FilmItemLobbyProps> = ({ film, userLocal }) => {
  const { lobbyAllFilms, setLobbyAllFilms, numbersLobby, socket } =
    useContext(NumbersContext);
  const [editInput, setEditInput] = useState(false);
  const [title, setTitle] = useState(film.option);
  const [value, setValue] = useState(film.value);

  // хендлеры увелечения или уменьшения value при редактировании фильма
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

  // обработчик ответа сервера на удаление фильма
  useEffect(() => {
    socket.on("responeFilmDelete", (data: IFilmLobby[]) =>
      setLobbyAllFilms(data)
    );
  }, [lobbyAllFilms, setLobbyAllFilms, socket]);

  // обработчик ответа сервера на измеение данных в фильме
  useEffect(() => {
    socket.on("responeFilmUpdate", (data: IFilmLobby[]) =>
      setLobbyAllFilms(data)
    );
  }, [lobbyAllFilms, setLobbyAllFilms, socket]);

  // хендлер на удаление фильма
  const handleRemove = (e: React.MouseEvent) => {
    socket.emit("filmDelete", film);
  };

  // хендлер на изменение данных в фильме
  const hanldeUpdate = (e: React.MouseEvent) => {
    const updateFilms = lobbyAllFilms.map((item) => {
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
    socket.emit("filmUpdate", updateFilms, film);
    setEditInput(false);
  };

  // расчет шанса на победу каждого фильма
  const chance = Math.round((film.quantity / numbersLobby.length) * 100);

  return (
    <div className={item.filmWrapp}>
      {editInput ? (
        <div className={item.FormWrapper}>
          <form className={item.FormWrapper__form}>
            <input
              maxLength={32}
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
          {film.userID === userLocal.id ? (
            <>
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
          ) : (
            <>
              <Fab
                style={{ opacity: "0", cursor: "default" }}
                color="info"
                className={item.edit}
                size="small"
                aria-label="edit"
              ></Fab>
              <Fab
                style={{ opacity: "0", cursor: "default" }}
                size="small"
                className={item.filmWrapp__remove}
              ></Fab>
            </>
          )}

          <div className={item.chanceWrapp}>
            <p className={item.filmFactor}>{film.value} | </p>
            <p className={item.filmChance}>| {chance} %</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FilmItemLobby;
