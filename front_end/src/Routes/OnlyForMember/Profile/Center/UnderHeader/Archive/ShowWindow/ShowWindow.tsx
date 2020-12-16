import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import ShowAllCon from "./ShowAll/ShowAllCon";
import { useProfileDetailMode } from "../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import ShowImgOnlyCon from "./ShowImgOnly/ShowImgOnlyCon";
import ShowVideoOnlyCon from "./ShowVideoOnly/ShowVideoOnlyCon";
import ShowAudioOnlyCon from "./ShowAudioOnly/ShowAudioOnlyCon";

const ShowWindow = styled(WH100per)`
  overflow: hidden;
`;

export default ({
  setAddImgScn,
  setAddVideoScn,
  setAddAudioScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowWindowProps) => {
  const { AcMode } = useProfileDetailMode();
  return (
    <ShowWindow>
      {AcMode === "Image" ? (
        <ShowImgOnlyCon
          setAddImgScn={setAddImgScn}
          setShowOneOpen={setShowOneOpen}
          setDetailInfo={setDetailInfo}
        />
      ) : AcMode === "Video" ? (
        <ShowVideoOnlyCon
          setAddVideoScn={setAddVideoScn}
          setShowOneOpen={setShowOneOpen}
          setDetailInfo={setDetailInfo}
        />
      ) : AcMode === "Music" ? (
        <ShowAudioOnlyCon
          setAddAudioScn={setAddAudioScn}
          setShowOneOpen={setShowOneOpen}
          setDetailInfo={setDetailInfo}
        />
      ) : (
        <ShowAllCon
          setAddImgScn={setAddImgScn}
          setAddVideoScn={setAddVideoScn}
          setAddAudioScn={setAddAudioScn}
          setShowOneOpen={setShowOneOpen}
          setDetailInfo={setDetailInfo}
        />
      )}
    </ShowWindow>
  );
};
interface ShowWindowProps {
  setAddImgScn: any;
  setAddVideoScn: any;
  setAddAudioScn: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}
