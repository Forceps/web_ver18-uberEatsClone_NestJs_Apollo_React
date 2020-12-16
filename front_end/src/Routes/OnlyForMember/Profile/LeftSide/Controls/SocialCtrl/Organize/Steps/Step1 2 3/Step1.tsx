import React, { useEffect } from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Wrapper = styled(WH100per)`
  padding: 0 60px 0 60px;
`;
const Naming = styled(W100per)`
  display: flex;
  flex-direction: column;
  margin: 70px 0 0 0;
`;
const NamingInput = styled.input`
  width: 100%;
  padding: 10px 5px 10px 5px;
  border: 0;
  border-left: 2px solid #2d3436;
  font-size: 1.1rem;
`;
const Purpose = styled(W100per)`
  display: flex;
  flex-direction: column;
  margin: 70px 0 0 0;
`;
const Sbj = styled(W100per)`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;
const PurposeInput = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 5px;
  border: 0;
  font-size: 1.1rem;
  background-color: #dfe6e9;
`;

export default ({ NameAssign, PurposeAssign }: MakingGroupStep1Props) => {
  useEffect(() => {
    document.getElementById("makingGroupsName")?.focus();
  }, []);
  return (
    <Wrapper>
      <Naming>
        <NamingInput
          placeholder="Name"
          {...NameAssign}
          spellCheck="false"
          id="makingGroupsName"
        />
      </Naming>
      <Purpose>
        <Sbj>Purpose</Sbj>
        <PurposeInput
          placeholder="Purpose"
          spellCheck="false"
          {...PurposeAssign}
          {...PurposeAssign}
        ></PurposeInput>
      </Purpose>
    </Wrapper>
  );
};

interface MakingGroupStep1Props {
  NameAssign: any;
  PurposeAssign: any;
}
