import React from "react";
import styled, { css } from "styled-components";
import { W100per } from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useProfileMode } from "../../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { useHistory } from "react-router-dom";
import { useMyInfo } from "../../../../../../GlobalLib/Context/UserContext/Me";

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
          border-left: 3px solid #2d3436;
          padding: 0 0 0 7px;
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
  const { Mode, setMode } = useProfileMode();
  const { MEdata } = useMyInfo();
  const history = useHistory();
  return (
    <>
      {[
        ["Post", "pinboard"],
        ["Archive", "folder"],
        ["Social", "group"],
        ["Settings", "cog"],
      ].map((c) => (
        <MenuItem
          key={c[0]}
          onClick={(e: any) => {
            spaped(e);
            setMode([c[0]]);
          }}
          curMode={Mode[0]}
          staMode={c[0]}
        >
          <MenuIcon className={`icon-${c[1]} hovMenuIcon`} />
          <MenuTxt className="hovMenuTxt">{c[0]}</MenuTxt>
        </MenuItem>
      ))}
      <MenuItem
        onClick={(e: any) => {
          spaped(e);
          history.push(`/blog/${MEdata?.user_id}`);
        }}
      >
        <MenuIcon className="icon-vector-pencil hovMenuIcon" />
        <MenuTxt className="hovMenuTxt">My blog</MenuTxt>
      </MenuItem>
    </>
  );
};
