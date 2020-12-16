import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import BusinessCard from "../../../../../../../../Components/User/HumanBlock/BusinessCard";
import { VoidNotice } from "../Friends/FriendsPre";
import { FlexCenter } from "../../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";
import { useHistory } from "react-router-dom";
import ConfirmationModal from "../../../../../../../../Components/ElementEtc/Effect/ConfirmationModal";
import { S_N_to_N } from "../../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";

const BlocksContainer = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 10px;
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

const SubscribePre = ({
  I_SubsData,
  setDeleteTarget,
  ScbRemoveModalOp,
  setScbRemoveModalOp,
  removeSubscribe,
}: SubscribePreProps) => {
  const history = useHistory();

  return (
    <BlocksContainer>
      {I_SubsData.length === 0 ? (
        <VoidNotice>No subscribe</VoidNotice>
      ) : (
        I_SubsData.map((i: any) => (
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
                  setScbRemoveModalOp(true);
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
      {ScbRemoveModalOp && (
        <ConfirmationModal
          subject="Remove subscribe"
          message="Are you sure you want to cancel your subscription?"
          functionExecute={removeSubscribe}
          setConfirmationModalOpen={setScbRemoveModalOp}
          yesName="Remove"
        />
      )}
    </BlocksContainer>
  );
};

interface SubscribePreProps {
  I_SubsData: any;
  setDeleteTarget: any;
  ScbRemoveModalOp: boolean;
  setScbRemoveModalOp: any;
  removeSubscribe: () => void;
}

export default React.memo(SubscribePre);
