import React, { useState, useEffect } from "react";
import PostDetailPre from "./PostDetailPre";
import { useParams } from "react-router-dom";
import { SeePostRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostR";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";

export default () => {
  const { post_id: post_id_extract }: any = useParams();
  const post_id = S_N_to_N(post_id_extract);
  const { data, loading } = SeePostRequest(post_id);
  const [AddCommentOpen, setAddCommentOpen] = useState(true);
  const [LoginOpen, setLoginOpen] = useState(false);
  const [AuthorWorkOpen, setAuthorWorkOpen] = useState(false);
  const [FirstImgSrc, setFirstImgSrc] = useState<any>(undefined);

  useEffect(() => {
    setAuthorWorkOpen(false);
  }, [data]);

  return loading ? (
    <div />
  ) : (
    <PostDetailPre
      post_id={post_id}
      post={data?.seePost}
      AddCommentOpen={AddCommentOpen}
      setAddCommentOpen={setAddCommentOpen}
      LoginOpen={LoginOpen}
      setLoginOpen={setLoginOpen}
      AuthorWorkOpen={AuthorWorkOpen}
      setAuthorWorkOpen={setAuthorWorkOpen}
      FirstImgSrc={FirstImgSrc}
      setFirstImgSrc={setFirstImgSrc}
    />
  );
};
