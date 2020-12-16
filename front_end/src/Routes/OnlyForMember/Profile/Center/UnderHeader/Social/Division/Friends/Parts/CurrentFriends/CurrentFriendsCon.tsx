import React, { useState } from "react";
import CurrentFriendsPre from "./CurrentFriendsPre";
import { useMyInfo } from "../../../../../../../../../../GlobalLib/Context/UserContext/Me";
import { S_N_to_N } from "../../../../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { SeeFriendsRequest } from "../../../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendR";
import { useMutation } from "@apollo/client";
import { REMOVE_FRIEND } from "../../../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendCUD";
import { INSTANT_CHAT_START } from "../../../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Chat/RoomR";

const CurrentFriendsCon = () => {
  const { MEdata } = useMyInfo();
  const [RoomEnter, setRoomEnter] = useState(false);
  const [ParticularRoom, setParticularRoom] = useState(0);
  const [FdRemoveModalOp, setFdRemoveModalOp] = useState(false);
  const [DeleteTarget, setDeleteTarget] = useState(0);

  const {
    data: friendsData,
    loading: friendsLoading,
    refetch: friendsRefetch,
  } = SeeFriendsRequest(S_N_to_N(MEdata.user_id));

  const [removeFriendMutation] = useMutation(REMOVE_FRIEND);
  const removeFriend = async () => {
    if (DeleteTarget !== 0) {
      try {
        await removeFriendMutation({
          variables: {
            user_id: DeleteTarget,
          },
        });
        friendsRefetch();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const [instantChatStartMutation] = useMutation(INSTANT_CHAT_START);
  const chatStart = async (opponent: number) => {
    try {
      const { data } = await instantChatStartMutation({
        variables: {
          opponent,
        },
      });
      setParticularRoom(S_N_to_N(data.instantChatStart));
      setRoomEnter(true);
    } catch (e) {
      console.log(e);
    }
  };

  return friendsLoading ? (
    <div />
  ) : (
    <CurrentFriendsPre
      friendsData={friendsData?.seeFriends}
      setFdRemoveModalOp={setFdRemoveModalOp}
      setDeleteTarget={setDeleteTarget}
      FdRemoveModalOp={FdRemoveModalOp}
      removeFriend={removeFriend}
      RoomEnter={RoomEnter}
      setRoomEnter={setRoomEnter}
      ParticularRoom={ParticularRoom}
      chatStart={chatStart}
    />
  );
};

export default CurrentFriendsCon;
