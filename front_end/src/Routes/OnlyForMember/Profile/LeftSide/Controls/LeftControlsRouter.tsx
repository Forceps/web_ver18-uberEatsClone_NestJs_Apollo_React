import React from "react";
import { useProfileMode } from "../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import ArchiveCtrlCon from "./ArchiveCtrl/ArchiveCtrlCon";
import styled from "styled-components";
import WH100per from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import PostCtrlCon from "./PostCtrl/PostCtrlCon";
import SocialCtrlCon from "./SocialCtrl/SocialCtrlCon";

const Pack = styled(WH100per)`
  overflow: hidden;
`;

export default () => {
  const { Mode } = useProfileMode();
  return (
    <Pack>
      {Mode[0] === "Archive" ? (
        <ArchiveCtrlCon />
      ) : Mode[0] === "Social" ? (
        <SocialCtrlCon />
      ) : (
        <PostCtrlCon />
      )}
    </Pack>
  );
};
