import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  W100per,
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import useScroll from "../../../../GlobalLib/RecycleFunction/Hooks/useScroll";
import ToggleMenuCon from "./ToggleMenu/ToggleMenuCon";
import Logo from "../../../../Components/ElementEtc/Effect/Logo";
import { FlexCenter100per } from "../../../../GlobalLib/Styles/IteratePattern/ToCenter";

interface EnclosingProps {
  Position: any;
  Direction: number;
}
const Enclosing = styled(W100per)<EnclosingProps>`
  ${(prop) => {
    if (prop.Direction === -1 || prop.Position.y < 150) {
      return css`
        display: grid;
        transition: top 0.2s ease-in-out;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
  grid-template-columns: 270px 1fr 270px;
  position: fixed;
  height: 50px;
  background-color: #fafafa;
  z-index: 10;
`;
const Left = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
`;
const Center = styled(FlexCenter100per)`
  padding: 0 0 0 11px;
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

export default () => {
  const { Position, Direction } = useScroll();
  return (
    <Enclosing Direction={Direction} Position={Position}>
      <Left>
        <Logo size={22} />
      </Left>
      <Center></Center>
      <Right>
        <HMenu>
          <MenuIcon className="icon-menu" />
          <ToggleMenuCon />
        </HMenu>
      </Right>
    </Enclosing>
  );
};
