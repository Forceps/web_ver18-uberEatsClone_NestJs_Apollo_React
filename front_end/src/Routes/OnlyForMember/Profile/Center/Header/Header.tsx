import React from "react";
import styled from "styled-components";
import AtPost from "./Mode/AtPost";
import AtArchive from "./Mode/AtArchive";
import { useProfileMode } from "../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import AtSocial from "./Mode/AtSocial";
import AtSettings from "./Mode/AtSettings";

const Wrapper = styled.div`
  display: flex;
`;
export default () => {
  const PfM = useProfileMode();
  return (
    <Wrapper>
      {PfM.Mode[0] === "Post" && <AtPost />}
      {PfM.Mode[0] === "Archive" && <AtArchive />}
      {PfM.Mode[0] === "Social" && <AtSocial />}
      {PfM.Mode[0] === "Settings" && <AtSettings />}
    </Wrapper>
  );
};
