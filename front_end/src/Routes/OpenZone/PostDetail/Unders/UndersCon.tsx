import React, { useState } from "react";
import UndersPre from "./UndersPre";
import { PostRecommendByPostRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostRecommend";

const UndersCon = ({ post_id, AddCommentOpen }: UndersConProps) => {
  const [CommentDeploy, setCommentDeploy] = useState(false);
  const {
    data: relatedPost,
    loading: relatedPostLoading,
  } = PostRecommendByPostRequest([post_id], 0, 15);

  return (
    <UndersPre
      post_id={post_id}
      relatedPost={relatedPost?.postRecommendByPost}
      relatedPostLoading={relatedPostLoading}
      AddCommentOpen={AddCommentOpen}
      CommentDeploy={CommentDeploy}
      setCommentDeploy={setCommentDeploy}
    />
  );
};
interface UndersConProps {
  post_id: number;
  AddCommentOpen: boolean;
}

export default React.memo(UndersCon);
