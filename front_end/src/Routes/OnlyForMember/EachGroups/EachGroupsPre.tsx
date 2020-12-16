import React from "react";
import styled from "styled-components";
import HeaderCon from "./Header/HeaderCon";
import PersonalUserAreaCon from "./PersonalUserArea/PersonalUserAreaCon";
import MainCon from "./Main/MainCon";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import Loading from "../../../Components/ElementEtc/Effect/Loading";

const Wrapper = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 300px;
`;
const SharedArea = styled(W100per)`
  display: grid;
  grid-template-rows: 250px 1fr;
`;

export default ({ G_Data, G_Loading }: EachGroupsPreProps) => {
  return (
    <>
      {G_Loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <SharedArea>
            <HeaderCon G_Data={G_Data} />
            <MainCon />
          </SharedArea>
          <PersonalUserAreaCon />
        </Wrapper>
      )}
    </>
  );
};

interface EachGroupsPreProps {
  G_Data: any;
  G_Loading: boolean;
}
