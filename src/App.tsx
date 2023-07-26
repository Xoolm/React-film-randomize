import { useMemo, useState } from "react";
import { NumbersContext } from "./context";
import { filmAPI } from "./services/FilmServises";
import "./style/main.css";
import { IFilm } from "./models/IFilm";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./router";
import NavBar from "./components/navBar/NavBar";
import { AnimatePresence } from "framer-motion";

function App() {
  const { data: films } = filmAPI.useFetAllFilmsQuery(100);
  const [allFilms, setAllFilms] = useState<IFilm[]>();
  useMemo(() => setAllFilms(films), [films]);
  const numbers: number[] = [];
  allFilms &&
    allFilms.forEach((film) => {
      for (let i = 0; i < 100 / film.value; i++) {
        numbers.push(film.id);
      }
    });

  const location = useLocation();
  return (
    <div className="App">
      <NumbersContext.Provider value={{ numbers, allFilms, setAllFilms }}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            {routes.map((route) => (
              <Route
                key={route.path}
                element={<route.element />}
                path={route.path}
              />
            ))}
          </Routes>
        </AnimatePresence>
      </NumbersContext.Provider>
    </div>
  );
}

export default App;
