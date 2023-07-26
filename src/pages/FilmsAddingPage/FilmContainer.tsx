import React, { useContext, useEffect, useState } from "react";
import { filmAPI } from "../../services/FilmServises";
import FilmItem from "../../components/FilmItem/FilmItem";
import { IFilm } from "../../models/IFilm";
import { NumbersContext } from "../../context";
import cl from "./_FilmContainer.module.scss";
import AnimatedPage from "../AnimatedPage";

const FilmContainer = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState<number | string>(0);
  const [createFilm, {}] = filmAPI.useCreateFilmMutation();
  const [updateFilm, {}] = filmAPI.useUpdateFilmMutation();
  const [deleteFilm, {}] = filmAPI.useRemoveFilmMutation();
  const { data: films } = filmAPI.useFetAllFilmsQuery(100);
  const { numbers, allFilms, setAllFilms } = useContext(NumbersContext);

  const handleCreate = async (event: any) => {
    event.preventDefault();
    const setNum = Number(value);
    await createFilm({
      title: title,
      author: author,
      value: 1 * setNum,
      chance: 1,
    } as IFilm);
    setAuthor("");
    setTitle("");
    setValue("");
  };

  const handleUpdate = (film: IFilm) => {
    updateFilm(film);
  };

  const handleDelete = (film: IFilm) => {
    deleteFilm(film);
  };
  return (
    <AnimatedPage>
      <div className={cl.filmConteinerWrapp}>
        {allFilms &&
          allFilms.map((film) => (
            <div key={film.id}>
              <FilmItem
                allFilms={allFilms}
                remove={handleDelete}
                update={handleUpdate}
                film={film}
              />
            </div>
          ))}
        <form>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название фильма"
            value={title}
          />
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Автор"
            value={author}
          />
          <input
            type="number"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Шанс на победу"
            value={value}
          />
          <button onClick={handleCreate}>Добавить</button>
        </form>
      </div>
    </AnimatedPage>
  );
};

export default FilmContainer;
