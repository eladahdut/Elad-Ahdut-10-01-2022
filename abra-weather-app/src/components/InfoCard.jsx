import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { forwardRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getFiveDays } from "../API/getApi";
import { actionCreators } from "../state/index";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
//
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
//

export default function InfoCard() {
  //
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //

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
            <>
              <FavoriteBorderIcon htmlColor="red" />
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}>
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}>
                  Location added favorites!
                </Alert>
              </Snackbar>
            </>
          ) : (
            <>
              <FavoriteBorderIcon htmlColor="black" />
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}>
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}>
                  Location removed from favorites!
                </Alert>
              </Snackbar>
            </>
          )}
          <Button
            onClick={() => {
              handleFavorite();
              handleClick();
            }}
            style={{
              nonCapital,
              marginLeft: "10px",
              color: "black",
              borderColor: "white ",
            }}
            variant="outlined">
            {!flag ? "add to favorites" : "remove from favorites"}
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
