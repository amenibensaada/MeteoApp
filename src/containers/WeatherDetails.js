import React, { useEffect, useState } from "react";
import classes from "../components/weather.module.css";
import NavBar from "../components/Navbar";
import TodayWeather from "../components/TodayWeather";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import WeatherDays from "../components/WeatherDays";

const WeatherDetails = () => {
  const { city } = useParams();
  const history = useHistory();
  const [data, setData] = useState();
  const [erreur, setErreur] = useState(false);
  const [dayslist, setDayslist] = useState([]);
  const [loading, setLoading] = useState(true);
  const apikey = "3d276dd0248a8f6d4a15500dc0dec11a";

  // Geeting Every day weather from 3h data every day
  const getEveryDayFirst3hoursWeather = (array) => {
    let count = 0;
    let result = [];
    array.forEach((element, index) => {
      if (index - 8 === count || (count === 0 && index === 0)) {
        count = index;

        result.push(element);
      }
    });
    return result;
  };
  useEffect(() => {
    retrieveDataFromApi(city);
  }, []);
  const retrieveDataFromApi = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`
      )
      .then((data) => {
        console.log("data", data.data);
        setDayslist(getEveryDayFirst3hoursWeather(data?.data?.list));
        setData(data.data);
        setLoading(false);
        setErreur(false);
      })
      .catch((e) => {
        console.log("erreur", e);
        setErreur(true);
        setLoading(false);
      });
  };
  const WeatherDaysList = dayslist.map((element) => {
    return <WeatherDays data={element} />;
  });

  return (
    <div>
      <NavBar
        goback={() => history.push("/")}
        search={
          <Input
            onChange={(city) => {
              retrieveDataFromApi(city);
            }}
          />
        }
      />
      {loading ? (
        <h1>loading</h1>
      ) : erreur ? (
        <h1>Wrong City or Connection problem</h1>
      ) : (
        <div>
          <TodayWeather data={data} />
          {WeatherDaysList}
        </div>
      )}
    </div>
  );
};
export default WeatherDetails;
