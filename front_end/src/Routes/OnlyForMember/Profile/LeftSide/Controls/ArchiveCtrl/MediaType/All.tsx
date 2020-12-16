import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { Link } from "react-router-dom";
import { byteIntoUnit } from "../../../../../../../GlobalLib/RecycleFunction/etc/Math/Arithmetic";
import { MedataStructure } from "../../../../../../../GlobalLib/Context/UserContext/Me";

const Circumstance = styled(W100per)`
  padding: 16px 0 16px 0;
`;
const CountAndVol = styled(W100per)`
  padding: 10px 5px 0 6px;
`;
const CapacityManipulation = styled(W100per)`
  margin: 8px 0 0 0;
`;
const CapacitySituationBoard = styled(W100per)`
  display: flex;
  flex-direction: column;
  padding: 4px 0 0 0;
`;
const Contour = styled.div`
  border-top: 1px solid black;
  width: 50px;
  margin: 0 0 10px 0;
`;
const DailyBenefits = styled(CapacitySituationBoard)``;
const MinimumGuaranteed = styled(CapacitySituationBoard)``;
const AmountNum = styled.div`
  padding: 8.5px;
`;
const CapacityPayment = styled(W100per)`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0 0 0;
`;
const CPlink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export default ({
  data: { images, videos, musics },
  MEdata: { daily_allocated_capacity, guaranteed_capacity },
}: AllProps) => {
  return (
    <>
      <Circumstance>
        <i className="icon-picture" /> Image
        <CountAndVol>
          count: {images.count} &nbsp; volume:{" "}
          {byteIntoUnit(images.volume).number}{" "}
          {byteIntoUnit(images.volume).unit}
        </CountAndVol>
      </Circumstance>
      <Circumstance>
        <i className="icon-video" /> Video
        <CountAndVol>
          count: {videos.count} &nbsp; volume:{" "}
          {byteIntoUnit(videos.volume).number}{" "}
          {byteIntoUnit(videos.volume).unit}
        </CountAndVol>
      </Circumstance>
      <Circumstance>
        <i className="icon-music" /> Music
        <CountAndVol>
          count: {musics.count} &nbsp; volume:{" "}
          {byteIntoUnit(musics.volume).number}{" "}
          {byteIntoUnit(musics.volume).unit}
        </CountAndVol>
      </Circumstance>
      <CapacityManipulation>
        <Contour />
        <DailyBenefits>
          Daily extra amount
          <AmountNum>{daily_allocated_capacity} MB</AmountNum>
        </DailyBenefits>
        <MinimumGuaranteed>
          Minimum guaranteed capacity
          <AmountNum>{guaranteed_capacity} MB</AmountNum>
        </MinimumGuaranteed>
        <CapacityPayment>
          <CPlink to={`/`}>Increase capacity</CPlink>
        </CapacityPayment>
      </CapacityManipulation>
    </>
  );
};

interface AllProps {
  MEdata: MedataStructure;
  data: any;
}
