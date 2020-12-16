import React, { useState } from "react";
import styled, { css } from "styled-components";
import HiddenLMore from "./HiddenLMore";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import OutsideMenu from "./InsideOutside/OutsideMenu";
import InsideMenu from "./InsideOutside/InsideMenu";
import { FlexCenter100per } from "../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const Wrapper = styled(W100per)`
  display: grid;
  grid-template-rows: 35px 1fr;
  margin-top: 10px;
  user-select: none;
`;
const LeftMenu = styled(W100per)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 10px;
`;
interface MenuItemProps {
  curMode?: string;
  staMode?: string;
}
const MenuItem = styled(W100per)<MenuItemProps>`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 1.1rem;
  padding: 0 0 0 10px;
  justify-self: right;
  color: black;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
  ${(p) => {
    if (p.curMode && p.staMode) {
      if (p.curMode === p.staMode) {
        return css`
          border-left: 4px solid #2d3436;
        `;
      }
    }
  }}
  @media (max-width: 1300px) {
    display: grid;
    width: 100%;
    padding: 10px 0 10px 0;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #dfe6e9;
    }
  }
`;
const MenuItemO1 = styled(({ ...rest }) => <MenuItem {...rest} />)`
  display: none;
`;
const MenuIcon = styled.i`
  margin-right: 8px;
  @media (max-width: 1300px) {
    margin: 0;
    font-size: 1.1rem;
    text-align: center;
  }
`;
const MenuTxt = styled.div`
  @media (max-width: 1300px) {
    font-size: 1rem;
    padding: 3px 0 0 0;
    justify-content: center;
    align-items: center;
  }
`;
const MetaSelect = styled(WH100per)`
  display: grid;
  grid-template-columns: 80px 70px 1fr;
  padding: 0 7px 0 7px;
  font-size: 1.1rem;
`;
const MetaItem = styled(FlexCenter100per)`
  border-bottom: 1px solid #b2bec3;
  cursor: pointer;
`;
interface InsideProp {
  Inside: boolean;
}
const MetaItem1 = styled(MetaItem)<InsideProp>`
  ${(p) => {
    if (!p.Inside) {
      return css`
        border-bottom: 1px solid black;
      `;
    }
  }}
`;
const MetaItem2 = styled(MetaItem)<InsideProp>`
  ${(p) => {
    if (p.Inside) {
      return css`
        border-bottom: 1px solid black;
      `;
    }
  }}
`;

export default () => {
  const [More, setMore] = useState(false);
  const [Inside, setInside] = useState(true);
  return (
    <Wrapper>
      <MetaSelect>
        <MetaItem1
          onClick={() => {
            setInside(false);
          }}
          Inside={Inside}
        >
          Outside
        </MetaItem1>
        <MetaItem2
          onClick={() => {
            setInside(true);
          }}
          Inside={Inside}
        >
          Inside
        </MetaItem2>
      </MetaSelect>
      <LeftMenu>
        {Inside ? <InsideMenu /> : <OutsideMenu />}

        {More ? (
          <HiddenLMore setMore={setMore} />
        ) : (
          <MenuItemO1
            onClick={(e: any) => {
              spaped(e);
              setMore(true);
            }}
            to={`/profile`}
          >
            <MenuIcon className="icon-dot-3" />
            <MenuTxt className="hovMenuTxt">More</MenuTxt>
          </MenuItemO1>
        )}
      </LeftMenu>
    </Wrapper>
  );
};
