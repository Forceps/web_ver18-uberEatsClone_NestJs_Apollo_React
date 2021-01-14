import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../Components/header";
import { useMe } from "../GlobalLib/Apollo/GraphQL_Client/User/UserQ";
import { NotFound } from "../pages/404";
import { Category } from "../pages/client/category";
import { Restaurant } from "../pages/client/restaurant";
import { Restaurants } from "../pages/client/restaurants";
import { Search } from "../pages/client/search";
import { ConfirmEmail } from "../pages/user/confirm-email";
import { EditProfile } from "../pages/user/edit-profile";

const ClientRoutes = [
  <Route key={1} path="/" exact component={Restaurants} />,
  <Route key={2} path="/confirm" exact component={ConfirmEmail} />,
  <Route key={3} path="/edit-profile" exact component={EditProfile} />,
  <Route key={4} path="/search" exact component={Search} />,
  <Route key={5} path="/category/:slug" component={Category} />,
  <Route key={6} path="/restaurants/:id" component={Restaurant} />,
];
export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();
  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <Router>
      <Header />
      <Switch>
        {data.me.role === "client" && ClientRoutes}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
