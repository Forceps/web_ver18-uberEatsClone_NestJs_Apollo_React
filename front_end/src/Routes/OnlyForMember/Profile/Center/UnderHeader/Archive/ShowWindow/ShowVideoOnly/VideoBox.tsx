import React from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per, {
  W100per,
} from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { FlexCenter } from "../../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";
import { mediaSummon } from "../ShowAll/ShowAllLib";

const Container = styled.div`
  width: 220px;
  display: grid;
  grid-template-rows: 123.75px 35px;
  margin: 5px 5px 10px 5px;
  @media (max-width: 1300px) {
    &:nth-child(4) {
      display: none;
    }
  }
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
`;

interface ThumbnailProp {
  url: string;
}
const Thumbnail = styled(WH100per)<ThumbnailProp>`
  display: flex;
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
  background-color: #dfe6e9;
  padding: 8px;
  justify-content: flex-end;
`;
const ImgCaption = styled(W100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  word-break: break-all;
  font-size: 1rem;
  padding: 0 5px 0 5px;
`;
const PlaySquareIcon = styled(FlexCenter)`
  width: 30px;
  height: 30px;
  background-color: rgba(45, 52, 54, 0.7);
  color: #fafafa;
`;

const VideoBox = ({ v_info, setDetailInfo, setShowOneOpen }: VideoBoxProps) => {
  return (
    <Container
      key={v_info.address}
      onClick={(e) => {
        spaped(e);
        setDetailInfo({
          MediaType: "video",
          URL: mediaSummon(v_info.address, "video"),
          Title: v_info.caption,
          thumbnail: v_info.thumbnail,
        });
        setShowOneOpen(true);
      }}
    >
      <Thumbnail url={v_info.thumbnail.replace(/\\/gi, "/")}>
        <PlaySquareIcon>
          <i className="icon-play" />
        </PlaySquareIcon>
      </Thumbnail>
      <ImgCaption>{v_info.caption}</ImgCaption>
    </Container>
  );
};

interface VideoBoxProps {
  v_info: any;
  setDetailInfo: any;
  setShowOneOpen: any;
}

export default React.memo(VideoBox);
