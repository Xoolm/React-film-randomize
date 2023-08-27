import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          navBar: {
            home: "Home",
            adding: "Adding",
            games: "Games",
          },
          firstPage: {
            button: "Start",
          },
          addingPage: {
            rules: {
              rules: "Rules of the game:",
              added: "Add Players",
              selected: "Select a list of movies for each player",
            },
            button: "Start",
          },
          gamesPage: {
            select: {
              eliminationCards: "Elimination cards",
              randomWheel: "Random Wheel",
              choiceCard: "Choice card",
              placeholder1: "Choose The Type Of Game",
              placeholder2: "addMovies",
            },
            addingMessage: {
              chooseAGame: "Choose a game",
              YouHaveNotAddedAnyMovies: "You have not added any movies",
              addingOneMovieDoesNotMakeSense:
                "Adding one movie does not make sense, change your mind!",
            },
            randomCardOutWrapp: {
              button: "Choose a winner",
            },
            randomWheel: {
              button: "Choose a winner",
            },
          },
        },
      },
      ru: {
        translation: {
          navBar: {
            home: "Главная",
            adding: "Добавить",
            games: "Игры",
          },
          firstPage: {
            button: "Начать",
          },
          addingPage: {
            rules: {
              rules: "Правила игры:",
              added: "Добавьте игроков",
              selected: "Выберите список фильмов для каждого игрока",
            },
            button: "Начать",
          },
          gamesPage: {
            select: {
              eliminationCards: "Карты на выбывание",
              randomWheel: "Колесо рандома",
              choiceCard: "Выбор карточек",
              placeholder1: "Выберите вид игры",
              placeholder2: "Добавьте фильмы",
            },
            addingMessage: {
              chooseAGame: "Выберите игру",
              YouHaveNotAddedAnyMovies: "Вы не добавили ни одного фильма",
              addingOneMovieDoesNotMakeSense:
                "Добавление одного фильма не имеет смысла, одумайтесь!",
            },
            randomCardOutWrapp: {
              button: "Выбрать победителя",
            },
            randomWheel: {
              button: "Выбрать победителя",
            },
          },
        },
      },
    },
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
