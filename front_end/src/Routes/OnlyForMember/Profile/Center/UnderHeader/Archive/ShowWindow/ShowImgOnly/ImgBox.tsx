import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { mediaSummon } from "../ShowAll/ShowAllLib";

const ImageBox = styled.div`
  width: 190px;
  display: grid;
  grid-template-rows: 170px 35px;
  margin: 5px;
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
`;
const ImgSample = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const ImgCaption = styled(W100per)`
  display: grid;
  justify-content: center;
  overflow: hidden;
  word-break: break-all;
  font-size: 1rem;
  padding: 0 5px 0 5px;
`;
const ImgPrev = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

const ImgBox = ({ I_Info, setShowOneOpen, setDetailInfo }: ImgBoxProps) => {
  return (
    <ImageBox
      key={I_Info.address}
      onClick={(e) => {
        spaped(e);
        setDetailInfo({
          MediaType: "img",
          URL: mediaSummon(I_Info.address),
          Title: I_Info.caption,
        });
        setShowOneOpen(true);
      }}
    >
      <ImgSample>
        <ImgPrev src={mediaSummon(I_Info.address)} alt="image" />
      </ImgSample>
      <ImgCaption>{I_Info.caption}</ImgCaption>
    </ImageBox>
  );
};

interface ImgBoxProps {
  I_Info: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}

export default React.memo(ImgBox);
