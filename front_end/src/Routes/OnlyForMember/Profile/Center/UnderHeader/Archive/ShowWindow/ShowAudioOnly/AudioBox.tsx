import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { mediaSummon } from "../ShowAll/ShowAllLib";

const AudioBoxClip = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  padding: 8px 10px 10px 10px;
  &:hover {
    background-color: rgba(99, 110, 114, 0.2);
  }
  cursor: pointer;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const MusicCaption = styled(WH100per)`
  display: flex;
  font-size: 1rem;
  align-items: center;
`;

const AudioBox = ({ A_Info, setShowOneOpen, setDetailInfo }: AudioBoxProps) => {
  return (
    <AudioBoxClip
      key={A_Info.address}
      onClick={(e) => {
        spaped(e);
        setDetailInfo({
          MediaType: "audio",
          URL: mediaSummon(A_Info.address, "audio"),
          Title: A_Info.caption,
        });
        setShowOneOpen(true);
      }}
    >
      <MusicCaption>{A_Info.caption}</MusicCaption>
    </AudioBoxClip>
  );
};

interface AudioBoxProps {
  A_Info: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}

export default React.memo(AudioBox);
