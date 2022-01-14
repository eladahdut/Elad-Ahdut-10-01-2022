import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useNavigate } from "react-router-dom";

export default function FavoriteCard(props) {
  const dispatch = useDispatch();
  const { updateCurrCityKey, updateCurrLocation } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const navigate = useNavigate();

  /**
   * listen to a click on card and updates store and navigate to home with selected location .
   *
   * @param  currCityKey
   * @param  currLocation
   */
  const handleFavoriteClick = (currCityKey, currLocation) => {
    updateCurrCityKey(currCityKey);
    updateCurrLocation(currLocation);
    navigate("/");
  };
  return (
    <div
      className="favorite-card"
      onClick={() =>
        handleFavoriteClick(props.item.currCityKey, props.item.currLocation)
      }>
      <h2>{props.item.currLocation}</h2>
      <div style={{ textAlign: "center" }}>
        <span>
          {Math.round(props?.item?.currCondition[0].Temperature.Metric.Value)}c°
        </span>
        <br />
        <span>{props?.item?.currCondition[0].WeatherText}</span>
      </div>
    </div>
  );
}
