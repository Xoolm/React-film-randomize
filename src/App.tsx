import { NumbersContext } from "./context";
import "./style/main.css";
import { IFilm } from "./models/IFilm";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./router";
import { AnimatePresence } from "framer-motion";
import Header from "./layouts/Header/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Footer from "./layouts/Footer/Footer";
import { Suspense, useMemo, useState } from "react";
import ScrollToTop from "./router/ScrollToTop";
import { CircularProgress } from "@mui/material";
import { IFilmLobby } from "./models/IFilmLobby";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  // хранилище глобальных состояний для игры в лобби
  const [lobby, setLobby] = useState(false);
  const [lobbyAllFilms, setLobbyAllFilms] = useState<IFilmLobby[]>([]);
  const [lobbyFilmsPlate, setLobbyFilmsPlate] = useState<IFilmLobby[]>([]);
  useMemo(() => setLobbyFilmsPlate(lobbyAllFilms), [lobbyAllFilms]);
  // хранилище глобальных состояний для соло игры
  const [allFilms, setAllFilms] = useLocalStorage([], "allFilms");
  const [filmPlate, setFilmPlate] = useState<IFilm[]>([]);
  useMemo(() => setFilmPlate(allFilms), [allFilms]);
  // сбор массива с id для рандомизации (соло)
  const numbers: number[] = [];
  filmPlate &&
    filmPlate.forEach((film: IFilm) => {
      for (let i = 0; i < film.quantity; i++) {
        numbers.push(film.id);
      }
    });
  // сбор массива с id для рандомизации (лобби)
  const numbersLobby: number[] = [];
  lobbyFilmsPlate &&
    lobbyFilmsPlate.forEach((film: IFilm) => {
      for (let i = 0; i < film.quantity; i++) {
        numbersLobby.push(film.id);
      }
    });
  const location = useLocation();
  return (
    <div className="App">
      <NumbersContext.Provider
        value={{
          socket,
          lobby,
          setLobby,
          numbers,
          numbersLobby,
          allFilms,
          setAllFilms,
          filmPlate,
          setFilmPlate,
          lobbyAllFilms,
          setLobbyAllFilms,
          lobbyFilmsPlate,
          setLobbyFilmsPlate,
        }}
      >
        <Header />
        <AnimatePresence mode="wait">
          <ScrollToTop>
            <Routes key={location.pathname} location={location}>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  element={
                    <Suspense
                      fallback={
                        <p
                          style={{
                            color: "rgb(73, 127, 145)",
                            height: "100vh",
                            width: "100vw",
                            textAlign: "center",
                          }}
                        >
                          {" "}
                          <CircularProgress sx={{ mt: "150px" }} />
                        </p>
                      }
                    >
                      <route.element />
                    </Suspense>
                  }
                  path={route.path}
                />
              ))}
              <Route path="*" element={<Navigate to="/Home" />} />
            </Routes>
          </ScrollToTop>
        </AnimatePresence>
        <Footer />
      </NumbersContext.Provider>
    </div>
  );
}

export default App;
