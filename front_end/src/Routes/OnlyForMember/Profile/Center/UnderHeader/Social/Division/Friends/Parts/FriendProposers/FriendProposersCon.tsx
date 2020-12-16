import React, { useState } from "react";
import FriendProposersPre from "./FriendProposersPre";
import { FriendRequestReceivedRequest } from "../../../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendR";
import { useMutation } from "@apollo/client";
import {
  REMOVE_FRIEND,
  ACCEPT_FRIEND_REQUEST,
} from "../../../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendCUD";

const FriendProposersCon = () => {
  const [FdRejectModalOp, setFdRejectModalOp] = useState(false);
  const [DeleteTarget, setDeleteTarget] = useState(0);

  const {
    data: moorageFriendsData,
    loading: moorageFriendsLoading,
    refetch: moorageFriendsRefetch,
  } = FriendRequestReceivedRequest();

  const [acceptFriendRequestMutation] = useMutation(ACCEPT_FRIEND_REQUEST);
  const acceptFriendRequest = async (proposer: number) => {
    try {
      await acceptFriendRequestMutation({
        variables: {
          proposer,
        },
      });
      moorageFriendsRefetch();
    } catch (e) {
      console.log(e);
    }
  };
  const [removeFriendMutation] = useMutation(REMOVE_FRIEND);
  const removeFriend = async () => {
    if (DeleteTarget !== 0) {
      try {
        await removeFriendMutation({
          variables: {
            user_id: DeleteTarget,
          },
        });
        moorageFriendsRefetch();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return moorageFriendsLoading ? (
    <div />
  ) : (
    <FriendProposersPre
      moorageFriendsData={moorageFriendsData?.friendRequestReceived}
      acceptFriendRequest={acceptFriendRequest}
      setFdRejectModalOp={setFdRejectModalOp}
      setDeleteTarget={setDeleteTarget}
      FdRejectModalOp={FdRejectModalOp}
      removeFriend={removeFriend}
    />
  );
};

export default FriendProposersCon;
