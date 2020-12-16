import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Loading from "../../../../Components/ElementEtc/Effect/Loading";
import Tile from "../../../../Components/Post/Shape/Tile/TileCon";
import CommentsPartCon from "../../../../Components/Post/CommentsPart/CommentsPartCon";
import { LocateMiddle } from "../ContentSection/ContentSectionPre";

const Wrp = styled(W100per)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 0 0;
`;
const PieceOfWork = styled(W100per)`
  display: flex;
  justify-content: center;
  margin: 70px 0 0 0;
  flex-shrink: 1;
`;
const HemIn = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  padding: 10px 20px 20px 20px;
  max-width: 100%;
`;
const WriterName = styled(WH100per)`
  padding: 0 0 0 10px;
  font-size: 1.2rem;
`;
const PostBoxes = styled(W100per)`
  display: flex;
  justify-content: center;
`;
const PostBoxesInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const MoreCommentsShow = styled(W100per)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 50px 0 0 0;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
  font-size: 1.2rem;
`;
const ForFooter = styled(W100per)`
  height: 80px;
`;

const UndersPre = ({
  post_id,
  relatedPost,
  relatedPostLoading,
  AddCommentOpen,
  CommentDeploy,
  setCommentDeploy,
}: UndersPreProps) => {
  return (
    <Wrp>
      {AddCommentOpen && (
        <LocateMiddle>
          <CommentsPartCon post_id={post_id} />
          {CommentDeploy ? (
            <ForFooter />
          ) : (
            <MoreCommentsShow
              onClick={() => {
                setCommentDeploy(true);
              }}
            >
              <i className="icon-down-open" />
            </MoreCommentsShow>
          )}
        </LocateMiddle>
      )}
      {(!AddCommentOpen || !CommentDeploy) && (
        <PieceOfWork>
          <HemIn>
            <WriterName>Related</WriterName>
            <PostBoxes>
              {relatedPostLoading ? (
                <Loading />
              ) : (
                <PostBoxesInner>
                  {relatedPost.map((post: any) => (
                    <Tile key={post.post_id} post={post} />
                  ))}
                </PostBoxesInner>
              )}
            </PostBoxes>
          </HemIn>
        </PieceOfWork>
      )}
    </Wrp>
  );
};
interface UndersPreProps {
  post_id: number;
  relatedPost: any;
  relatedPostLoading: boolean;
  AddCommentOpen: boolean;
  CommentDeploy: boolean;
  setCommentDeploy: any;
}

export default React.memo(UndersPre);
