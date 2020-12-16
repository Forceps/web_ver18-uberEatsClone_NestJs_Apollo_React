import React from "react";
import SearchedUserPre from "./SearchedUserPre";
import { SEE_FRIENDS } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendR";
import { useMutation } from "@apollo/client";
import { REQUEST_FRIEND } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendCUD";

export default () => {
  const [requestFriendMutation] = useMutation(REQUEST_FRIEND, {
    refetchQueries: () => [{ query: SEE_FRIENDS }],
  });
  const requestFriend = (partner: number) => {
    try {
      requestFriendMutation({
        variables: {
          respondent: partner,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <SearchedUserPre requestFriend={requestFriend} />;
};
