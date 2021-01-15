import { useReactiveVar } from "@apollo/client";
import React from "react";
import { isLoggedInVar } from "../GlobalLib/Apollo/LocalState/LocalState";
import { LoggedInRouter } from "./logged-in-router";
import LoggedOutRouter from "./logged-out-router";

export const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
};
