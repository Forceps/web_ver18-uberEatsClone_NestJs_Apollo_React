import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NotFound } from "../Pages/404";
import CreateAccount from "../Pages/create-account";
import Login from "../Pages/login";

const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/" exact component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default LoggedOutRouter;
