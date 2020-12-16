import React, { useState } from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import ImgInSCon from "../../../../../../../../../Components/Media/Insert/ImgInsertScreen/ImgInSCon";

const Wrapper = styled(WH100per)`
  padding: 0 40px 0 40px;
  overflow: hidden;
`;
type ForZIndex = {
  zIndex: number;
};
const BGIMG = styled(W100per)<ForZIndex>`
  display: flex;
  position: relative;
  height: 200px;
  padding: 10px;
  margin: 70px 0 0 0;
  background-color: #dfe6e9;
  cursor: pointer;
  z-index: ${(prop) => prop.zIndex};
`;
const NameAndImg = styled(W100per)<ForZIndex>`
  display: grid;
  grid-template-columns: 1fr 170px;
  position: relative;
  overflow: hidden;
  z-index: ${(prop) => prop.zIndex};
`;
const NameZone = styled(WH100per)`
  display: grid;
  justify-content: right;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 10px 0 0;
  overflow: hidden;
`;
const NIMG = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: -50px;
  background-color: powderblue;
  cursor: pointer;
`;
const Sbj = styled(W100per)`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;
interface BackImgProp {
  url: string;
}
const BackGroundImg = styled(BGIMG)<BackImgProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;
const ProfileImg = styled(NIMG)<BackImgProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;

export default ({
  zIndex,
  SettedNeme,
  BackImg,
  setBackImg,
  PfImg,
  setPfImg,
}: MakingGroupStep2Props) => {
  const [BImgInsertOpen, setBImgInsertOpen] = useState(false);
  const [PImgInsertOpen, setPImgInsertOpen] = useState(false);
  return (
    <Wrapper>
      {BackImg === "" ? (
        <BGIMG
          onClick={(e: any) => {
            spaped(e);
            setBImgInsertOpen(true);
          }}
          zIndex={zIndex + 1}
        >
          <Sbj>Background Image</Sbj>
        </BGIMG>
      ) : (
        <BackGroundImg
          url={BackImg}
          onClick={(e: any) => {
            spaped(e);
            setBImgInsertOpen(true);
          }}
          zIndex={zIndex + 1}
        />
      )}
      <NameAndImg zIndex={zIndex + 2}>
        {SettedNeme ? <NameZone>{SettedNeme}</NameZone> : <div />}
        {PfImg === "" ? (
          <NIMG
            onClick={(e: any) => {
              spaped(e);
              setPImgInsertOpen(true);
            }}
          >
            <Sbj>Profile Image</Sbj>
          </NIMG>
        ) : (
          <ProfileImg
            url={PfImg}
            onClick={(e: any) => {
              spaped(e);
              setPImgInsertOpen(true);
            }}
          />
        )}
      </NameAndImg>
      {BImgInsertOpen && (
        <ImgInSCon
          setImgSubMenuOp={setBImgInsertOpen}
          ImgInsert={setBackImg}
          zIndex={zIndex + 10}
        />
      )}
      {PImgInsertOpen && (
        <ImgInSCon
          setImgSubMenuOp={setPImgInsertOpen}
          ImgInsert={setPfImg}
          zIndex={zIndex + 10}
        />
      )}
    </Wrapper>
  );
};

interface MakingGroupStep2Props {
  zIndex: number;
  SettedNeme: string;
  BackImg: string;
  setBackImg: any;
  PfImg: string;
  setPfImg: any;
}
