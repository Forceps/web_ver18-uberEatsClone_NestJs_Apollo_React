import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { byteIntoUnit } from "../../../../../../../GlobalLib/RecycleFunction/etc/Math/Arithmetic";
import PaginationCon from "../../Pagination/PaginationCon";

const Circumstance = styled(W100per)`
  padding: 16px 0 16px 0;
`;
const CountAndVol = styled(W100per)`
  padding: 10px 5px 0 6px;
`;

export default ({ data: { videos } }: VideoProps) => {
  return (
    <>
      <Circumstance>
        <i className="icon-video" /> Video
        <CountAndVol>
          count: {videos.count} &nbsp; volume:{" "}
          {byteIntoUnit(videos.volume).number}{" "}
          {byteIntoUnit(videos.volume).unit}
        </CountAndVol>
      </Circumstance>
      <Circumstance>
        <PaginationCon />
      </Circumstance>
      <Circumstance>선택모드, 추가</Circumstance>
    </>
  );
};

interface VideoProps {
  data: any;
}
