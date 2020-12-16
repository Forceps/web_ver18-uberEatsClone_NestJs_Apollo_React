import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  W100per,
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Loading from "../../../../Components/ElementEtc/Effect/Loading";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { S_N_to_N } from "../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { LogClock } from "../../../../GlobalLib/RecycleFunction/etc/Math/Time";
import { FlexCenter } from "../../../../GlobalLib/Styles/IteratePattern/ToCenter";

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
`;
const SampleContent = styled.div`
  padding: 5px 0 5px 0;
  font-size: 0.85rem;
`;
const Sender = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0 8px 0;
`;
const IdentiImg = styled(FlexCenter)`
  width: 32px;
  height: 32px;
  background-color: #b2bec3;
`;
const Name = styled(H100per)`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 0 0 8px;
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

export default ({
  NotiLoad,
  NotiData,
  setNotiDetlOp,
  setNotiId,
}: DataSpreadPreProps) => {
  return (
    <DataSpread>
      <Sbj>Notification</Sbj>
      {NotiLoad ? (
        <Loading />
      ) : NotiData.length === 0 ? (
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
                <Title>No notification</Title>
              </Stint>
            </ForThePadding>
          </Slate>
        </Bar>
      ) : (
        NotiData.map((n: any) => {
          const ord = NotiData.findIndex(
            (i: any) => i.notification_id === n.notification_id
          );
          const remvDupl =
            NotiData[ord - 1]?.year === n.year &&
            NotiData[ord - 1]?.month === n.month &&
            NotiData[ord - 1]?.day === n.day;
          const sameYear = NotiData[ord - 1]?.year === n.year;
          return (
            <Bar key={n.notification_id}>
              <DateLine>
                <Indication>
                  <Date>
                    {ord === 0
                      ? `${n.year}. ${n.month}. ${n.day}.`
                      : remvDupl
                      ? ""
                      : sameYear
                      ? `${n.month}. ${n.day}.`
                      : `${n.year}. ${n.month}. ${n.day}.`}
                    &nbsp;&nbsp;
                    {LogClock(n.hour, n.minute)}
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
                  <D last={ord === NotiData.length - 1} />
                </ForTheLine>
                <ForThePadding>
                  <Stint
                    onClick={(e) => {
                      spaped(e);
                      setNotiId(S_N_to_N(n.notification_id));
                      setNotiDetlOp(true);
                    }}
                  >
                    <Title>{n.title}</Title>
                    <SampleContent>{n.content}</SampleContent>
                    <Sender>
                      <IdentiImg>
                        <i className="icon-bell" />
                      </IdentiImg>
                      <Name>Administrator</Name>
                    </Sender>
                  </Stint>
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
  NotiLoad: boolean;
  NotiData: any;
  setNotiDetlOp: any;
  setNotiId: any;
}
