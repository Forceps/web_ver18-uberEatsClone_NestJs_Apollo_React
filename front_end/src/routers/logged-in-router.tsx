import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../Components/header";
import { UserRole } from "../GlobalLib/Apollo/ApolloTypes/globalTypes";
import { useMe } from "../GlobalLib/Apollo/GraphQL_Client/User/UserQ";
import { NotFound } from "../Pages/404";
import { Category } from "../Pages/client/category";
import { Restaurant } from "../Pages/client/restaurant";
import { Restaurants } from "../Pages/client/restaurants";
import { Search } from "../Pages/client/search";
import { AddDish } from "../Pages/owner/add-dish";
import { AddRestaurant } from "../Pages/owner/add-restaurants";
import { MyRestaurant } from "../Pages/owner/my-restaurant";
import { MyRestaurants } from "../Pages/owner/my-restaurants";
import { ConfirmEmail } from "../Pages/user/confirm-email";
import { EditProfile } from "../Pages/user/edit-profile";

const RouteSwitchByUserRole = ({ Role }: { Role: UserRole }) => {
  switch (Role) {
    case "owner":
      return (
        <>
          <Route path="/" exact component={MyRestaurants} />
          <Route path="/add-restaurant" exact component={AddRestaurant} />
          <Route path="/restaurants/:id" exact component={MyRestaurant} />
          <Route
            path="/restaurants/:restaurantId/add-dish"
            component={AddDish}
          />
        </>
      );
    default:
      return (
        <>
          <Route path="/" exact component={Restaurants} />
          <Route path="/search" component={Search} />
          <Route path="/category/:slug" component={Category} />
          <Route path="/restaurants/:id" component={Restaurant} />
        </>
      );
  }
};
export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();
  return data && !loading && !error ? (
    <BrowserRouter>
      <Header />
      <Switch>
        <RouteSwitchByUserRole Role={data.me.role} />
        <Route path="/confirm" exact component={ConfirmEmail} />
        <Route path="/edit-profile" exact component={EditProfile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <span className="font-medium text-xl tracking-wide">Loading...</span>
    </div>
  );
};
