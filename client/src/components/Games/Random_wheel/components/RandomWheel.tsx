import { FC } from "react";
import { Wheel } from "react-custom-roulette";
import { IFilm } from "../../../../models/IFilm";

interface WheelProps {
  filmPlate: IFilm[];
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
        fontSize={10}
        textDistance={55}
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
