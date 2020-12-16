import React, { useState } from "react";
import MetaInfoPre from "./MetaInfoPre";
import { useMutation } from "@apollo/client";
import { LIKE_POST } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCUD";
import { S_N_to_N } from "../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { useLoginCheck } from "../../../../../GlobalLib/Context/UserContext/IsLoggedIn";
import { CountCommentsRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Comment/CommentR";

export default ({ post_id, post, setAddCommentOpen }: MetaInfoConProps) => {
  const { isLoggedIn } = useLoginCheck();
  const [likePostMutation] = useMutation(LIKE_POST);
  const [InitLikes, setInitLikes] = useState(post.likes);
  const [LikeClicked, setLikeClicked] = useState(false);
  const [LoginOpen, setLoginOpen] = useState(false);
  const postLikeIncrease = () => {
    if (isLoggedIn) {
      try {
        likePostMutation({
          variables: {
            post_id: S_N_to_N(post.post_id),
          },
        });
        setInitLikes((p: number) => p + 1);
        setLikeClicked(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      setLoginOpen(true);
    }
  };
  const { data, loading } = CountCommentsRequest(post_id);
  return loading ? (
    <div />
  ) : (
    <MetaInfoPre
      post={post}
      setAddCommentOpen={setAddCommentOpen}
      InitLikes={InitLikes}
      LikeClicked={LikeClicked}
      postLikeIncrease={postLikeIncrease}
      LoginOpen={LoginOpen}
      setLoginOpen={setLoginOpen}
      commentsCount={data?.countComments?.commentsCount}
    />
  );
};

interface MetaInfoConProps {
  post_id: number;
  post: any;
  setAddCommentOpen: any;
}
