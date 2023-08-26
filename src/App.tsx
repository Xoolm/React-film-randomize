import { NumbersContext } from "./context";
import "./style/main.css";
import { IFilm } from "./models/IFilm";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./router";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Footer from "./components/footer/Footer";
import { useMemo, useState } from "react";

function App() {
  const [allFilms, setAllFilms] = useLocalStorage([], "allFilms");
  const [filmPlate, setFilmPlate] = useState<IFilm[]>([]);
  useMemo(() => setFilmPlate(allFilms), [allFilms]);
  const numbers: number[] = [];

  filmPlate &&
    filmPlate.forEach((film: IFilm) => {
      for (let i = 0; i < film.quantity; i++) {
        numbers.push(film.id);
      }
    });

  const location = useLocation();
  return (
    <div className="App">
      <NumbersContext.Provider
        value={{ numbers, allFilms, setAllFilms, filmPlate, setFilmPlate }}
      >
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
        <Footer />
      </NumbersContext.Provider>
    </div>
  );
}

export default App;
