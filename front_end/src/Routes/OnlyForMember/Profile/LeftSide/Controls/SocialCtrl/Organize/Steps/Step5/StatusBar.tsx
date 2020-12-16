import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const StatusBar = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  font-size: 1.1rem;
`;
const ChoiceHistory = styled.div`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #2d3436;
  }
`;
const HistoryBlock = styled.div`
  display: flex;
`;

export default ({ ChoicedD, Setting }: StatusBarProps) => {
  const InclusionBool = (str: string): boolean => {
    const parsed = ChoicedD.split("_");
    let recombinated: string[] = [];
    let stackedString = "";
    for (let i = 0; i < parsed.length; i++) {
      stackedString = stackedString + parsed[i];
      recombinated = recombinated.concat(stackedString);
      stackedString = stackedString + "_";
    }
    return recombinated.indexOf(str) !== -1;
  };

  return (
    <StatusBar>
      <ChoiceHistory
        onClick={(e) => {
          Setting(e, "Start");
        }}
      >
        Foundation
      </ChoiceHistory>
      {[
        ["ExitOrder", "Exist exit order"],
        ["Spontaneous", "Only spontaneous"],
        ["ExitOrder_OnlyAdministrator", "Only Administrator"],
        ["ExitOrder_SomePeople", "Some People"],
        ["ExitOrder_Voting", "Voting"],
        ["ExitOrder_Unanimity", "Unanimity"],
      ].map(
        (item) =>
          InclusionBool(item[0]) && (
            <HistoryBlock key={item[0]}>
              <i className="icon-right-open-1" />
              <ChoiceHistory
                onClick={(e) => {
                  Setting(e, item[0]);
                }}
              >
                {item[1]}
              </ChoiceHistory>
            </HistoryBlock>
          )
      )}
    </StatusBar>
  );
};

interface StatusBarProps {
  ChoicedD: string;
  Setting: (e: any, ChoicedD: string) => void;
}
