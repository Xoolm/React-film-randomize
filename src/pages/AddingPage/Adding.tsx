import React, { useState } from "react";
import { filmAPI } from "../../services/FilmServises";
import Adding from "./_Adding.module.scss";
import AnimatedPage from "../AnimatedPages";
import UserFilms from "../../components/UserFilms/UserFilms";
import { IUser } from "../../models/IUser";
import { Container, Fab } from "@mui/material";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import Users from "../../components/UserFilms/_UserFilms.module.scss";
import AddUserForm from "../../components/AddUserFrom/AddUserForm";

const FilmContainer = () => {
  const { data: users } = filmAPI.useGetUsersQuery(100);

  return (
    <AnimatedPage>
      <div className={Adding.FilmsAddingPage__background}>
        <Container maxWidth="lg">
          <div className={Adding.titleContainer}>
            <h1>Правила игры:</h1>
            <p>Добавьте игроков</p>
            <p>Выберите список фильмов для каждого игрока</p>
          </div>
          <TransitionGroup
            component="div"
            className={Adding.filmConteinerWrapp__users}
          >
            {users &&
              users.map((user) => (
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
                  <UserFilms user={user} />
                </CSSTransition>
              ))}
            <AddUserForm />
          </TransitionGroup>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FilmContainer;