import React from "react";
import axios from "axios";

const TodayWeather = ({ data }) => {
  const { country, name, population } = data.city;
  const today = data.list[5];
  const { temp, humidity } = today.main;
  const { description, icon } = today.weather[0];

  return (
    <div style={{ display: "flex", width: "80vw", paddingLeft: "10vw" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "30vw" }}>
        <h2>{name}</h2>
        <span style={{ color: "gray" }}>{country}</span>
        <div>
          <p style={{ fontWeight: "bolder" }}>{description}</p>
        </div>
        <p>Humidity : {humidity}</p>
      </div>
      <div style={{ width: "30vw" }}>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="test"
        />
        <p style={{ fontWeight: "bolder" }}>{temp}°</p>
      </div>
    </div>
  );
};

export default TodayWeather;