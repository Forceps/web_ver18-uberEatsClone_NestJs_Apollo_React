import React, { useEffect, useState } from "react";
import TilesShowWindowPre from "./TilesShowWindowPre";
import { PostsByDirIdRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostByDirId";
import { S_N_to_N } from "../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { CountPostByDirIdRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCount/PostCount";

const TilesShowWindowCon = ({ post, ChoosedDir }: TilesShowWindowConProps) => {
  const user_id = S_N_to_N(post.user_postTouser.user_id);
  const [CurrentPostPage, setCurrentPostPage] = useState(1);
  const [PostOneTimeShow] = useState(15);
  const [TotalPostCount, setTotalPostCount] = useState(0);

  const { data, loading } = PostsByDirIdRequest(
    user_id,
    ChoosedDir[0],
    "recent",
    (CurrentPostPage - 1) * PostOneTimeShow,
    PostOneTimeShow
  );
  const { data: WpcData, loading: WpcLoading } = CountPostByDirIdRequest(
    user_id,
    ChoosedDir[0]
  );

  useEffect(() => {
    if (WpcData) {
      setTotalPostCount(WpcData.countPostByDirId);
      setCurrentPostPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [WpcData, ChoosedDir]);

  return (
    <TilesShowWindowPre
      posts={data?.postsByDirId}
      loading={loading || WpcLoading}
      currentDirName={ChoosedDir[1]}
      CurrentPostPage={CurrentPostPage}
      setCurrentPostPage={setCurrentPostPage}
      PostOneTimeShow={PostOneTimeShow}
      TotalPostCount={TotalPostCount}
    />
  );
};

interface TilesShowWindowConProps {
  post: any;
  ChoosedDir: [number, string];
}

export default React.memo(TilesShowWindowCon);
