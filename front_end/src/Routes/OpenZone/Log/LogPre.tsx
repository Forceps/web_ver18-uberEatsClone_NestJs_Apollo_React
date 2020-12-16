import React from "react";
import styled from "styled-components";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import DataSpreadCon from "./DataSpread/DataSpreadCon";
import LeftSideMenuCon from "../../../Components/ElementEtc/LeftSideMenu/LeftSideMenuCon";
import { usePostDetail } from "../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import PostDetailT from "../../../GlobalLib/Context/PostContext/PostDetail/PostDetailT";

const Packing = styled(W100per)`
  display: grid;
  grid-template-columns: 240px 1fr;
`;
const NonPop = styled(W100per)`
  display: flex;
  min-height: 100px;
  padding: 30px 0 0 0;
`;

export default () => {
  const { OpenSeePostDetail } = usePostDetail();
  return (
    <>
      <Packing>
        <LeftSideMenuCon Log={false} />
        <NonPop>
          <DataSpreadCon />
        </NonPop>
      </Packing>
      {OpenSeePostDetail && <PostDetailT />}
    </>
  );
};
