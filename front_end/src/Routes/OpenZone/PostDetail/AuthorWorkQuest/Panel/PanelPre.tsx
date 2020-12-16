import React from "react";
import styled from "styled-components";
import WH100per, {
  H100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../../../Components/User/HumanBlock/Avatar";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import DirListFoldingSystem from "../../../../../Components/ElementEtc/DirListFoldingSystem/DirListFoldingSystem";
import IncludeScrollBar from "../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { FlexCenter100per } from "../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const Panel = styled(WH100per)`
  display: grid;
  grid-template-rows: 50px 1fr;
  backdrop-filter: blur(5px);
  background-color: rgba(223, 230, 233, 0.8);
`;
const AuthorInfo = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 15px;
`;
const UserName = styled(H100per)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0 0 0 15px;
`;
const PanelTop = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 30px;
  cursor: pointer;
`;
const CloseBtn = styled(FlexCenter100per)`
  &:hover {
    background-color: rgba(45, 52, 54, 0.8);
    color: white;
  }
  transition-property: background-color;
  transition-duration: 0.18s;
  transition-timing-function: ease;
`;
const PanelBottom = styled(WH100per)`
  display: grid;
  grid-template-rows: 40px 1fr;
  padding: 10px 0 0 0;
  overflow: hidden;
`;
const Sbj = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px 0 0;
  font-size: 1.2rem;
  cursor: pointer;
`;
const ScrollZone = styled(IncludeScrollBar)`
  width: 100%;
  height: 100%;
`;

const PanelPre = ({
  post,
  setAuthorWorkOpen,
  RootDirData,
  RootDirDataLoad,
  ChoosedDir,
  setChoosedDir,
}: PanelPreProps) => {
  return (
    <Panel>
      <PanelTop>
        <AuthorInfo>
          <Avatar url={post.user_postTouser.avatar} size={35} />
          <UserName>{post.user_postTouser.username}</UserName>
        </AuthorInfo>
        <CloseBtn
          onClick={(e) => {
            spaped(e);
            setAuthorWorkOpen(false);
          }}
        >
          <i className="icon-right-open" />
        </CloseBtn>
      </PanelTop>
      <PanelBottom>
        <Sbj
          onClick={(e) => {
            spaped(e);
            setChoosedDir([0, "Recent all"]);
          }}
        >
          Category
        </Sbj>
        <ScrollZone>
          <DirListFoldingSystem
            RootDirData={RootDirData}
            RootDirDataLoad={RootDirDataLoad}
            ChoosedDir={ChoosedDir}
            setChoosedDir={setChoosedDir}
            hoverBackColor={"#b2bec3"}
          />
        </ScrollZone>
      </PanelBottom>
    </Panel>
  );
};

interface PanelPreProps {
  post: any;
  setAuthorWorkOpen: any;
  RootDirData: any;
  RootDirDataLoad: boolean;
  ChoosedDir: [number, string];
  setChoosedDir: any;
}

export default PanelPre;
