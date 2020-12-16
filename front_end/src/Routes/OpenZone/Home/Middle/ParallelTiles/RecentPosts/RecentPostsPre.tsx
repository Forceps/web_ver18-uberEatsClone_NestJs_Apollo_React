import React from "react";
import styled from "styled-components";
import UpdatePostCon from "../../../../../../Components/Post/UpdatePost/UpdatePostCon";
import PostDetailT from "../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetailT";
import { W100per } from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useSearchUser } from "../../../../../../GlobalLib/Context/UserContext/SearchUser";
import TilesBundle from "./TilesBundle";

const Wrapper = styled(W100per)`
  display: grid;
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

export default ({
  List,
  PD,
  UP,
  SeeMode,
  OntTimeShow,
  Finish,
}: PostTimelinePreProps) => {
  const SU = useSearchUser();
  return (
    <Wrapper>
      <SmallTitle>
        {SeeMode === "Search" && SU.called ? "Post" : "New"}
      </SmallTitle>
      <Posts>
        {List.map((i) => (
          <TilesBundle skip={i * OntTimeShow} take={12} Finish={Finish} />
        ))}
      </Posts>
      {PD.OpenSeePostDetail && <PostDetailT />}
      {UP.UpdatePost &&
        PD.PostID !== "" &&
        !PD.postLoadingByID &&
        PD.postByID && <UpdatePostCon />}
    </Wrapper>
  );
};

interface PostTimelinePreProps {
  List: number[];
  PD: any;
  UP: any;
  SeeMode: string;
  OntTimeShow: number;
  Finish: any;
}
