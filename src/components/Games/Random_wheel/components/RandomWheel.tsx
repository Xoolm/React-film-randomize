import { FC } from "react";
import { Wheel } from "react-custom-roulette";
import { IFilm } from "../../../../models/IFilm";

const data = [
  { option: "Солнцестояние" },
  { option: "Реинкарнация" },
  { option: "Пила" },
  { option: "Черная дыра" },
  { option: "Дом который построил Джек" },
  { option: "Меню" },
  { option: "Завтрак у тиффани" },
  { option: "Ешь молись люби" },
  { option: "Вассаби" },
  { option: "Земляничная поляна" },
  { option: "1" },
  { option: "2" },
];

interface WheelProps {
  filmPlate: any;
  prizeNumber: number;
  mustSpin: boolean;
  setMustSpin: (arg0: boolean) => void;
}

const RandomWheel: FC<WheelProps> = ({
  filmPlate,
  prizeNumber,
  mustSpin,
  setMustSpin,
}) => {
  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={filmPlate}
        outerBorderWidth={1}
        radiusLineWidth={1}
        innerRadius={11}
        fontSize={11}
        textDistance={61}
        backgroundColors={["#020518"]}
        textColors={["white"]}
        innerBorderColor={"red"}
        radiusLineColor={"#ec8dc7"}
        outerBorderColor={"rgba(238, 141, 200, 1)"}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
    </>
  );
};

export default RandomWheel;
