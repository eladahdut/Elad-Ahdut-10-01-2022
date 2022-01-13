import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getFiveDays } from "../API/getApi";
import { actionCreators } from "../state/index";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function InfoCard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { updateForecast, addToFavorites, delFromFavorites } =
    bindActionCreators(actionCreators, dispatch);
  const [flag, setFlag] = useState(false);

  const cityName = state?.weatherObject?.currLocation;
  const temp = state?.weatherObject?.currCondition[0]?.Temperature.Metric.Value;
  const tempText = state?.weatherObject?.currCondition[0]?.WeatherText;
  const forecast = state?.weatherObject?.forecast.DailyForecasts;
  const nonCapital = {
    "text-transform": "none",
  };

  useEffect(() => {
    async function fetchFiveDaysForecast() {
      const forecast = await getFiveDays(state.weatherObject.currCityKey);
      const isFavorite = state.weatherObject.favorites.find(
        (cityKey) => cityKey.currCityKey === state.weatherObject.currCityKey
      );
      if (isFavorite) {
        setFlag(true);
      }
      updateForecast(forecast);
    }
    fetchFiveDaysForecast();
  }, [state.weatherObject.currCityKey]);

  async function handleFavorite() {
    setFlag(!flag);
    let favCityObj = {
      currCityKey: Number(state.weatherObject.currCityKey),
      currCondition: state.weatherObject.currCondition,
      currLocation: state.weatherObject.currLocation,
    };
    const exists = state.weatherObject.favorites.find(
      (cityKey) => cityKey.currCityKey === favCityObj.currCityKey
    );
    if (exists) {
      delFromFavorites(favCityObj.currCityKey);
    } else addToFavorites(favCityObj);
  }
  return (
    <div className="info-card-box">
      <div className="top-forecast">
        <div className="center">
          <h2>
            {cityName} <br />
            {temp ? Math.round(temp) + `c°` : "1500c°"}
          </h2>
        </div>
        <div className="center">
          {flag ? (
            <FavoriteBorderIcon htmlColor="red" />
          ) : (
            <FavoriteBorderIcon htmlColor="black" />
          )}
          <Button
            onClick={handleFavorite}
            style={{
              nonCapital,
              marginLeft: "10px",
              color: "black",
              borderColor: "white ",
            }}
            variant="outlined">
            Add to favorites
          </Button>
        </div>
      </div>

      <div className="sky-info">{tempText ? tempText : "1500"}</div>
      <div className="days-container">
        {forecast
          ? forecast.map((day) => {
              let d = new Date(day.EpochDate * 1000);
              return (
                <div key={day.date} className="single-day">
                  <span>{`${d.getUTCDate()}/${d.getUTCMonth() + 1}`}</span>
                  <span>
                    <LightModeIcon /> &nbsp;
                    {Math.round((day?.Temperature?.Maximum?.Value - 32) / 1.8) +
                      "c°"}
                  </span>
                  <span>
                    <Brightness2Icon /> &nbsp;
                    {Math.round((day?.Temperature?.Minimum?.Value - 32) / 1.8) +
                      "c°"}
                  </span>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
