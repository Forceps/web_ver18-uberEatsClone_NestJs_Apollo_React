import React from "react";
import styled, { css } from "styled-components";
import { W100per } from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { FlexCenter } from "../../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const Footer = styled(W100per)`
  display: flex;
  justify-content: flex-end;
`;
interface FazeNumProps {
  Phase: number;
  num: number;
  NextActivateCondition: any;
}
const FazeNum = styled(FlexCenter)<FazeNumProps>`
  width: 27px;
  height: 100%;
  padding: 1px 0 1px 0;
  font-size: 1rem;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
  ${(prop) => {
    if (prop.Phase === prop.num) {
      return css`
        padding: 0 0 1px 0;
        border-top: 1px solid black;
      `;
    } else if (
      !(prop.Phase === prop.num || prop.NextActivateCondition(prop.num))
    ) {
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
}: MakingGroupFooterProps) => {
  return (
    <Footer>
      {[1, 2, 3, 4, 5].map((item) => (
        <FazeNum
          onClick={() => {
            setPhase(item);
          }}
          key={item}
          Phase={Phase}
          num={item}
          NextActivateCondition={NextActivateCondition}
        >
          {item}
        </FazeNum>
      ))}
    </Footer>
  );
};
interface MakingGroupFooterProps {
  Phase: number;
  setPhase: any;
  NextActivateCondition: any;
}
