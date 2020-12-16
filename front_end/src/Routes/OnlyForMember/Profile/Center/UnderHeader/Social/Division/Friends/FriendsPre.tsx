import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import CurrentFriendsCon from "./Parts/CurrentFriends/CurrentFriendsCon";
import FriendProposersCon from "./Parts/FriendProposers/FriendProposersCon";

const FriendsPreContainer = styled(W100per)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const VoidNotice = styled(W100per)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #636e72;
  height: 100px;
  padding: 0 0 0 20px;
`;

const FriendsPre = () => {
  return (
    <FriendsPreContainer>
      <CurrentFriendsCon />
      <FriendProposersCon />
    </FriendsPreContainer>
  );
};

export default React.memo(FriendsPre);
