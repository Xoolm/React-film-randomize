import { useContext, useEffect, useState } from "react";
import Adding from "./_Adding.module.scss";
import AnimatedPage from "../AnimatedPages";
import { Button, Container } from "@mui/material";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Users from "../../components/UserFilms/_UserFilms.module.scss";
import { NumbersContext } from "../../context";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Modal from "../../components/UI/modal/Modal";
import { useParams } from "react-router-dom";
import UserFilmsLobby from "../../components/UserFilms/UserFilmsLobby";
import { IUserLobby } from "../../models/IUserLobby";
import { IFilmLobby } from "../../models/IFilmLobby";
import { useSessionStorage } from "../../hooks/useSessionStorage";

const FilmContainer = () => {
  const { lobbyAllFilms, setLobbyAllFilms, setLobby, socket } =
    useContext(NumbersContext);
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [usersLobby, setUsersLobby] = useState<IUserLobby[]>([]);
  const [userLocal, setUserLocal] = useSessionStorage([], "sessionUser");
  const [filmSession, setFilmSession] = useSessionStorage([], "sessionFilms");
  const params = useParams();
  // useEffect(() => {
  //   if (params.id) setLobby(true);
  // }, []);

  // обработка переподключения юзера после перезагрузки стр, и отправка данных на сервер
  useEffect(() => {
    if ("userName" in userLocal) {
      const SessionstorageUser = {
        ...userLocal,
        socketID: socket.id,
      };
      const updateFilmSession = filmSession.map((film: IFilmLobby[]) => {
        return { ...film, socketID: socket.id };
      });
      socket.emit("UserReconection", SessionstorageUser, updateFilmSession);
    } else {
      setVisible(true);
    }
  }, [socket]);

  // возвращение данных с сервера после реконета юзера
  useEffect(() => {
    socket.on("responseUserReconection", (data: IUserLobby[]) => {
      setUsersLobby(data);
    });
  }, [setLobbyAllFilms, socket, lobbyAllFilms]);

  // Подключение нового юзера
  useEffect(() => {
    socket.emit("join", params.id);
    socket.on("userConnected", (data: IFilmLobby) => console.log(data));
    socket.on(
      "responseNewUser",
      (UsersLobby: IUserLobby[], FilmsLobby: IFilmLobby[]) => {
        setUsersLobby(UsersLobby);
        setLobbyAllFilms(FilmsLobby);
      }
    );
    // обработчик дисконекта юзера
    socket.on("updateUserDisconnected", (data: IUserLobby[]) =>
      setUsersLobby(data)
    );
  }, [socket, userLocal]);

  // хендлер создания нового юзера
  const handleCreateUser = () => {
    const newUser = {
      lobbyID: params.id,
      id: Date.now() + 1,
      socketID: socket.id,
      userName: userName,
    };
    setUserLocal(newUser);
    setVisible(!visible);
    socket.emit("newUser", newUser);
  };

  // хендлер выхода из лобби
  const handleOut = () => {
    sessionStorage.removeItem("sessionUser");
    sessionStorage.removeItem("sessionFilms");
    socket.close();
  };

  const { t } = useTranslation();
  return (
    <AnimatedPage>
      <div className={Adding.FilmsAddingPage__background}>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <div className={Adding.titleContainer}>
            <h1>{t("addingPage.rules.rules")}</h1>
            <p>{t("addingPage.rules.added")}</p>
            <p>{t("addingPage.rules.selected")}</p>
            <Button
              className={Adding.adding__button}
              color="inherit"
              onClick={handleOut}
            >
              <NavLink to="/Home">Выйти</NavLink>
            </Button>
          </div>
          <TransitionGroup
            component="div"
            className={Adding.filmConteinerWrapp__users}
          >
            {usersLobby &&
              usersLobby.map((user: IUserLobby) => (
                <CSSTransition
                  key={user.id}
                  classNames={{
                    enterActive: Users.enterActive,
                    enterDone: Users.enterDone,
                    exitActive: Users.exitActive,
                  }}
                  timeout={{
                    exit: 250,
                  }}
                >
                  <UserFilmsLobby
                    user={user}
                    userLocal={userLocal}
                    filmSession={filmSession}
                    setFilmSession={setFilmSession}
                  />
                </CSSTransition>
              ))}
          </TransitionGroup>
          <Button className={Adding.adding__button} color="inherit">
            <NavLink to={`/Games/${params.id}`}>
              {t("addingPage.button")}
            </NavLink>
          </Button>
        </Container>
        <Modal visible={visible} setVisible={setVisible}>
          <h2>Введите псевдоним</h2>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleCreateUser}>Принять</button>
        </Modal>
      </div>
    </AnimatedPage>
  );
};

export default FilmContainer;
