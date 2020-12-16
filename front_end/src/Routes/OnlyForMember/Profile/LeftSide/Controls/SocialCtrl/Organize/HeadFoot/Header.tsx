import React from "react";
import styled, { css } from "styled-components";
import WH100per from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { FlexCenter100per } from "../../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const Header = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 100px;
`;
const Title = styled(WH100per)`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding: 0 0 0 10px;
`;
const SubTitle = styled.div`
  margin: 0 0 -3px 20px;
  font-size: 1rem;
`;
interface NextProps {
  NextActivateCondition: () => boolean;
}
const Next = styled(FlexCenter100per)<NextProps>`
  font-size: 1.1rem;
  ${(prop) => {
    if (prop.NextActivateCondition()) {
      return css`
        &:hover {
          background-color: #dfe6e9;
        }
        cursor: pointer;
      `;
    } else {
      return css`
        color: #b2bec3;
      `;
    }
  }}
`;
const NextIcon = styled.div`
  margin: 0 -10px 0 0;
`;
interface FinishProps {
  SatisfiedAll: () => boolean;
}
const Finish = styled(FlexCenter100per)<FinishProps>`
  font-size: 1.1rem;
  ${(prop) => {
    if (prop.SatisfiedAll()) {
      return css`
        &:hover {
          background-color: #dfe6e9;
        }
        cursor: pointer;
      `;
    } else {
      return css`
        color: #b2bec3;
      `;
    }
  }}
`;

export default ({
  Phase,
  setPhase,
  NextActivateCondition,
  SatisfiedAll,
  MakeGroupTrigger,
}: MakingGroupHeaderProps) => {
  return (
    <Header>
      <Title>
        Making Group
        <SubTitle>
          {Phase === 2
            ? `- Identity Image`
            : Phase === 3
            ? `- Basic contents categories`
            : Phase === 4
            ? `- Membership system`
            : Phase === 5
            ? `- Account delete system`
            : `- Name & Purpose`}
        </SubTitle>
      </Title>
      {Phase === 5 ? (
        <Finish
          onClick={(e) => {
            spaped(e);
            if (SatisfiedAll()) {
              MakeGroupTrigger();
            }
          }}
          SatisfiedAll={SatisfiedAll}
        >
          Finish
        </Finish>
      ) : (
        <Next
          onClick={() => {
            if (NextActivateCondition()) {
              setPhase((p: number) => p + 1);
            }
          }}
          NextActivateCondition={NextActivateCondition}
        >
          Next
          <NextIcon className="icon-right-open-1" />
        </Next>
      )}
    </Header>
  );
};

interface MakingGroupHeaderProps {
  Phase: number;
  setPhase: any;
  NextActivateCondition: any;
  SatisfiedAll: () => boolean;
  MakeGroupTrigger: () => void;
}
