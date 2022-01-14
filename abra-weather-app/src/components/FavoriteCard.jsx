import React from "react";
// import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index";
// import { useNavigate } from "react-router-dom";

export default function FavoriteCard(props) {
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const { updateCurrCityKey, updateCurrLocation } = bindActionCreators(
  //   actionCreators,
  //   dispatch
  // );

  // const history = useHistory();
  // const navigate = useNavigate();

  // const handleFavoriteClick = (currCityKey) => {
  //   updateCurrCityKey(currCityKey);
  //   navigate("/");
  // };

  console.log(props.item);
  return (
    <div
      className="favorite-card"
      // onClick={handleFavoriteClick(props.item.currCityKey)}
    >
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
