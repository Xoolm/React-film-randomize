import React, { FC, useState } from "react";
import { IFilm } from "../../models/IFilm";
import Modal from "../UI/modal/Modal";
import cl from "./_FilmItem.module.scss";

interface FilmItemProps {
  film: IFilm;
  update: (film: IFilm) => void;
  remove: (film: IFilm) => void;
  allFilms: IFilm[];
}

const FilmItem: FC<FilmItemProps> = ({ film, update, remove, allFilms }) => {
  const [modalActive, setModalActive] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [value, setValue] = useState<number | string>();

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(film);
  };

  const hanldeUpdate = async (e: React.MouseEvent) => {
    e.preventDefault();
    const setNum = Number(value);
    update({
      ...film,
      author: author,
      title: title,
      value: 1 * setNum,
    });
  };

  return (
    <div className={cl.filmWrapp}>
      <div className={cl.filmWrapp__author}>({film.author})</div>
      <h2 className={cl.filmWrapp__title}>{film.title}</h2>
      <div className={cl.filmWrapp__chance}>
        шанс на победу:( {film.chance}% )
      </div>
      <span className={cl.filmWrapp__remove} onClick={handleRemove}>
        X
      </span>
      <button onClick={() => setModalActive(true)}>редактировать</button>
      <Modal visible={modalActive} setVisible={setModalActive}>
        <form>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={hanldeUpdate}>редактировать</button>
        </form>
      </Modal>
    </div>
  );
};

export default FilmItem;
