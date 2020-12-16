import React, { useState, useEffect } from "react";
import BlogPostPre from "./BlogPostPre";
import { WhosePostDirRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryR";
import { PostsByDirIdRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostByDirId";
import { CountPostByDirIdRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCount/PostCount";

const BlogPostCon = ({ user_id }: DisplayCon) => {
  const [ChoosedDir, setChoosedDir] = useState<[number, string]>([
    0,
    "Recent all",
  ]);
  const [PostSortBy, setPostSortBy] = useState("recent");
  const [CurrentPostPage, setCurrentPostPage] = useState(1);
  const [PostOneTimeShow] = useState(15);
  const [TotalPostCount, setTotalPostCount] = useState(0);

  const { data: WpData, loading: WpLoading } = PostsByDirIdRequest(
    user_id,
    ChoosedDir[0],
    PostSortBy,
    (CurrentPostPage - 1) * PostOneTimeShow,
    PostOneTimeShow
  );
  const { data: WpcData, loading: WpcLoading } = CountPostByDirIdRequest(
    user_id,
    ChoosedDir[0]
  );
  const { data: RootDirData, loading: RootDirDataLoad } = WhosePostDirRequest(
    user_id
  );

  useEffect(() => {
    if (WpcData) {
      setTotalPostCount(WpcData.countPostByDirId);
      setCurrentPostPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [WpcData, ChoosedDir]);

  return (
    <BlogPostPre
      WpData={WpData?.postsByDirId}
      WpLoading={WpLoading || WpcLoading}
      RootDirData={RootDirData?.whosePostDir}
      RootDirDataLoad={RootDirDataLoad}
      ChoosedDir={ChoosedDir}
      setChoosedDir={setChoosedDir}
      PostSortBy={PostSortBy}
      setPostSortBy={setPostSortBy}
      CurrentPostPage={CurrentPostPage}
      setCurrentPostPage={setCurrentPostPage}
      PostOneTimeShow={PostOneTimeShow}
      TotalPostCount={TotalPostCount}
      WpcLoading={WpcLoading}
    />
  );
};

interface DisplayCon {
  user_id: number;
}

export default React.memo(BlogPostCon);
