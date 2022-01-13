import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getFiveDays } from "../API/getApi";
import { actionCreators } from "../state/index";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

export default function InfoCard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { updateForecast, addDelFavorite } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);
  const cityName = state?.weatherObject?.currLocation;
  const temp = state?.weatherObject?.currCondition[0]?.Temperature.Metric.Value;
  const tempText = state?.weatherObject?.currCondition[0]?.WeatherText;
  const forecast = state?.weatherObject?.forecast.DailyForecasts;
  const nonCapital = {
    "text-transform": "none",
  };

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchFiveDaysForecast() {
      const forecast = await getFiveDays(state.weatherObject.currCityKey);
      updateForecast(forecast);
    }
    fetchFiveDaysForecast();
  }, [state.weatherObject.currCityKey]);

  async function handleFavorite() {
    let favCityObj = {
      currCityKey: Number(state.weatherObject.currCityKey),
      currCondition: state.weatherObject.currCondition,
      currLocation: state.weatherObject.currLocation,
    };
    const exists = state.weatherObject.favorites.find(
      (cityKey) => cityKey.currCityKey === favCityObj.currCityKey
    );
    if (exists) {
      return (
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={transition}
          message="Already in favorites!"
          key={transition ? transition.name : ""}
        />
      );
    } else addDelFavorite(favCityObj);
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
          <FavoriteBorderIcon />
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
