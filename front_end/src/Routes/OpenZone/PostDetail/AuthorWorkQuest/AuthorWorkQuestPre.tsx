import React from "react";
import styled from "styled-components";
import WH100per from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import PanelCon from "./Panel/PanelCon";
import TilesShowWindowCon from "./TilesShowWindow/TilesShowWindowCon";

interface WindowWrapProps {
  zIndex: number;
}
const WindowWrap = styled(WH100per)<WindowWrapProps>`
  display: grid;
  grid-template-columns: 1fr 300px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(p) => p.zIndex};
`;

const AuthorWorkQuestPre = ({
  zIndex,
  post,
  setAuthorWorkOpen,
  ChoosedDir,
  setChoosedDir,
}: AuthorWorkQuestPreProps) => {
  return (
    <WindowWrap zIndex={zIndex}>
      <TilesShowWindowCon post={post} ChoosedDir={ChoosedDir} />
      <PanelCon
        post={post}
        setAuthorWorkOpen={setAuthorWorkOpen}
        ChoosedDir={ChoosedDir}
        setChoosedDir={setChoosedDir}
      />
    </WindowWrap>
  );
};

interface AuthorWorkQuestPreProps {
  zIndex: number;
  post: any;
  setAuthorWorkOpen: any;
  ChoosedDir: [number, string];
  setChoosedDir: any;
}

export default React.memo(AuthorWorkQuestPre);
