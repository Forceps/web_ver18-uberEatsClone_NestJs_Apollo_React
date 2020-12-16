import React, { useEffect } from "react";
import Tile from "../../../../../../Components/Post/Shape/Tile/TileCon";
import { SeePostAllRequest } from "../../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostR";
import styled from "styled-components";
import { W100per } from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Bundle = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 0px 0 30px 0;
`;

const TilesBundle = ({ skip = 0, take = 10, Finish }: TilesBundleProps) => {
  const { data, loading } = SeePostAllRequest(skip, take);

  useEffect(() => {
    if (data && data.seePosts.length === 0) {
      Finish.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Bundle>
      {!loading &&
        data.seePosts.map((post: any) => (
          <Tile key={post.post_id} post={post} />
        ))}
    </Bundle>
  );
};

interface TilesBundleProps {
  skip?: number;
  take?: number;
  Finish: any;
}

export default React.memo(TilesBundle);
