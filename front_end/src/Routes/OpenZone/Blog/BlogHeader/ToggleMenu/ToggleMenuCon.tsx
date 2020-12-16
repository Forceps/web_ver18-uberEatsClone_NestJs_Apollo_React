import React from "react";
import ToggleMenuPre from "./ToggleMenuPre";
import { useMutation } from "@apollo/client";
import { LOCAL_LOG_OUT } from "../../../../../GlobalLib/Apollo/LocalState/auth/authQuery";

export default () => {
  const [localLogOutMutation] = useMutation(LOCAL_LOG_OUT);
  return <ToggleMenuPre localLogOutMutation={localLogOutMutation} />;
};
