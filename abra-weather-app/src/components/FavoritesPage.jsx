import React from "react";
import FavoriteCard from "./FavoriteCard";

export default function FavoritesPage() {
  const demoFavs = ["London", "Paris", "Tokyo", "Los Angeles", "Tel Aviv"];

  return (
    <div className="favs-cards-container">
      {demoFavs.map((item, i) => {
        return <FavoriteCard city={item} key={i} />;
      })}
    </div>
  );
}
