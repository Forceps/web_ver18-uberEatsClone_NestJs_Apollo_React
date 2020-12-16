import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import TemporaryBackground from "../../../../../../../Components/ElementEtc/Effect/TemporaryBackground";
import Step1 from "./Steps/Step1 2 3/Step1";
import Header from "./HeadFoot/Header";
import Footer from "./HeadFoot/Footer";
import Step2 from "./Steps/Step1 2 3/Step2";
import Step3 from "./Steps/Step1 2 3/Step3";
import Step4 from "./Steps/Step4/Step4";
import Step5 from "./Steps/Step5/Step5";

const Container = styled(WH100per)<ConsoleProps>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: ${(prop) => prop.zIndex};
`;
type ConsoleProps = {
  zIndex: number;
};
const Consol = styled.div<ConsoleProps>`
  display: grid;
  grid-template-rows: 40px 1fr 30px;
  align-self: center;
  position: relative;
  width: 606px;
  height: 550px;
  background-color: white;
  z-index: ${(prop) => prop.zIndex};
`;

export default ({
  zIndex,
  setGroupMakeOpen,
  Phase,
  setPhase,
  NameAssign,
  PurposeAssign,
  CItems,
  setCItems,
  AddNum,
  setAddNum,
  ChoicedM,
  setChoicedM,
  ChoicedD,
  setChoicedD,
  NextActivateCondition,
  BackImg,
  setBackImg,
  PfImg,
  setPfImg,
  SatisfiedAll,
  MakeGroupTrigger,
}: OrganizePreProps) => {
  return (
    <>
      <Container zIndex={zIndex}>
        <TemporaryBackground
          onClick={() => {
            setGroupMakeOpen(false);
          }}
          zIndex={zIndex}
        />
        <Consol zIndex={zIndex + 4}>
          <Header
            Phase={Phase}
            setPhase={setPhase}
            NextActivateCondition={NextActivateCondition}
            SatisfiedAll={SatisfiedAll}
            MakeGroupTrigger={MakeGroupTrigger}
          />
          {Phase === 2 ? (
            <Step2
              zIndex={zIndex + 5}
              SettedNeme={NameAssign.value}
              BackImg={BackImg}
              setBackImg={setBackImg}
              PfImg={PfImg}
              setPfImg={setPfImg}
            />
          ) : Phase === 3 ? (
            <Step3
              CItems={CItems}
              setCItems={setCItems}
              AddNum={AddNum}
              setAddNum={setAddNum}
            />
          ) : Phase === 4 ? (
            <Step4 ChoicedM={ChoicedM} setChoicedM={setChoicedM} />
          ) : Phase === 5 ? (
            <Step5 ChoicedD={ChoicedD} setChoicedD={setChoicedD} />
          ) : (
            <Step1 NameAssign={NameAssign} PurposeAssign={PurposeAssign} />
          )}
          <Footer
            Phase={Phase}
            setPhase={setPhase}
            NextActivateCondition={NextActivateCondition}
          />
        </Consol>
      </Container>
    </>
  );
};
interface OrganizePreProps {
  zIndex: number;
  setGroupMakeOpen: any;
  Phase: number;
  setPhase: any;
  NameAssign: any;
  PurposeAssign: any;
  CItems: { id: number; name: string }[];
  setCItems: any;
  AddNum: number;
  setAddNum: any;
  ChoicedM: string;
  setChoicedM: any;
  ChoicedD: string;
  setChoicedD: any;
  NextActivateCondition: () => boolean;
  BackImg: string;
  setBackImg: any;
  PfImg: string;
  setPfImg: any;
  SatisfiedAll: () => boolean;
  MakeGroupTrigger: () => void;
}
