import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getRestaurants } from "actions/restaurant";
import Page from "./page";

const RestaurantView = ({ match, loadRestaurants, restaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  if (restaurants)
    var restaurant = Object.values(restaurants).filter(function (restaurant) {
      return restaurant.id === match.params.id;
    });
  return <Page restaurant={restaurant} />;
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.Restaurant.restaurants,
    progress: state.General.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRestaurants: getRestaurants(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantView);
