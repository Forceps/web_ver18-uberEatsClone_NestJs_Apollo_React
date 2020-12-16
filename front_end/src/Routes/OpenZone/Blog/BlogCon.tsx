import React, { useState } from "react";
import BlogPre from "./BlogPre";
import { useParams } from "react-router-dom";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import { SeeUserRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/User/UserRseries/UserR";

export default () => {
  const { user_id: user_id_extract }: any = useParams();
  const user_id = S_N_to_N(user_id_extract);
  const { data: UserData, loading: UserDataLoading } = SeeUserRequest(user_id);
  const [Mode, setMode] = useState("post");

  return (
    <BlogPre
      user_id={user_id}
      UserData={UserData}
      UserDataLoading={UserDataLoading}
      Mode={Mode}
      setMode={setMode}
    />
  );
};
