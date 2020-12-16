import React, { useState, useEffect } from "react";
import BlogRelationPre from "./BlogRelationPre";
import {
  SeeFriendsRequest,
  FriendCheckLazyRequest,
  FRIEND_CHECK,
} from "../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendR";
import { useMyInfo } from "../../../../../GlobalLib/Context/UserContext/Me";
import {
  See_I_subsRequest,
  See_My_SubsRequest,
} from "../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Subscriber/SubscriberR";
import { REQUEST_FRIEND } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendCUD";
import { useMutation } from "@apollo/client";
import { useLoginCheck } from "../../../../../GlobalLib/Context/UserContext/IsLoggedIn";

export default ({ user_id }: BlogRelationConProps) => {
  const { MEdata, MEloading } = useMyInfo();
  const { isLoggedIn } = useLoginCheck();
  const [RelationSortBy, setRelationSortBy] = useState("all");
  const [AddFriendConfirm, setAddFriendConfirm] = useState(false);
  const { data: friendsData, loading: friendsLoading } = SeeFriendsRequest(
    user_id
  );
  const { data: I_SubsData, loading: I_SubsLoading } = See_I_subsRequest(
    user_id
  );
  const { data: My_SubsData, loading: My_SubsLoading } = See_My_SubsRequest(
    user_id
  );
  const [
    FcloadGreeting,
    { called: FcCalled, data: FcData, loading: FcLoading },
  ] = FriendCheckLazyRequest(user_id);
  const friendCheckLoad = isLoggedIn && FcCalled && !FcLoading;
  const [createRoomMutation] = useMutation(REQUEST_FRIEND, {
    refetchQueries: () => [
      {
        query: FRIEND_CHECK,
        variables: {
          user_id,
        },
      },
    ],
  });
  const requestFriendFunc = async () => {
    try {
      await createRoomMutation({
        variables: {
          respondent: user_id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      FcloadGreeting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return MEloading ? (
    <div />
  ) : (
    <BlogRelationPre
      RelationSortBy={RelationSortBy}
      setRelationSortBy={setRelationSortBy}
      I_SubsData={I_SubsData?.see_I_Subs}
      I_SubsLoading={I_SubsLoading}
      My_SubsData={My_SubsData?.see_My_Subs}
      My_SubsLoading={My_SubsLoading}
      friendsData={friendsData?.seeFriends}
      friendsLoading={friendsLoading}
      MEdata={MEdata}
      user_id={user_id}
      AddFriendConfirm={AddFriendConfirm}
      setAddFriendConfirm={setAddFriendConfirm}
      requestFriendFunc={requestFriendFunc}
      FcData={FcData?.friendCheck}
      friendCheckLoad={friendCheckLoad}
    />
  );
};

interface BlogRelationConProps {
  user_id: number;
}
