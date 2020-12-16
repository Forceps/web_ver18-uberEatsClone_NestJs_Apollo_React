import React from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import { W100per } from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useMyInfo } from "../../../../../../GlobalLib/Context/UserContext/Me";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

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

export default () => {
  const { MEdata } = useMyInfo();
  const history = useHistory();
  return (
    <>
      <MenuItem
        onClick={(e: any) => {
          spaped(e);
          history.push(`/`);
        }}
      >
        <MenuIcon className="icon-home hovMenuIcon" />
        <MenuTxt className="hovMenuTxt">Home</MenuTxt>
      </MenuItem>
      <MenuItem
        onClick={(e: any) => {
          spaped(e);
          history.push(`/notification`);
        }}
      >
        <MenuIcon className="icon-bell hovMenuIcon" />
        <MenuTxt className="hovMenuTxt">Notification</MenuTxt>
      </MenuItem>
      <MenuItem
        onClick={(e: any) => {
          spaped(e);
          history.push(`/bookmark/${MEdata?.user_id}`);
        }}
      >
        <MenuIcon className="icon-bookmark-empty hovMenuIcon" />
        <MenuTxt className="hovMenuTxt">Bookmark</MenuTxt>
      </MenuItem>
      <MenuItem
        onClick={(e: any) => {
          spaped(e);
          history.push(`/chat`);
        }}
      >
        <MenuIcon className="icon-comment-empty hovMenuIcon" />
        <MenuTxt className="hovMenuTxt">Chat</MenuTxt>
      </MenuItem>
    </>
  );
};
