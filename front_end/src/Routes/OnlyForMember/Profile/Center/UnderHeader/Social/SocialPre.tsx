import React from "react";
import styled from "styled-components";
import { useProfileDetailMode } from "../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import FriendsCon from "./Division/Friends/FriendsCon";
import SubscribeCon from "./Division/Subscribe/SubscribeCon";

const Divide = styled.div`
  display: flex;
`;

export default () => {
  const { ScMode } = useProfileDetailMode();
  return (
    <Divide>{ScMode === "Friends" ? <FriendsCon /> : <SubscribeCon />}</Divide>
  );
};
