import React from "react";
import styled from "styled-components";
import LeftSideMenuCon from "../../../Components/ElementEtc/LeftSideMenu/LeftSideMenuCon";
import MiddleCon from "./Middle/MiddleCon";
import HeaderCon from "./Header/HeaderCon";

const Body = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
`;
const UpAndDown = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`;

export default ({ SeeMode, setSeeMode }: HomePreProps) => {
  return (
    <Body>
      <LeftSideMenuCon />
      <UpAndDown>
        <HeaderCon setSeeMode={setSeeMode} />
        <MiddleCon SeeMode={SeeMode} />
        <div />
      </UpAndDown>
    </Body>
  );
};

interface HomePreProps {
  SeeMode: string;
  setSeeMode: any;
}
