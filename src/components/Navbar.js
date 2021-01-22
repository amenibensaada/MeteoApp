import React from "react";
import classes from "./navbar.module.css";

const NavBarWeather = ({ goback, search }) => {
  return (
    <div className={classes.navbar}>
      <p
        onClick={goback}
        style={{
          position: "absolute",
          cursor: "pointer",
          left: "5px",
          top: "0",
        }}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAWCAYAAAAb+hYkAAAABHNCSVQICAgIfAhkiAAAAGRJREFUOI3tzrEJhGAQROFPja4Jmzj4Y1MvEezKbi7SGizG1NjEQATBDQRBJ1lY5jEvE8sXVQRo8H+BBwBtFIABdRSCHt3Zcr7eHyaM+EQXE2ZX6OYH/5voHunts9UtsuBiQrkAJcoZhALYVFMAAAAASUVORK5CYII="
          alt="goback"
        />
      </p>

      <p style={{ position: "absolute", right: "5px", top: "0" }}>{search}</p>
    </div>
  );
};

export default NavBarWeather;
