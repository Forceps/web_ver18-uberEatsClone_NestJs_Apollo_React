import React, { useEffect } from "react";
import { PostRecommendToUserLazyRequest } from "../../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostRecommend";
import { useLoginCheck } from "../../../../../../GlobalLib/Context/UserContext/IsLoggedIn";
import { useMyInfo } from "../../../../../../GlobalLib/Context/UserContext/Me";
import { usePostDetail } from "../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useDummyState } from "../../../../../../GlobalLib/Context/Lib/DummyState";
import { useUpdatePost } from "../../../../../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import { useProfileMode } from "../../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { useDirMode } from "../../../../../../GlobalLib/Context/ProfileContext/DirMode";
import RecommendPostsPre from "./RecommendPostsPre";
import { S_N_to_N } from "../../../../../../GlobalLib/RecycleFunction/etc/type_convert";

export default () => {
  const PD = usePostDetail();
  const DS = useDummyState();
  const UP = useUpdatePost();
  const Pmode = useProfileMode();
  const DC = useDirMode();
  const { isLoggedIn } = useLoginCheck();
  const { MEdata, MEloading } = useMyInfo();

  const [
    recoP_QueryLoad,
    { called: recoP_called, loading: recoP_loading, data: recoP_data },
  ] = PostRecommendToUserLazyRequest(S_N_to_N(MEdata?.user_id));

  const Pretreatment = async () => {
    Pmode.rememberLatestMode.current = Pmode.Mode;
    DC.rememberLocation.current = DC.Location;
    if (Pmode.Mode[0] !== "Post") {
      DC.setLocation(0);
      Pmode.setMode(["Post"]);
    }
  };
  useEffect(() => {
    if (isLoggedIn && !MEloading) {
      recoP_QueryLoad();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, MEloading]);
  useEffect(() => {
    Pretreatment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PD]);

  return (
    <RecommendPostsPre
      PD={PD}
      UP={UP}
      recoP_called={recoP_called}
      recoP_loading={recoP_loading}
      recoP_data={recoP_data?.postRecommendToUser}
    />
  );
};
