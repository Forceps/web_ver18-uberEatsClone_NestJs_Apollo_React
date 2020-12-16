import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const BasicDescription = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  font-size: 1.1rem;
`;

export default ({ ChoicedM }: BasicDescriptionProps) => {
  return (
    <BasicDescription>
      {ChoicedM === "Start" ? (
        <>Basic Premise</>
      ) : ChoicedM === "Application" ? (
        <>Whether to introduce a permit system</>
      ) : ChoicedM === "Recommendation" ? (
        <>Who can recommend?</>
      ) : ChoicedM === "Application_RequireApproval" ? (
        <>Who can approve?</>
      ) : (
        <>The membership registration system has been decided</>
      )}
    </BasicDescription>
  );
};

interface BasicDescriptionProps {
  ChoicedM: string;
}
