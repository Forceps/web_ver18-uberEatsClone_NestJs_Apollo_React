import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
const SelectScreen = styled(WH100per)`
  display: flex;
  padding: 5px;
`;
const Accessibility = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 10px;
  background-color: #dfe6e9;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const BtnSpace = styled(WH100per)`
  padding: 5px;
`;
const ChoiceA = styled(Accessibility)``;
const ChoiceB = styled(Accessibility)``;
const ChoiceC = styled(Accessibility)``;
const ChoiceD = styled(Accessibility)``;
const Sbj = styled(WH100per)`
  font-size: 1.2rem;
`;
const Explain = styled(WH100per)`
  display: grid;
  grid-template-rows: 30px 1fr;
  font-size: 1rem;
  color: #636e72;
  line-height: 1.4rem;
`;
const SubSbj = styled(WH100per)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #636e72;
  font-size: 0.9rem;
`;
const ExTxt = styled(WH100per)`
  padding: 5px 2px 2px 2px;
`;
const FourChoice = styled(WH100per)`
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 50%;
    height: 50%;
    & > div {
      display: grid;
      grid-template-rows: 1fr 2fr;
    }
  }
`;

export default ({ ChoicedD, Setting }: SelsectScreenProps) => {
  return (
    <SelectScreen>
      {ChoicedD === "Start" ? (
        <>
          <BtnSpace>
            <ChoiceA
              onClick={(e) => {
                Setting(e, "ExitOrder");
              }}
            >
              <Sbj>Exist exit order</Sbj>
              <Explain>
                <SubSbj>Recommended</SubSbj>
                <ExTxt>Organization that needs management</ExTxt>
              </Explain>
            </ChoiceA>
          </BtnSpace>
          <BtnSpace>
            <ChoiceB
              onClick={(e) => {
                Setting(e, "Spontaneous");
              }}
            >
              <Sbj>Only spontaneous</Sbj>
              <Explain>
                <SubSbj>Recommended</SubSbj>
                <ExTxt>Native organization</ExTxt>
              </Explain>
            </ChoiceB>
          </BtnSpace>
        </>
      ) : ChoicedD === "ExitOrder" ? (
        <FourChoice>
          <BtnSpace>
            <ChoiceA
              onClick={(e) => {
                Setting(e, "ExitOrder_OnlyAdministrator");
              }}
            >
              <Sbj>Only Administrator</Sbj>
              <Explain>
                <SubSbj>Recommended</SubSbj>
                <ExTxt>for medium-sized organization</ExTxt>
              </Explain>
            </ChoiceA>
          </BtnSpace>
          <BtnSpace>
            <ChoiceB
              onClick={(e) => {
                Setting(e, "ExitOrder_Voting");
              }}
            >
              <Sbj>Voting</Sbj>
              <Explain>
                <SubSbj>Recommended</SubSbj>
                <ExTxt>for small organization</ExTxt>
              </Explain>
            </ChoiceB>
          </BtnSpace>
          <BtnSpace>
            <ChoiceC
              onClick={(e) => {
                Setting(e, "ExitOrder_SomePeople");
              }}
            >
              <Sbj>Some people</Sbj>
              <Explain>
                <SubSbj>Recommended</SubSbj>
                <ExTxt>for large organization</ExTxt>
              </Explain>
            </ChoiceC>
          </BtnSpace>
          <BtnSpace>
            <ChoiceD
              onClick={(e) => {
                Setting(e, "ExitOrder_Unanimity");
              }}
            >
              <Sbj>Unanimity</Sbj>
              <Explain>
                <SubSbj>Recommended</SubSbj>
                <ExTxt>for very small organization</ExTxt>
              </Explain>
            </ChoiceD>
          </BtnSpace>
        </FourChoice>
      ) : (
        <div />
      )}
    </SelectScreen>
  );
};

interface SelsectScreenProps {
  ChoicedD: string;
  Setting: (e: any, ChoicedD: string) => void;
}
