import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getRestaurants, filter } from "actions/restaurant";
import { useHistory } from "react-router-dom";
import Page from "./page";

const RestaurantsView = ({
  restaurants,
  loadRestaurants,
  progress,
  changeFilter,
  filter,
}) => {
  const history = useHistory();
  var arr = [];
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  if (filter === "alphabet") {
    // Funcion para ordenar alfabeticamente
    arr = Object.values(restaurants).sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  } else if (filter === "rating") {
    // Funcion para ordenar por rating
    arr = Object.values(restaurants).sort(function (a, b) {
      return b.rating - a.rating;
    });
  }

  return (
    <Page
      history={history}
      restaurants={arr.length !== 0 ? arr : restaurants}
      progress={progress}
      changeFilter={changeFilter}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.Restaurant.restaurants,
    progress: state.General.progress,
    filter: state.Restaurant.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRestaurants: getRestaurants(dispatch),
    changeFilter: filter(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsView);
