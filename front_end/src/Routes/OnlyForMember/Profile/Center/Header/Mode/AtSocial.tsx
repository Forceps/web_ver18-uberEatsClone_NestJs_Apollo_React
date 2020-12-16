import React from "react";
import styled, { css } from "styled-components";
import { useProfileDetailMode } from "../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { useProfileMode } from "../../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import WH100per, {
  H100per,
} from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Container = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
`;
const Left = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  min-width: 600px;
  align-items: center;
`;
const Subject = styled.div`
  display: inline-block;
  font-size: 1.3rem;
  margin: -9px 0 0 12px;
  justify-content: center;
  align-self: left;
`;
const SelectBar = styled(H100per)`
  display: grid;
  grid-template-columns: 110px 80px;
  font-size: 1.1rem;
  justify-self: right;
  align-items: center;
`;
const Item = styled(H100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 3px 0 3px 0;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
interface pSM {
  PfDM: string;
}
const ItemList = styled(Item)<pSM>`
  ${(prop) => {
    if (prop.PfDM === "Subscribe") {
      return css`
        border-bottom: 3px solid #2d3436;
        padding: 3px 0 0 0;
      `;
    }
  }}
`;
const ItemTL = styled(Item)<pSM>`
  ${(prop) => {
    if (prop.PfDM === "Friends") {
      return css`
        border-bottom: 3px solid #2d3436;
        padding: 3px 0 0 0;
      `;
    }
  }}
`;

export default () => {
  const Mode = useProfileMode();
  const PfDM = useProfileDetailMode();
  return (
    <Container>
      <Left>
        <Subject>{Mode.Mode}</Subject>
        <SelectBar>
          <ItemList
            onClick={() => {
              PfDM.setScMode("Subscribe");
            }}
            PfDM={PfDM.ScMode}
          >
            Subscribe
          </ItemList>
          <ItemTL
            onClick={() => {
              PfDM.setScMode("Friends");
            }}
            PfDM={PfDM.ScMode}
          >
            Friends
          </ItemTL>
        </SelectBar>
      </Left>
    </Container>
  );
};
