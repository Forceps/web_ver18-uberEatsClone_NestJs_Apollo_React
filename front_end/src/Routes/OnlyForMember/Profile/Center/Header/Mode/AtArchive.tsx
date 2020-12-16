import React from "react";
import styled, { css } from "styled-components";
import {
  useProfileDetailMode,
  useDirSelectorMode,
} from "../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { useProfileMode } from "../../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { usePostDetail } from "../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per, {
  H100per,
} from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Container = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
`;
const Left = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  min-width: 600px;
  align-items: center;
`;
const Subject = styled.div`
  display: inline-block;
  font-size: 1.3rem;
  margin: -9px 0 0 12px;
  justify-content: center;
  align-self: left;
`;
const PDSubject = styled(H100per)`
  display: grid;
  grid-template-columns: 50px 1fr;
  font-size: 1.3rem;
  align-items: center;
  overflow: hidden;
`;
const SelectBar = styled(H100per)`
  display: grid;
  grid-template-columns: 70px 80px 80px 80px;
  font-size: 1.2rem;
  justify-self: right;
  align-items: center;
`;
const Item = styled(H100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 3px 0 3px 0;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
interface pSM {
  PfDM: string;
}
const ItemAll = styled(Item)<pSM>`
  ${(prop) => {
    if (prop.PfDM === "All") {
      return css`
        border-bottom: 3px solid #2d3436;
        padding: 3px 0 0 0;
      `;
    }
  }}
`;
const ItemImg = styled(Item)<pSM>`
  ${(prop) => {
    if (prop.PfDM === "Image") {
      return css`
        border-bottom: 3px solid #2d3436;
        padding: 3px 0 0 0;
      `;
    }
  }}
`;
const ItemVideo = styled(Item)<pSM>`
  ${(prop) => {
    if (prop.PfDM === "Video") {
      return css`
        border-bottom: 3px solid #2d3436;
        padding: 3px 0 0 0;
      `;
    }
  }}
`;
const ItemMusic = styled(Item)<pSM>`
  ${(prop) => {
    if (prop.PfDM === "Music") {
      return css`
        border-bottom: 3px solid #2d3436;
        padding: 3px 0 0 0;
      `;
    }
  }}
`;
const Right = styled.div`
  display: grid;
  justify-content: right;
  width: 100%;
  height: 100%;
`;
const DirSelectorOpen = styled.div`
  display: grid;
  width: 40px;
  height: 100%;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(45, 52, 54, 0.8);
    color: white;
  }
  transition-property: background-color;
  transition-duration: 0.18s;
  transition-timing-function: ease;
  cursor: pointer;
`;
const DSOpenIcon = styled.i`
  font-size: 1rem;
`;
const BackwardIcon = styled.i`
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const CaptionCon = styled.div``;

export default () => {
  const Mode = useProfileMode();
  const PfDM = useProfileDetailMode();
  const DSC = useDirSelectorMode();
  const PD = usePostDetail();
  return (
    <Container>
      {PfDM.Mode === "PostDetail" && !PD.postLoadingByID && (
        <PDSubject>
          <BackwardIcon className="icon-left-open" />
          <CaptionCon>{PD.postByID?.caption}</CaptionCon>
        </PDSubject>
      )}
      {true && (
        <Left>
          <Subject>{Mode.Mode}</Subject>
          <SelectBar>
            <ItemAll
              onClick={() => {
                PfDM.setAcMode("All");
              }}
              PfDM={PfDM.AcMode}
            >
              All
            </ItemAll>
            <ItemImg
              onClick={() => {
                PfDM.setAcMode("Image");
              }}
              PfDM={PfDM.AcMode}
            >
              Image
            </ItemImg>
            <ItemVideo
              onClick={() => {
                PfDM.setAcMode("Video");
              }}
              PfDM={PfDM.AcMode}
            >
              Video
            </ItemVideo>
            <ItemMusic
              onClick={() => {
                PfDM.setAcMode("Music");
              }}
              PfDM={PfDM.AcMode}
            >
              Music
            </ItemMusic>
          </SelectBar>
        </Left>
      )}
      <Right>
        {!DSC.Mode && (
          <DirSelectorOpen
            onClick={(e) => {
              spaped(e);
              DSC.setMode(true);
            }}
          >
            <DSOpenIcon className="icon-left-open" />
          </DirSelectorOpen>
        )}
      </Right>
    </Container>
  );
};
