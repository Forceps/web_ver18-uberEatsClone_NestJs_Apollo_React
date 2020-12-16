import React, { useState } from "react";
import AuthorWorkQuestPre from "./AuthorWorkQuestPre";

const AuthorWorkQuestCon = ({
  zIndex = 30,
  post,
  setAuthorWorkOpen,
}: AuthorWorkQuestConProps) => {
  const [ChoosedDir, setChoosedDir] = useState<[number, string]>([
    0,
    "Recent all",
  ]);
  return (
    <AuthorWorkQuestPre
      zIndex={zIndex}
      post={post}
      setAuthorWorkOpen={setAuthorWorkOpen}
      ChoosedDir={ChoosedDir}
      setChoosedDir={setChoosedDir}
    />
  );
};

interface AuthorWorkQuestConProps {
  zIndex?: number;
  post: any;
  setAuthorWorkOpen: any;
}

export default React.memo(AuthorWorkQuestCon);
