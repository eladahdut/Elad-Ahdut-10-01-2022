import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function InfoCard() {
  // const temp = props.data[0]["Temperature"].Metric.Value;
  // const tempText = props.data[0]["WeatherText"];

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { updateAutoComplete, updateCurrentCityInfo } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // console.log(state);
  // const temp = state.weatherObject[0].Temperature.Metric.Value;
  // const tempText = state.weatherObject[0].WeatherText;

  const nonCapital = {
    "text-transform": "none",
  };
  return (
    <div className="info-card-box">
      <div className="top-forecast">
        <div className="center">
          <h2>
            {} <br />
            {/* {temp ? temp + `c°` : "1500c°"} */}
          </h2>
        </div>
        <div className="center">
          <FavoriteBorderIcon />
          <Button
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

      {/* <div className="sky-info">{tempText ? tempText : "1500"}</div> */}
      <div className="days-container">
        <div className="single-day">1</div>
        <div className="single-day">2</div>
        <div className="single-day">3</div>
        <div className="single-day">4</div>
        <div className="single-day">5</div>
      </div>
    </div>
  );
}
