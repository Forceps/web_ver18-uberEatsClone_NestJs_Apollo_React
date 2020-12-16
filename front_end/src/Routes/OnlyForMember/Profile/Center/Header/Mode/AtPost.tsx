import React from "react";
import styled, { css } from "styled-components";
import {
  useProfileDetailMode,
  useDirSelectorMode,
} from "../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { useProfileMode } from "../../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
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
    if (prop.PfDM === "popularity") {
      return css`
        border-bottom: 3px solid #2d3436;
        padding: 3px 0 0 0;
      `;
    }
  }}
`;
const ItemTL = styled(Item)<pSM>`
  ${(prop) => {
    if (prop.PfDM === "recent") {
      return css`
        border-bottom: 3px solid #2d3436;
        padding: 3px 0 0 0;
      `;
    }
  }}
`;
const Right = styled.div`
  display: grid;
  justify-content: right;
  width: 100%;
  height: 100%;
`;
const DirSelectorOpen = styled.div`
  display: grid;
  width: 40px;
  height: 100%;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(45, 52, 54, 0.8);
    color: white;
  }
  transition-property: background-color;
  transition-duration: 0.18s;
  transition-timing-function: ease;
  cursor: pointer;
`;
const DSOpenIcon = styled.i`
  font-size: 1rem;
`;

export default () => {
  const Mode = useProfileMode();
  const PfDM = useProfileDetailMode();
  const DSC = useDirSelectorMode();
  return (
    <Container>
      {(PfDM.Mode === "popularity" || PfDM.Mode === "recent") && (
        <Left>
          <Subject>{Mode.Mode}</Subject>
          <SelectBar>
            <ItemList
              onClick={() => {
                PfDM.setMode("popularity");
              }}
              PfDM={PfDM.Mode}
            >
              Popularity
            </ItemList>
            <ItemTL
              onClick={() => {
                PfDM.setMode("recent");
              }}
              PfDM={PfDM.Mode}
            >
              Recent
            </ItemTL>
          </SelectBar>
        </Left>
      )}
      <Right>
        {!DSC.Mode && (
          <DirSelectorOpen
            onClick={(e) => {
              spaped(e);
              DSC.setMode(true);
            }}
          >
            <DSOpenIcon className="icon-left-open" />
          </DirSelectorOpen>
        )}
      </Right>
    </Container>
  );
};
