import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { FlexCenter } from "../../../../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";
import { VoidNotice } from "../../FriendsPre";
import { useHistory } from "react-router-dom";
import BusinessCard from "../../../../../../../../../../Components/User/HumanBlock/BusinessCard";
import ConfirmationModal from "../../../../../../../../../../Components/ElementEtc/Effect/ConfirmationModal";
import { S_N_to_N } from "../../../../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";

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

const FriendProposersPre = ({
  moorageFriendsData,
  acceptFriendRequest,
  setFdRejectModalOp,
  setDeleteTarget,
  FdRejectModalOp,
  removeFriend,
}: FriendProposersPreProps) => {
  const history = useHistory();

  return (
    <>
      <SbjLine>Friend proposers</SbjLine>
      <BlocksContainer>
        {moorageFriendsData.length === 0 ? (
          <VoidNotice>No proposer</VoidNotice>
        ) : (
          moorageFriendsData.map((i: any) => (
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
                    acceptFriendRequest(S_N_to_N(i.user_id));
                  }}
                >
                  <i className="icon-ok" />
                  Accept
                </BtnInCard>
                <BtnInCard
                  onClick={() => {
                    setFdRejectModalOp(true);
                    setDeleteTarget(S_N_to_N(i.user_id));
                  }}
                >
                  <i className="icon-noun_x_2939490" />
                  Reject
                </BtnInCard>
              </CardCtrlDetail>
            </BusinessCard>
          ))
        )}
      </BlocksContainer>
      {FdRejectModalOp && (
        <ConfirmationModal
          subject="Reject friend request"
          message="Do you really want to decline your friend request?"
          functionExecute={removeFriend}
          setConfirmationModalOpen={setFdRejectModalOp}
          yesName="Reject"
        />
      )}
    </>
  );
};

interface FriendProposersPreProps {
  moorageFriendsData: any;
  acceptFriendRequest: (proposer: number) => Promise<void>;
  setFdRejectModalOp: any;
  setDeleteTarget: any;
  FdRejectModalOp: boolean;
  removeFriend: () => Promise<void>;
}

export default React.memo(FriendProposersPre);
