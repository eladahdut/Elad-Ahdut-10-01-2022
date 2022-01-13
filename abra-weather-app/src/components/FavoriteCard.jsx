import React from "react";

export default function FavoriteCard(props) {
  console.log(props.item);
  return (
    <div className="favorite-card">
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
