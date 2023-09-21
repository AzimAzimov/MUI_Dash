import React from "react";

import scss from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={scss.preloader_container}>
      <div className={scss.spinner__loading__container}>
        <div className={scss.spinner__loading}>
          <div className={`${scss.inner} ${scss.one}`}></div>
          <div className={`${scss.inner} ${scss.two}`}></div>
          <div className={`${scss.inner} ${scss.three}`}></div>
        </div>
      </div>
    </div>
  );
};

export { Preloader };
