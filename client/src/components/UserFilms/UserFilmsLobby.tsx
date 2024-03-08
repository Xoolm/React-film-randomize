import { FC, useContext, useMemo, useState } from "react";
import { NumbersContext } from "../../context";
import Users from "./_UserFilms.module.scss";
import item from "../FilmItem/_FilmItem.module.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AddFilmFormLobby from "../AddFilmForm/AddFilmFormLobby";
import FilmItemLobby from "../FilmItem/FilmItemLobby";
import { IUserLobby } from "../../models/IUserLobby";
import { IFilmLobby } from "../../models/IFilmLobby";

interface UserDataLobby {
  user: IUserLobby;
  userLocal: IUserLobby;
  filmSession: IFilmLobby[];
  setFilmSession: () => void;
}
const UserFilmsLobby: FC<UserDataLobby> = ({
  user,
  userLocal,
  filmSession,
  setFilmSession,
}) => {
  const { lobbyAllFilms } = useContext(NumbersContext);
  const [userFilms, setUserFilms] = useState<IFilmLobby[]>();

  // фильтрация всех фильмов на фильмы конкретного пользователя
  useMemo(
    () => setUserFilms(lobbyAllFilms.filter((film) => film.userID === user.id)),
    [lobbyAllFilms]
  );

  return (
    <div className={Users.userWrapper}>
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
              <FilmItemLobby film={film} userLocal={userLocal} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      {user.id === userLocal.id ? (
        <AddFilmFormLobby
          user={user}
          filmSession={filmSession}
          setFilmSession={setFilmSession}
        />
      ) : null}
    </div>
  );
};

export default UserFilmsLobby;
