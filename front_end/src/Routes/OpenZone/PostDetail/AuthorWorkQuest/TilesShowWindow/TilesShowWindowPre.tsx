import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import TileCon from "../../../../../Components/Post/Shape/Tile/TileCon";
import IncludeScrollBar from "../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import PaginationCon from "../../../../../Components/ElementEtc/Pagination/PaginationCon";

const LowerJaw = styled(IncludeScrollBar)`
  display: grid;
  grid-template-rows: 70px 1fr 80px 30px;
  background-color: rgba(99, 110, 114, 0.85);
  padding: 20px 30px 20px 5px;
  width: 100%;
  height: 100%;
`;
const TilesContainer = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const Header = styled(WH100per)`
  display: grid;
  grid-template-rows: 2fr 1.3fr;
  color: white;
  padding: 0 2px 0 0;
`;
const ExplainTitle = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
`;
const PgCon = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const OptionalInfo = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
`;

const TilesShowWindowPre = ({
  posts,
  loading,
  currentDirName,
  CurrentPostPage,
  setCurrentPostPage,
  PostOneTimeShow,
  TotalPostCount,
}: TilesShowWindowPreProps) => {
  return (
    <LowerJaw>
      <Header>
        <ExplainTitle>{currentDirName}</ExplainTitle>
        <OptionalInfo>
          {!loading &&
            `${posts.length} ${posts.length === 1 ? "post" : "posts"}`}
        </OptionalInfo>
      </Header>
      <TilesContainer>
        {!loading && posts.map((p) => <TileCon key={p.post_id} post={p} />)}
      </TilesContainer>
      <PgCon>
        <PaginationCon
          CurrentPostPage={CurrentPostPage}
          setCurrentPostPage={setCurrentPostPage}
          PostOneTimeShow={PostOneTimeShow}
          TotalPostCount={TotalPostCount}
          color="white"
        />
      </PgCon>
      <div />
    </LowerJaw>
  );
};

interface TilesShowWindowPreProps {
  posts: any[];
  loading: boolean;
  currentDirName: string;
  CurrentPostPage: number;
  setCurrentPostPage: any;
  PostOneTimeShow: number;
  TotalPostCount: number;
}

export default React.memo(TilesShowWindowPre);
