import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { IUser } from "../../models/IUser";
import FilmItem from "../FilmItem/FilmItem";
import { IFilm } from "../../models/IFilm";
import { filmAPI } from "../../services/FilmServises";
import { NumbersContext } from "../../context";
import Users from "./_UserFilms.module.scss";
import item from "../FilmItem/_FilmItem.module.scss";
import addForm from "../AddFilmForm/_AddFilmForm.module.scss";
import { IconButton } from "@mui/material";
import AddFilmForm from "../AddFilmForm/AddFilmForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";
interface UserData {
  user: IUser;
}

const UserFilms: FC<UserData> = ({ user }) => {
  const [removeUser, {}] = filmAPI.useRemoveUserMutation();
  const [removeUserFilms, {}] = filmAPI.useRemoveUserFilmsMutation();
  const [allFilms, setAllFilms] = useState<IFilm[]>();
  const { data: films } = filmAPI.useGetFilmsQuery(user.id);
  const { numbers } = useContext(NumbersContext);
  useMemo(() => setAllFilms(films), [films]);

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    films &&
      films.map((film) => {
        removeUserFilms(film);
      });
    removeUser(user);
  };

  useEffect(() => {
    if (allFilms) {
      const updatedFilms = allFilms.map((film) => {
        const percentage = Math.floor((film.value / numbers.length) * 10000);
        return { ...film, chance: percentage };
      });
      setAllFilms(updatedFilms);
    }
  }, [films]);

  return (
    <div className={Users.userWrapper}>
      <IconButton
        className={Users.userWrapper__remove}
        aria-label="delete"
        onClick={handleRemove}
      >
        X
      </IconButton>
      <div className={Users.userWrapper__title}>{user.name}</div>
      <TransitionGroup component="div">
        {allFilms &&
          allFilms.map((film) => (
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
