import { NumbersContext } from "./context";
import "./style/main.css";
import { IFilm } from "./models/IFilm";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./router";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Footer from "./components/footer/Footer";
import { Suspense, useMemo, useState } from "react";
import ScrollToTop from "./router/ScrollToTop";
import { CircularProgress } from "@mui/material";

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
              <Route path="*" element={<Navigate to="/HomePage" />} />
            </Routes>
          </ScrollToTop>
        </AnimatePresence>
        <Footer />
      </NumbersContext.Provider>
    </div>
  );
}

export default App;
