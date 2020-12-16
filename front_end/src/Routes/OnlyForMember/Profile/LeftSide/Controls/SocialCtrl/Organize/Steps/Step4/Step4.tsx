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

export const TerminalM = [
  "Application_NoRequireApproval",
  "Recommendation_Anyone",
  "Recommendation_OnlyAdministrator",
  "Recommendation_SomePeople",
  "Application_RequireApproval_OnlyAdministrator",
  "Application_RequireApproval_SomePeople",
  "Application_RequireApproval_Voting",
  "Application_RequireApproval_Unanimity",
];
export default ({ ChoicedM, setChoicedM }: Step4Props) => {
  const Setting = (e: any, Choiced: string): void => {
    spaped(e);
    setChoicedM(Choiced);
  };

  return (
    <Wrapper>
      <div />
      <BasicDescription ChoicedM={ChoicedM} />
      {TerminalM.indexOf(ChoicedM) === -1 ? (
        <SelectScreen ChoicedM={ChoicedM} Setting={Setting} />
      ) : (
        <FinalConfirmation />
      )}
      <StatusBar ChoicedM={ChoicedM} Setting={Setting} />
    </Wrapper>
  );
};

interface Step4Props {
  ChoicedM: string;
  setChoicedM: any;
}
