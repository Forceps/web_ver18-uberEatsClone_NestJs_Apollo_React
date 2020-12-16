import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { MedataStructure } from "../../../../../../GlobalLib/Context/UserContext/Me";
import {
  byteIntoUnit,
  unitIntoByte,
} from "../../../../../../GlobalLib/RecycleFunction/etc/Math/Arithmetic";
import { useProfileDetailMode } from "../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import All from "./MediaType/All";
import Image from "./MediaType/Image";
import Music from "./MediaType/Music";
import Video from "./MediaType/Video";

const Suburb = styled(W100per)`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 30px 10px 0 10px;
`;
const AvailTotal = styled(W100per)`
  padding: 10px 0 15px 0;
`;
interface RatioBarProps {
  used: number;
  total: number;
}
const RatioBar = styled(W100per)<RatioBarProps>`
  display: grid;
  grid-template-columns: ${(p) =>
    `${p.used / p.total}fr ${(p.total - p.used) / p.total}fr`};
  height: 4px;
`;
const UsedBar = styled(WH100per)`
  background-color: #636e72;
`;
const AvailableBar = styled(WH100per)`
  background-color: #dfe6e9;
`;
const Used = styled(W100per)`
  padding: 15px 0 5px 0;
`;
const Avail = styled(W100per)`
  padding: 5px 0 18px 0;
`;

export default ({ data, MEdata }: ArchiveCtrlPreProps) => {
  const { AcMode } = useProfileDetailMode();
  const { images, videos, musics } = data;
  const used = images.volume + videos.volume + musics.volume;
  const total = unitIntoByte(300, "MB");
  return (
    <Suburb>
      <AvailTotal>
        Total capacity: {byteIntoUnit(total).number} {byteIntoUnit(total).unit}
      </AvailTotal>
      <RatioBar used={used} total={total}>
        <UsedBar />
        <AvailableBar />
      </RatioBar>
      <Used>
        Used: {byteIntoUnit(used).number} {byteIntoUnit(used).unit} (
        {Math.round((100 * used) / total)}%)
      </Used>
      <Avail>
        Available: {byteIntoUnit(total - used).number}{" "}
        {byteIntoUnit(total - used).unit} (
        {Math.round((100 * (total - used)) / total)}%)
      </Avail>
      {AcMode === "Image" && <Image data={data} />}
      {AcMode === "Video" && <Video data={data} />}
      {AcMode === "Music" && <Music data={data} />}
      {AcMode === "All" && <All data={data} MEdata={MEdata} />}
    </Suburb>
  );
};

interface ArchiveCtrlPreProps {
  MEdata: MedataStructure;
  data: any;
}
