import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import StatusBar from "./StatusBar";
import SelectScreen from "./SelectScreen";
import BasicDescription from "./BasicDescription";
import FinalConfirmation from "./FinalConfirmation";

const Wrapper = styled(WH100per)`
  padding: 10px 0 10px 0;
  overflow: hidden;
  display: grid;
  grid-template-rows: 15px 45px 1fr 45px;
`;

export const TerminalD = [
  "Spontaneous",
  "ExitOrder_OnlyAdministrator",
  "ExitOrder_SomePeople",
  "ExitOrder_Voting",
  "ExitOrder_Unanimity",
];
export default ({ ChoicedD, setChoicedD }: Step4Props) => {
  const Setting = (e: any, Choiced: string): void => {
    spaped(e);
    setChoicedD(Choiced);
  };

  return (
    <Wrapper>
      <div />
      <BasicDescription ChoicedD={ChoicedD} />
      {TerminalD.indexOf(ChoicedD) === -1 ? (
        <SelectScreen ChoicedD={ChoicedD} Setting={Setting} />
      ) : (
        <FinalConfirmation />
      )}
      <StatusBar ChoicedD={ChoicedD} Setting={Setting} />
    </Wrapper>
  );
};

interface Step4Props {
  ChoicedD: string;
  setChoicedD: any;
}
