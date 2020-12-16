import React from "react";
import PDHeaderPre from "./PDHeaderPre";

export default ({
  post,
  setLoginOpen,
  setAuthorWorkOpen,
  FirstImgSrc,
  zIndex = 20,
}: PDHeaderConProps) => {
  return (
    <PDHeaderPre
      zIndex={zIndex}
      post={post}
      setLoginOpen={setLoginOpen}
      setAuthorWorkOpen={setAuthorWorkOpen}
      FirstImgSrc={FirstImgSrc}
    />
  );
};

interface PDHeaderConProps {
  post: any;
  setLoginOpen: any;
  setAuthorWorkOpen: any;
  FirstImgSrc: any;
  zIndex?: number;
}
