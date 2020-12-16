import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import PostDetailT from "../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetailT";
import TileCon from "../../../../../../Components/Post/Shape/Tile/TileCon";
import UpdatePostCon from "../../../../../../Components/Post/UpdatePost/UpdatePostCon";

const Wrapper = styled(W100per)`
  display: grid;
  margin: 20px 0 50px 0;
`;
const Posts = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  padding: 11px 11px 0 1px;
`;
const SmallTitle = styled(W100per)`
  display: grid;
  align-items: center;
  padding: 14px 0 0 10px;
  font-size: 1.3rem;
`;

type RecommendPostsPreProps = {
  PD: any;
  UP: any;
  recoP_called: boolean;
  recoP_loading: boolean;
  recoP_data: any;
};
export default ({
  PD,
  UP,
  recoP_called,
  recoP_loading,
  recoP_data,
}: RecommendPostsPreProps) => {
  return recoP_called &&
    !recoP_loading &&
    recoP_data &&
    recoP_data.length !== 0 ? (
    <Wrapper>
      <SmallTitle>Recommend</SmallTitle>
      <Posts>
        {recoP_data?.map((post: any) => (
          <TileCon key={post.post_id} post={post} />
        ))}
      </Posts>
      {PD.OpenSeePostDetail && <PostDetailT />}
      {UP.UpdatePost &&
        PD.PostID !== "" &&
        !PD.postLoadingByID &&
        PD.postByID && <UpdatePostCon />}
    </Wrapper>
  ) : (
    <></>
  );
};
