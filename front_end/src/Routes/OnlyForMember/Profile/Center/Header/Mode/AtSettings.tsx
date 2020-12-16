import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

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

export default () => {
  return (
    <Container>
      <Left>
        <Subject>Settings</Subject>
      </Left>
    </Container>
  );
};
