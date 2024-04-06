import { FC, useContext, useEffect, useRef, useState } from "react";
import { NumbersContext } from "../../../context";
import { getRandNum } from "../../../services/RandomOrgAPI";
import RandomWheel from "./components/RandomWheel";
import Wheel from "./_RandomWheelWrapp.module.scss";
import { Button } from "@mui/material";
import FilmWinner from "../../FilmWinner/FilmWinner";
import { useTranslation } from "react-i18next";
import { IFilm } from "../../../models/IFilm";
// @ts-ignore
import sound from "../../../assets/sound.wav";

interface RandomWheelProps {
  winner?: IFilm;
  winnerBool: boolean;
  setWinnerBool: (arg0: boolean) => void;
}

const RandomWheelWrapp: FC<RandomWheelProps> = ({
  winner,
  winnerBool,
  setWinnerBool,
}) => {
  const { t } = useTranslation();
  const { numbers, filmPlate, setFilmPlate, setAllFilms, allFilms } =
    useContext(NumbersContext);
  const [mustSpin, setMustSpin] = useState(false);
  const [idFIlmWinner, setIdFIlmWinner] = useState<any>();
  const [prizeNumber, setPrizeNumber] = useState<any>();
  const [getRandom, { data: random, isSuccess }] =
    getRandNum.useLazyGetRandNumQuery();
  const randomNum = random?.result?.random?.data;

  const [outFilm, setOutFilm] = useState<IFilm[]>([]);
  console.log(outFilm);

  const audio = new Audio(sound);

  const handleSpinClick = async () => {
    if (mustSpin) return;
    await getRandom(numbers?.length);
    setMustSpin(true);

    // setTimeout(() => {
    //   audio.play();
    // }, 1000);
    // setTimeout(() => {
    //   audio.pause();
    // }, 12000);
  };

  useEffect(() => {
    filmPlate?.map(() => {
      let index = filmPlate.findIndex((el) => el.id === numbers[randomNum!]);
      return setPrizeNumber(index);
    });
    setIdFIlmWinner(numbers[randomNum!]);

    isSuccess &&
      setTimeout(() => {
        setFilmPlate(filmPlate?.filter((film) => film.id !== idFIlmWinner));

        const OutFilm = [
          ...outFilm,
          ...filmPlate?.filter((film) => film.id === idFIlmWinner),
        ];
        setOutFilm(OutFilm);
      }, 12500);
  }, [random, idFIlmWinner]);

  return (
    <>
      {winnerBool ? (
        <div className={Wheel.randomWheelWrapp}>
          <FilmWinner winner={winner} />
        </div>
      ) : (
        <div className={Wheel.wrapper}>
          <ul className={Wheel.outFilmsList}>
            <p className={Wheel.titleOutFilms}>Lost movies:</p>
            <div className={Wheel.listWrapper}>
              {outFilm &&
                outFilm.map((film) => (
                  <li key={film.id} className={Wheel.outFilmItem}>
                    {film.option}
                  </li>
                ))}
            </div>
          </ul>
          <div className={Wheel.wheelWrapper}>
            <RandomWheel
              setMustSpin={setMustSpin}
              mustSpin={mustSpin}
              prizeNumber={prizeNumber}
              filmPlate={filmPlate}
            />
            <Button className={Wheel.addWinner} onClick={handleSpinClick}>
              {t("gamesPage.randomWheel.button")}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default RandomWheelWrapp;
