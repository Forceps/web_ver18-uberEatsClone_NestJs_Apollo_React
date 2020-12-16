import React from "react";
import { usePostDetail } from "../../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import PostDetailT from "../../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetailT";
import Tile from "../../../../../../../Components/Post/Shape/Tile/TileCon";
import styled from "styled-components";
import WH100per from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { useDirMode } from "../../../../../../../GlobalLib/Context/ProfileContext/DirMode";

const Embosom = styled(WH100per)`
  display: grid;
  grid-template-rows: 50px 1fr;
  max-height: 100%;
  overflow: hidden;
`;
const RestArea = styled(IncludeScrollBar)`
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
`;
const Classification = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 10px 0 0 11px;
  font-size: 1.2rem;
`;

export default ({ data }: ThingsWallProps) => {
  const PD = usePostDetail();
  const { DirData, DirData_loading } = useDirMode();
  return (
    <Embosom>
      <Classification>
        {!DirData_loading && (DirData.directory ? DirData.name : "Recent all")}
      </Classification>
      <RestArea>
        {data.map((post: any) => (
          <Tile key={post.post_id} post={post} />
        ))}
      </RestArea>
      {PD.OpenSeePostDetail && <PostDetailT />}
    </Embosom>
  );
};

interface ThingsWallProps {
  data: any;
}
