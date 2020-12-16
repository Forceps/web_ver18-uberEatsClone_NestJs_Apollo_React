import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const BasicDescription = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  font-size: 1.1rem;
`;

export default ({ ChoicedD }: BasicDescriptionProps) => {
  return (
    <BasicDescription>
      {ChoicedD === "Start" ? (
        <>Basic Premise</>
      ) : ChoicedD === "ExitOrder" ? (
        <>Who is authorized?</>
      ) : (
        <>The leave out system has been decided</>
      )}
    </BasicDescription>
  );
};

interface BasicDescriptionProps {
  ChoicedD: string;
}
