import React, { FC } from "react";
import scss from "./Preloader.module.scss";

export const Preloader: FC = () => {
  return (
    <div className="preloader">
      <div className="preloader-box">
        <div id="spinningSquaresG">
          <div id="spinningSquaresG_1" className={scss.spinningSquaresG} />
          <div id="spinningSquaresG_2" className={scss.spinningSquaresG} />
          <div id="spinningSquaresG_3" className={scss.spinningSquaresG} />
          <div id="spinningSquaresG_4" className={scss.spinningSquaresG} />
          <div id="spinningSquaresG_5" className={scss.spinningSquaresG} />
          <div id="spinningSquaresG_6" className={scss.spinningSquaresG} />
          <div id="spinningSquaresG_7" className={scss.spinningSquaresG} />
          <div id="spinningSquaresG_8" className={scss.spinningSquaresG} />
        </div>
      </div>
    </div>
  );
};
