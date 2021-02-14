import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import RestaurantsView from "./Restaurant";
import RestaurantView from "./Restaurant/OneRestaurant";
const MyRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={RestaurantsView} />
          <Route path="/:id" exact component={RestaurantView} />
          <Route render={(props) => <Redirect to="/" />} />
        </Switch>
      </Router>
    </>
  );
};

export default MyRouter;
