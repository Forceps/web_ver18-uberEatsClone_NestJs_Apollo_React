import React from "react";
import styled from "styled-components";
import LeftSide from "./LeftSide/LeftSide";
import CenterCon from "./Center/CenterCon";
import RightPanelCon from "./RightPanel/RightPanelCon";
import UpdatePostCon from "../../../Components/Post/UpdatePost/UpdatePostCon";
import { useProfileMode } from "../../../GlobalLib/Context/ProfileContext/ProfileMode";
import ProfileHeaderCon from "./ProfileHeader/ProfileHeaderCon";

const Wrapper = styled.div``;
const BottomBody = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  padding: 60px 30px 40px 30px;
`;

export default ({ PD, UP }: ProfilePreProps) => {
  const PfM = useProfileMode();
  return (
    <Wrapper>
      <ProfileHeaderCon zIndex={7} />
      <BottomBody>
        <LeftSide />
        <CenterCon />
      </BottomBody>
      {(PfM.Mode[0] === "Post" || PfM.Mode[0] === "Archive") && (
        <RightPanelCon />
      )}
      {UP.UpdatePost &&
        PD.PostID !== "" &&
        !PD.postLoadingByID &&
        PD.postByID && <UpdatePostCon />}
    </Wrapper>
  );
};
type ProfilePreProps = {
  PD: any;
  UP: any;
};
