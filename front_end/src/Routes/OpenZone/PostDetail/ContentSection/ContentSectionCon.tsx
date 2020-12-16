import React, { useEffect } from "react";
import ContentSectionPre from "./ContentSectionPre";

export default ({
  post_id,
  post,
  AddCommentOpen,
  setAddCommentOpen,
  FirstImgSrc,
  setFirstImgSrc,
}: ContentSectionConProps) => {
  useEffect(() => {
    const InArticle = document.getElementsByTagName("article")[0];
    const firstImg = InArticle.getElementsByTagName("img")[0];
    if (firstImg) {
      setFirstImgSrc(firstImg.src);
    } else {
      setFirstImgSrc(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post_id]);

  return (
    <ContentSectionPre
      post_id={post_id}
      post={post}
      AddCommentOpen={AddCommentOpen}
      setAddCommentOpen={setAddCommentOpen}
      FirstImgSrc={FirstImgSrc}
    />
  );
};

interface ContentSectionConProps {
  post_id: number;
  post: any;
  AddCommentOpen: boolean;
  setAddCommentOpen: any;
  FirstImgSrc: any;
  setFirstImgSrc: any;
}
