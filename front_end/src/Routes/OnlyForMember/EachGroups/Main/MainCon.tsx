import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import CategoriesCon from "./Categories/CategoriesCon";

const MainZone = styled(W100per)`
  display: grid;
  grid-template-columns: 300px 1fr;
`;

export default () => {
  return (
    <MainZone>
      <CategoriesCon />
      <div />
    </MainZone>
  );
};
