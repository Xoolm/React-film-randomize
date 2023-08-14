import { useContext, useMemo, useState } from "react";
import { NumbersContext } from "../../../context";
import Mystery from "./_MysteryCardWrapp.module.scss";
import MysteryCard from "./components/MysteryCard";
import { IFilm } from "../../../models/IFilm";

const MysteryCardWrapp = () => {
  const { allFilms } = useContext(NumbersContext);
  const [mysteryCard, setMysteryCard] = useState<IFilm[]>();
  useMemo(() => setMysteryCard(allFilms), [allFilms]);
  const shuffle = (array: IFilm[]) => {
    let m = mysteryCard?.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };
  shuffle(mysteryCard!);

  return (
    <div className={Mystery.mysteryCardWrapp}>
      {mysteryCard &&
        mysteryCard.map((film) => <MysteryCard key={film.id} film={film} />)}
    </div>
  );
};

export default MysteryCardWrapp;
