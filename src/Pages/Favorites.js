import React from "react";
import { useContext } from "react";
import MeetupList from "../Components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = (
      <p style={{ marginTop: 40 }}>
        You don't have a favorite yet. Want to add some?
      </p>
    );
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My favorites</h1>

      {content}
    </section>
  );
}

export default Favorites;
