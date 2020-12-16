import React, { useState } from "react";
import PostCtrlPre from "./PostCtrlPre";
import { PostMetaInfoRequest } from "../../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostMeta/PostMetaInfo";
import useInput from "../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useTargetsShown } from "../../../../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";

const PostCtrlCon = () => {
  const TSP = useTargetsShown();
  const { data, loading } = PostMetaInfoRequest();
  const [createPost, setCreatePost] = useState(false);
  const SearchKeyWord = useInput("");
  const create_post_toggle = () => {
    setCreatePost((p) => !p);
  };
  const Search = async (e: any) => {
    spaped(e);
    if (SearchKeyWord.value) {
      await TSP.setKeyWord(SearchKeyWord.value);
      await TSP.SrloadGreeting();
      TSP.setPostTargetMode("Search");
    } else {
      TSP.setPostTargetMode("Whose");
    }
  };

  return loading ? (
    <div />
  ) : (
    <PostCtrlPre
      data={data?.postMetaInfo}
      createPost={createPost}
      create_post_toggle={create_post_toggle}
      Search={Search}
      SearchKeyWord={SearchKeyWord}
    />
  );
};

export default React.memo(PostCtrlCon);
