import React from "react";

export default function FavoriteCard(props) {
  return (
    <span className="favorite-card">
      {props.city} <br /> 35c°
    </span>
  );
}
