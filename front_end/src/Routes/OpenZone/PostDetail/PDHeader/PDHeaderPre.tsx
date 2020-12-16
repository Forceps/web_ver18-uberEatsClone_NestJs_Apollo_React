import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  WH100perInput,
  W100per,
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { Link } from "react-router-dom";
import FatText from "../../../../GlobalLib/Styles/IteratePattern/FatText";
import useSearch from "../../../../GlobalLib/RecycleFunction/Hooks/useSearch";
import useScroll from "../../../../GlobalLib/RecycleFunction/Hooks/useScroll";
import ToggleMenuCon from "./ToggleMenu/ToggleMenuCon";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useLoginCheck } from "../../../../GlobalLib/Context/UserContext/IsLoggedIn";
import Avatar from "../../../../Components/User/HumanBlock/Avatar";
import { FlexCenter100per } from "../../../../GlobalLib/Styles/IteratePattern/ToCenter";

interface EnclosingProps {
  Position: any;
  Direction: number;
  FirstImgSrc: any;
  zIndex: number;
}
const Enclosing = styled(W100per)<EnclosingProps>`
  display: grid;
  transition: all 0.2s ease-in-out;
  grid-template-columns: 550px 1fr 550px;
  position: fixed;
  height: 50px;
  left: 0;
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
  ${(p) => {
    if (p.Position.y < 260 && p.FirstImgSrc) {
      return css`
        background-color: rgba(250, 250, 250, 0);
        color: #fafafa;
        & input {
          border-bottom: 1px solid #fafafa;
          color: #fafafa;
          &::placeholder {
            color: #fafafa;
          }
        }
        & span {
          color: #fafafa;
        }
        & .LI_in_PDHeader {
          background-color: #fafafa;
        }
        & .LIT_in_PDHeader {
          color: black;
          font-weight: 500;
        }
      `;
    } else {
      return css`
        background-color: rgba(250, 250, 250, 0.9);
        box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
      `;
    }
  }}
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
  white-space: nowrap;
`;
const MyName = styled.div`
  margin: 0 0 0 30px;
  font-size: 1rem;
  cursor: pointer;
`;
const Center = styled(FlexCenter100per)``;
const SearchBox = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 35px;
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
  position: relative;
  padding: 0 5px 0 5px;
  margin: 0 0 0 30px;
  &:hover {
    & > div:nth-child(2) {
      display: flex;
    }
  }
  cursor: pointer;
`;
const MenuIcon = styled.i``;
const AuthorInfo = styled(H100per)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const UserName = styled.div`
  font-size: 1rem;
  padding: 0 10px 0 15px;
  margin: 0 10px 0 0;
`;

export default ({
  post,
  setLoginOpen,
  setAuthorWorkOpen,
  FirstImgSrc,
  zIndex,
}: PDHeaderPreProps) => {
  const { MEloading, MEdata } = useMyInfo();
  const { SearchKeyWord, Search } = useSearch();
  const { Position, Direction } = useScroll();
  const { isLoggedIn } = useLoginCheck();
  return (
    <Enclosing
      Direction={Direction}
      Position={Position}
      FirstImgSrc={FirstImgSrc}
      zIndex={zIndex}
    >
      <Left>
        <LogoLink to="/home">
          <LI className="LI_in_PDHeader">
            <LIT className="LIT_in_PDHeader">S</LIT>
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
        <HMenu>
          <MenuIcon className="icon-menu" />
          <ToggleMenuCon />
        </HMenu>
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
        <AuthorInfo
          onClick={(e) => {
            spaped(e);
            setAuthorWorkOpen(true);
          }}
        >
          <Avatar url={post.user_postTouser.avatar} size={35} />
          <UserName>{post.user_postTouser.username}'s works</UserName>
        </AuthorInfo>
      </Right>
    </Enclosing>
  );
};

interface PDHeaderPreProps {
  zIndex: number;
  post: any;
  setLoginOpen: any;
  FirstImgSrc: any;
  setAuthorWorkOpen: any;
}
