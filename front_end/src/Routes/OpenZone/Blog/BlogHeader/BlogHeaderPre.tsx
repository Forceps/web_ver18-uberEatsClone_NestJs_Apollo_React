import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  WH100perInput,
  H100per,
  W100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { Link } from "react-router-dom";
import FatText from "../../../../GlobalLib/Styles/IteratePattern/FatText";
import useSearch from "../../../../GlobalLib/RecycleFunction/Hooks/useSearch";
import ToggleMenuCon from "./ToggleMenu/ToggleMenuCon";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useLoginCheck } from "../../../../GlobalLib/Context/UserContext/IsLoggedIn";
import useScroll from "../../../../GlobalLib/RecycleFunction/Hooks/useScroll";
import { FlexCenter100per } from "../../../../GlobalLib/Styles/IteratePattern/ToCenter";

interface EnclosingProps {
  Position: any;
  Direction: number;
  zIndex: number;
}
const Enclosing = styled(W100per)<EnclosingProps>`
  ${(p) => {
    if (p.Direction === -1 || p.Position.y < 150) {
      return css`
        top: 0px;
      `;
    } else {
      return css`
        top: -50px;
      `;
    }
  }}
  display: grid;
  height: 50px;
  transition: top 0.2s ease-in-out;
  grid-template-columns: 1fr 250px 1fr;
  background-color: rgba(250, 250, 250, 0.8);
  position: fixed;
  left: 0;
  z-index: ${(p) => p.zIndex};
`;
const Left = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
`;
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
const LI = styled.div`
  display: grid;
  justify-content: right;
  width: 22px;
  height: 22px;
  background-color: #2d3436;
  padding: 5px 2px 0 0;
`;
const LIT = styled.div`
  color: white;
  font-size: 1rem;
`;
const LogoText = styled(({ ...rest }) => <FatText {...rest} />)`
  display: inline-block;
  font-size: 20px;
  color: black;
`;
const MyName = styled.div`
  margin: 0 0 0 30px;
  font-size: 1rem;
  cursor: pointer;
`;
const Center = styled(FlexCenter100per)`
  padding: 0 0 0 11px;
`;
const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 35px;
  min-width: 370px;
  width: 50%;
  height: 35px;
`;
const SearchTxt = styled(WH100perInput)`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #636e72;
`;
const SearchBtn = styled(FlexCenter100per)`
  font-size: 1.2rem;
  cursor: pointer;
`;
const Right = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  padding: 0 11px 0 0;
  font-size: 1.2rem;
`;
const HMenu = styled(H100per)`
  display: flex;
  align-items: center;
  padding: 0 5px 0 5px;
  cursor: pointer;
  &:hover {
    & > div:nth-child(2) {
      display: flex;
    }
  }
`;
const MenuIcon = styled.i``;

export default ({ setLoginOpen, zIndex }: BlogHeaderPreProps) => {
  const { MEloading, MEdata } = useMyInfo();
  const { SearchKeyWord, Search } = useSearch();
  const { isLoggedIn } = useLoginCheck();
  const { Position, Direction } = useScroll();
  return (
    <Enclosing Direction={Direction} Position={Position} zIndex={zIndex}>
      <Left>
        <LogoLink to="/home">
          <LI>
            <LIT>S</LIT>
          </LI>
          <LogoText text="quare Post" />
        </LogoLink>
        {!isLoggedIn ? (
          <MyName
            onClick={(e) => {
              spaped(e);
              setLoginOpen(true);
            }}
          >
            Login
          </MyName>
        ) : MEloading ? (
          <MyName>Loading...</MyName>
        ) : (
          <MyName>{MEdata.username}</MyName>
        )}
      </Left>
      <Center>
        <SearchBox>
          <SearchTxt
            type="text"
            placeholder="Search"
            {...SearchKeyWord}
            onKeyUp={(e: any) => {
              if (e.keyCode === 13) {
                Search(e);
              }
            }}
            spellCheck="false"
          />
          <SearchBtn
            onClick={(e: any) => {
              Search(e);
            }}
          >
            <i className="icon-search" />
          </SearchBtn>
        </SearchBox>
      </Center>
      <Right>
        <HMenu>
          <MenuIcon className="icon-menu" />
          <ToggleMenuCon />
        </HMenu>
      </Right>
    </Enclosing>
  );
};

interface BlogHeaderPreProps {
  setLoginOpen: any;
  zIndex: number;
}
