import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { IUser } from "../../models/IUser";
import FilmItem from "../FilmItem/FilmItem";
import { IFilm } from "../../models/IFilm";
import { filmAPI } from "../../services/FilmServises";
import { NumbersContext } from "../../context";
import Users from "./_UserFilms.module.scss";
import item from "../FilmItem/_FilmItem.module.scss";
import { IconButton } from "@mui/material";
import AddFilmForm from "../AddFilmForm/AddFilmForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface UserData {
  user: IUser;
  onDelete: (id: number) => void;
}
const UserFilms: FC<UserData> = ({ user, onDelete }) => {
  const { allFilms } = useContext(NumbersContext);
  const [userFilms, setUserFilms] = useState<IFilm[]>();
  useMemo(
    () => setUserFilms(allFilms.filter((film) => film.userID === user.id)),
    [allFilms]
  );
  return (
    <div className={Users.userWrapper}>
      <IconButton
        className={Users.userWrapper__remove}
        aria-label="delete"
        onClick={() => onDelete(user.id)}
      >
        X
      </IconButton>
      <div className={Users.userWrapper__title}>{user.userName}</div>
      <TransitionGroup component="div">
        {userFilms &&
          userFilms.map((film) => (
            <CSSTransition
              key={film.id}
              classNames={{
                enterActive: item.enterActive,
                enterDone: item.enterDone,
                exitActive: item.exitActive,
              }}
              timeout={{
                exit: 250,
              }}
            >
              <FilmItem film={film} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      <AddFilmForm user={user} />
    </div>
  );
};

export default UserFilms;
