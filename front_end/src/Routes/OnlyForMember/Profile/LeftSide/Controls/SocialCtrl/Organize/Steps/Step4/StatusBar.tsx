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

export default ({ ChoicedM, Setting }: StatusBarProps) => {
  const InclusionBool = (str: string): boolean => {
    const parsed = ChoicedM.split("_");
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
        ["Application", "Application"],
        ["Recommendation", "Recommendation"],
        ["Application_NoRequireApproval", "Do not require approval"],
        ["Application_RequireApproval", "Require approval"],
        ["Recommendation_Anyone", "Anyone"],
        ["Recommendation_OnlyAdministrator", "Only Administrator"],
        ["Recommendation_SomePeople", "Some People"],
        ["Application_RequireApproval_OnlyAdministrator", "Only Administrator"],
        ["Application_RequireApproval_SomePeople", "Some People"],
        ["Application_RequireApproval_Voting", "Voting"],
        ["Application_RequireApproval_Unanimity", "Unanimity"],
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
  ChoicedM: string;
  Setting: (e: any, ChoicedM: string) => void;
}
