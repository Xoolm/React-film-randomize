import { useContext, useState } from "react";
import Adding from "./_Adding.module.scss";
import AnimatedPage from "../AnimatedPages";
import UserFilms from "../../components/UserFilms/UserFilms";
import { IUser } from "../../models/IUser";
import { Button, Container } from "@mui/material";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Users from "../../components/UserFilms/_UserFilms.module.scss";
import AddUserForm from "../../components/AddUserFrom/AddUserForm";
import { NumbersContext } from "../../context";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FilmContainer = () => {
  const { allFilms, setAllFilms } = useContext(NumbersContext);
  const [users, setUsers] = useLocalStorage([], "users");

  const handleCreate = (userName: string) => {
    const newUser = {
      id: Date.now() + 1,
      userName: userName,
    };
    setUsers([...users, newUser]);
  };
  const handleDelete = (id: number) => {
    setUsers(users.filter((users: IUser) => users.id !== id));
    setAllFilms(allFilms.filter((film) => film.userID !== id));
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
          </div>
          <TransitionGroup
            component="div"
            className={Adding.filmConteinerWrapp__users}
          >
            {users &&
              users.map((user: IUser) => (
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
                  <UserFilms onDelete={handleDelete} user={user} />
                </CSSTransition>
              ))}
            <AddUserForm users={users} onCreate={handleCreate} />
          </TransitionGroup>
          <Button className={Adding.adding__button} color="inherit">
            <NavLink to="/choiceFilms">{t("addingPage.button")}</NavLink>
          </Button>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FilmContainer;
