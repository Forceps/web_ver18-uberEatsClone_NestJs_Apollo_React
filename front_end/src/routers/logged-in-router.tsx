import { useQuery } from "@apollo/client";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { meQuery } from "../GlobalLib/Apollo/ApolloTypes/meQuery";
import { ME_QUERY } from "../GlobalLib/Apollo/GraphQL_Client/User/UserR";
import { Restaurants } from "../pages/client/restaurants";

const ClientRoutes = [
  <Route path="/" exact>
    <Restaurants />
  </Route>,
];
export const LoggedInRouter = () => {
  const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <Router>
      <Switch>
        {data.me.role === "client" && ClientRoutes}
        <Redirect from="/potato" to="/" />
      </Switch>
    </Router>
  );
};
