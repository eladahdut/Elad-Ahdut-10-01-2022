import React from "react";
import FavoriteCard from "./FavoriteCard";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
  const state = useSelector((state) => state);

  return (
    <div className="favs-cards-container">
      {state?.weatherObject?.favorites &&
      state?.weatherObject?.favorites.length > 0
        ? state?.weatherObject.favorites.map((item, i) => {
            return <FavoriteCard item={item} key={i} />;
          })
        : "No favorites yet"}
    </div>
  );
}
