import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  W100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Loading from "../../../../Components/ElementEtc/Effect/Loading";
import TileCon from "../../../../Components/Post/Shape/Tile/TileCon";
import { LogClock } from "../../../../GlobalLib/RecycleFunction/etc/Math/Time";

const DataSpread = styled(WH100per)`
  display: flex;
  flex-direction: column;
`;
const Sbj = styled(W100per)`
  display: flex;
  padding: 11px 0 0 78px;
  height: 60px;
  font-size: 1.3rem;
`;
const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
`;
const DateLine = styled(W100per)`
  display: grid;
  grid-template-rows: 42px 1fr;
`;
const Slate = styled(W100per)`
  display: grid;
  grid-template-columns: 20px 1fr;
`;
const ForTheLine = styled(WH100per)`
  display: grid;
  grid-template-rows: 21px 1fr;
`;
interface FirstBool {
  first: boolean;
}
const U = styled(WH100per)<FirstBool>`
  ${(p) => {
    if (!p.first) {
      return css`
        border-left: 1px solid black;
      `;
    }
  }}
`;
interface LastBool {
  last: boolean;
}
const D = styled(WH100per)<LastBool>`
  ${(p) => {
    if (!p.last) {
      return css`
        border-left: 1px solid black;
      `;
    }
  }}
`;
const Stint = styled.div`
  display: inline-block;
  min-width: 100px;
  min-height: 30px;
  max-width: 600px;
  padding: 0 8px 0 8px;
  background-color: rgba(223, 230, 233, 0.7);
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  font-size: 1rem;
  margin: 0 20px 0 0;
`;
const Indication = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 10px;
`;
const Date = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #636e72;
`;
const Dot = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Rhombus = styled.div`
  display: flex;
  position: absolute;
  transform: rotate(45deg);
`;
const SmallRhombus = styled(Rhombus)`
  width: 8px;
  height: 8px;
  background-color: #2d3436;
  margin: 0 0 0 4.5px;
`;
const BigRhombus = styled(Rhombus)`
  width: 16px;
  height: 16px;
  border: 1px solid #2d3436;
  margin: 0 0 0 8.5px;
`;
const ForThePadding = styled.div`
  padding: 6px 10px 6px 0;
`;

export default ({ loading, data }: DataSpreadPreProps) => {
  return (
    <DataSpread>
      <Sbj>History</Sbj>
      {loading ? (
        <Loading />
      ) : data.length === 0 ? (
        <Bar>
          <DateLine>
            <Indication>
              <Date>Date&nbsp;&nbsp;</Date>
              <Dot>
                <BigRhombus />
                <SmallRhombus />
              </Dot>
            </Indication>
          </DateLine>
          <Slate>
            <ForTheLine />
            <ForThePadding>
              <Stint>
                <Title>No Watched</Title>
              </Stint>
            </ForThePadding>
          </Slate>
        </Bar>
      ) : (
        data.map((p: any) => {
          const ord = data.findIndex((i: any) => i.post_id === p.post_id);
          const remvDupl =
            data[ord - 1]?.year === p.year &&
            data[ord - 1]?.month === p.month &&
            data[ord - 1]?.day === p.day;
          const sameYear = data[ord - 1]?.year === p.year;
          return (
            <Bar key={p.post_id}>
              <DateLine>
                <Indication>
                  <Date>
                    {ord === 0
                      ? `${p.year}. ${p.month}. ${p.day}.`
                      : remvDupl
                      ? ""
                      : sameYear
                      ? `${p.month}. ${p.day}.`
                      : `${p.year}. ${p.month}. ${p.day}.`}
                    &nbsp;&nbsp;
                    {LogClock(p.hour, p.minute)}
                    {ord === 0 || !remvDupl ? <>&nbsp;</> : ""}
                  </Date>
                  <Dot>
                    {ord === 0 || !remvDupl ? (
                      <>
                        <BigRhombus />
                        <SmallRhombus />
                      </>
                    ) : (
                      <SmallRhombus />
                    )}
                  </Dot>
                </Indication>
              </DateLine>
              <Slate>
                <ForTheLine>
                  <U first={ord === 0} />
                  <D last={ord === data.length - 1} />
                </ForTheLine>
                <ForThePadding>
                  <TileCon post={p} />
                </ForThePadding>
              </Slate>
            </Bar>
          );
        })
      )}
    </DataSpread>
  );
};
interface DataSpreadPreProps {
  loading: boolean;
  data: any;
}
