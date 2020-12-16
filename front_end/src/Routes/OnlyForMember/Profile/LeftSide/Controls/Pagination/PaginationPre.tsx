import React from "react";
import styled, { css } from "styled-components";
import { FlexCenter100per } from "../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";
import WH100per, {
  W100per,
} from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useProfileDetailMode } from "../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";

const Pagination = styled(W100per)`
  margin: 14px 0 15px 0;
`;
const PgnSbj = styled(W100per)``;
interface PgnNumListProps {
  NumberOfDigits: number;
}
const PgnNumList = styled(W100per)<PgnNumListProps>`
  display: grid;
  grid-template-columns: 1fr 1fr ${(p) => p.NumberOfDigits + 1}fr 1fr 1fr;
  height: 25px;
  margin: 13px 0 12px 0;
`;
interface NumsProps {
  NumberOfDigits: number;
}
const Nums = styled(WH100per)<NumsProps>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.NumberOfDigits}, 1fr);
`;
const PageMoveBtn = styled(FlexCenter100per)`
  cursor: pointer;
  &:hover {
    background-color: #dfe6e9;
  }
`;
interface PageNumProps {
  CurrentPage: number;
  inherenceNum: number;
}
const PageNum = styled(PageMoveBtn)<PageNumProps>`
  ${(p) => {
    if (p.CurrentPage === p.inherenceNum) {
      return css`
        background-color: #2d3436;
        color: #fafafa;
        &:hover {
          background-color: #636e72;
        }
      `;
    }
  }}
`;
const ReversalPlay = styled(PageMoveBtn)`
  display: flex;
  transform: scaleX(-1);
`;

export default ({
  PaginationNum,
  UpperUnitPageNum,
  CurrentUUP,
  setCurrentUUP,
  NumberOfDigits,
}: PaginationPreProps) => {
  const PfDM = useProfileDetailMode();
  const Uuplast = UpperUnitPageNum[UpperUnitPageNum.length - 1];
  return (
    <Pagination>
      <PgnSbj>Pagination</PgnSbj>
      <PgnNumList NumberOfDigits={NumberOfDigits}>
        <PageMoveBtn
          onClick={() => {
            setCurrentUUP(1);
            PfDM.setCurrentPage(1);
          }}
        >
          <i className="icon-fast-bw" />
        </PageMoveBtn>
        {CurrentUUP === 1 ? (
          <div />
        ) : (
          <ReversalPlay
            onClick={() => {
              setCurrentUUP((p: number) => {
                if (p > 1) {
                  return p - 1;
                } else {
                  return 1;
                }
              });
            }}
          >
            <i className="icon-play" />
          </ReversalPlay>
        )}
        <Nums NumberOfDigits={NumberOfDigits}>
          {PaginationNum.map((n) => (
            <PageNum
              key={n}
              onClick={() => {
                PfDM.setCurrentPage(n);
              }}
              CurrentPage={PfDM.CurrentPage}
              inherenceNum={n}
            >
              {n}
            </PageNum>
          ))}
        </Nums>
        {CurrentUUP === Uuplast ? (
          <div />
        ) : (
          <PageMoveBtn
            onClick={() => {
              setCurrentUUP((p: number) => {
                if (p < Uuplast) {
                  return p + 1;
                } else {
                  return Uuplast;
                }
              });
            }}
          >
            <i className="icon-play" />
          </PageMoveBtn>
        )}
        <PageMoveBtn
          onClick={() => {
            setCurrentUUP(Uuplast);
            PfDM.setCurrentPage(Math.ceil(PfDM.TotalCount / PfDM.OneTimeShow));
          }}
        >
          <i className="icon-fast-fw" />
        </PageMoveBtn>
      </PgnNumList>
    </Pagination>
  );
};

interface PaginationPreProps {
  PaginationNum: number[];
  UpperUnitPageNum: number[];
  CurrentUUP: number;
  setCurrentUUP: any;
  NumberOfDigits: number;
}
