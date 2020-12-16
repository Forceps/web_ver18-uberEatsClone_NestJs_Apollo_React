import React from "react";
import styled from "styled-components";
import WH100per, {
  WH100perI,
} from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useProfileDetailMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import AudioBox from "./AudioBox";

const Block = styled.div`
  min-height: 60px;
  width: 100%;
  margin: 0 0 10px 0;
  overflow: hidden;
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: 100px 40px 1fr;
  font-size: 1.1rem;
  height: 40px;
  margin: 10px 0 0 0;
  padding: 0 0 0 8px;
`;
const MediaFiles = styled(WH100per)`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 0 10px;
  overflow: hidden;
`;
const Sbj = styled(WH100per)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const MediaIcon = styled.i`
  margin: 0 5px 0 0;
`;
const AddMedia = styled(WH100perI)`
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;

export default ({
  setAddAudioScn,
  Audios,
  AudiosLod,
  setShowOneOpen,
  setDetailInfo,
}: ShowImgOnlyPreProps) => {
  const PfDM = useProfileDetailMode();
  return (
    <Block>
      <Header>
        <Sbj
          onClick={() => {
            PfDM.setAcMode("Music");
          }}
        >
          <MediaIcon className="icon-music" />
          Music
        </Sbj>
        <AddMedia
          onClick={() => {
            setAddAudioScn(true);
          }}
          className="icon-plus"
        />
      </Header>
      <MediaFiles>
        {!AudiosLod &&
          Audios?.musicGetByDirId?.map((item: any) => (
            <AudioBox
              key={item.address}
              A_Info={item}
              setShowOneOpen={setShowOneOpen}
              setDetailInfo={setDetailInfo}
            />
          ))}
      </MediaFiles>
    </Block>
  );
};
type ShowImgOnlyPreProps = {
  setAddAudioScn: any;
  Audios: any;
  AudiosLod: boolean;
  setShowOneOpen: any;
  setDetailInfo: any;
};
