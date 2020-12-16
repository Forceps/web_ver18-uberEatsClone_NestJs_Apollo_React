import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { FlexCenter } from "../../../../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";
import { useHistory } from "react-router-dom";
import { VoidNotice } from "../../FriendsPre";
import BusinessCard from "../../../../../../../../../../Components/User/HumanBlock/BusinessCard";
import { S_N_to_N } from "../../../../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import ConfirmationModal from "../../../../../../../../../../Components/ElementEtc/Effect/ConfirmationModal";
import ChattingChannelCon from "../../../../../../../../../../Components/Chat/ChattingChannel/ChattingChannelCon";

const BlocksContainer = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const SbjLine = styled(W100per)`
  display: flex;
  align-items: center;
  height: 35px;
  font-size: 1.15rem;
  padding: 0 0 0 10px;
  &:nth-child(n + 2) {
    margin: 20px 0 0 0;
  }
`;
const CardCtrlDetail = styled(WH100per)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 18px;
`;
const BtnInCard = styled(FlexCenter)`
  height: 32px;
  width: 100px;
  margin: 0 0 5px 0;
  background-color: rgba(223, 230, 233, 0.7);
  &:hover {
    background-color: rgba(223, 230, 233, 1);
  }
  cursor: pointer;
`;

const CurrentFriendsPre = ({
  friendsData,
  setFdRemoveModalOp,
  setDeleteTarget,
  FdRemoveModalOp,
  removeFriend,
  RoomEnter,
  setRoomEnter,
  ParticularRoom,
  chatStart,
}: CurrentFriendsPreProps) => {
  const history = useHistory();

  return (
    <>
      <SbjLine>Current friend</SbjLine>
      <BlocksContainer>
        {friendsData.length === 0 ? (
          <VoidNotice>No Friends</VoidNotice>
        ) : (
          friendsData.map((i: any) => (
            <BusinessCard key={i.user_id} user_data={i}>
              <CardCtrlDetail>
                <BtnInCard
                  onClick={() => {
                    history.push(`/blog/${i.user_id}`);
                  }}
                >
                  <i className="icon-vector-pencil" />
                  Blog
                </BtnInCard>
                <BtnInCard
                  onClick={() => {
                    chatStart(S_N_to_N(i.user_id));
                  }}
                >
                  <i className="icon-comment-empty" />
                  Chat
                </BtnInCard>
                <BtnInCard
                  onClick={() => {
                    setFdRemoveModalOp(true);
                    setDeleteTarget(S_N_to_N(i.user_id));
                  }}
                >
                  <i className="icon-noun_x_2939490" />
                  Delete
                </BtnInCard>
              </CardCtrlDetail>
            </BusinessCard>
          ))
        )}
      </BlocksContainer>
      {FdRemoveModalOp && (
        <ConfirmationModal
          subject="Remove friend"
          message="Are you sure you want to delete your friend?"
          functionExecute={removeFriend}
          setConfirmationModalOpen={setFdRemoveModalOp}
          yesName="Delete"
        />
      )}
      {RoomEnter && (
        <ChattingChannelCon
          setRoomEnter={setRoomEnter}
          ParticularRoom={ParticularRoom}
        />
      )}
    </>
  );
};

interface CurrentFriendsPreProps {
  friendsData: any;
  setFdRemoveModalOp: any;
  setDeleteTarget: any;
  FdRemoveModalOp: boolean;
  removeFriend: () => Promise<void>;
  RoomEnter: boolean;
  setRoomEnter: any;
  ParticularRoom: number;
  chatStart: (opponent: number) => Promise<void>;
}

export default React.memo(CurrentFriendsPre);
