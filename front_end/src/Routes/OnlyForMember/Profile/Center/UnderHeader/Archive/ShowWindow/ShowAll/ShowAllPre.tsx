import React from "react";
import styled from "styled-components";
import WH100per, {
  WH100perI,
} from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useProfileDetailMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import VideoBox from "../ShowVideoOnly/VideoBox";
import ImgBox from "../ShowImgOnly/ImgBox";
import AudioBox from "../ShowAudioOnly/AudioBox";

const Collection = styled(WH100per)``;
const Block = styled.div`
  min-height: 160px;
  width: 100%;
  margin: 0 0 10px 0;
  overflow: hidden;
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: 100px 40px 1fr;
  font-size: 1.1rem;
  height: 40px;
  padding: 0 0 0 8px;
  /* margin: 12px 0 0 0; */
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
const AudioFiles = styled(MediaFiles)``;

export default ({
  setAddImgScn,
  ImgAll,
  ImgAllLod,
  setAddVideoScn,
  VideoAll,
  VideoAllLod,
  setAddAudioScn,
  AudioAll,
  AudioAllLod,
  setShowOneOpen,
  setDetailInfo,
}: ShowAllPreProps) => {
  const PfDM = useProfileDetailMode();
  return (
    <Collection>
      <Block>
        <Header>
          <Sbj
            onClick={() => {
              PfDM.setAcMode("Image");
            }}
          >
            <MediaIcon className="icon-palette" />
            Image
          </Sbj>
          <AddMedia
            onClick={() => {
              setAddImgScn(true);
            }}
            className="icon-plus"
          />
        </Header>
        <MediaFiles>
          {!ImgAllLod &&
            ImgAll?.map((item: any) => (
              <ImgBox
                key={item.address}
                I_Info={item}
                setShowOneOpen={setShowOneOpen}
                setDetailInfo={setDetailInfo}
              />
            ))}
        </MediaFiles>
      </Block>
      <Block>
        <Header>
          <Sbj
            onClick={() => {
              PfDM.setAcMode("Video");
            }}
          >
            <MediaIcon className="icon-video" />
            Video
          </Sbj>
          <AddMedia
            onClick={() => {
              setAddVideoScn(true);
            }}
            className="icon-plus"
          />
        </Header>
        <MediaFiles>
          {!VideoAllLod &&
            VideoAll.videoGetByDirId?.map((item: any) => (
              <VideoBox
                key={item.address}
                v_info={item}
                setDetailInfo={setDetailInfo}
                setShowOneOpen={setShowOneOpen}
              />
            ))}
        </MediaFiles>
      </Block>
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
        <AudioFiles>
          {!AudioAllLod &&
            AudioAll.musicGetByDirId?.map((item: any) => (
              <AudioBox
                key={item.address}
                A_Info={item}
                setShowOneOpen={setShowOneOpen}
                setDetailInfo={setDetailInfo}
              />
            ))}
        </AudioFiles>
      </Block>
    </Collection>
  );
};
type ShowAllPreProps = {
  setAddImgScn: any;
  ImgAll: any;
  ImgAllLod: boolean;
  setAddVideoScn: any;
  VideoAll: any;
  VideoAllLod: boolean;
  setAddAudioScn: any;
  AudioAll: any;
  AudioAllLod: boolean;
  setShowOneOpen: any;
  setDetailInfo: any;
};
