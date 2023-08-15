import { useEffect, useState } from "react";
import { NumbersContext } from "./context";
import "./style/main.css";
import { IFilm } from "./models/IFilm";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./router";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [allFilms, setAllFilms] = useLocalStorage([], "allFilms");
  const numbers: number[] = [];

  allFilms &&
    allFilms.forEach((film: IFilm) => {
      for (let i = 0; i < 100 / film.optionSize; i++) {
        numbers.push(film.id);
      }
    });

  useEffect(() => {
    if (allFilms) {
      const updatedFilms = allFilms.map((film: IFilm) => {
        const percentage = Math.floor(
          (film.optionSize / numbers.length) * 10000
        );
        return { ...film, chance: percentage };
      });
      setAllFilms(updatedFilms);
    }
  }, [numbers.length, setAllFilms]);

  const location = useLocation();
  return (
    <div className="App">
      <NumbersContext.Provider value={{ numbers, allFilms, setAllFilms }}>
        <Header />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            {routes.map((route) => (
              <Route
                key={route.path}
                element={<route.element />}
                path={route.path}
              />
            ))}
            <Route path="*" element={<Navigate to="/HomePage" />} />
          </Routes>
        </AnimatePresence>
      </NumbersContext.Provider>
    </div>
  );
}

export default App;
