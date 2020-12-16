import React, { useEffect, useState } from "react";
import RecentPostsPre from "./RecentPostsPre";
import { usePostDetail } from "../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useDummyState } from "../../../../../../GlobalLib/Context/Lib/DummyState";
import { useUpdatePost } from "../../../../../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import { useProfileMode } from "../../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { useDirMode } from "../../../../../../GlobalLib/Context/ProfileContext/DirMode";
import useInfiniteScroll from "../../../../../../GlobalLib/RecycleFunction/Hooks/useInfiniteScroll";

export default ({ SeeMode = "general" }: RecentPostsConProps) => {
  const PD = usePostDetail();
  const DS = useDummyState();
  const UP = useUpdatePost();
  const Pmode = useProfileMode();
  const DC = useDirMode();
  const { List, Finish } = useInfiniteScroll();
  const [OntTimeShow] = useState(1);

  const Pretreatment = async () => {
    Pmode.rememberLatestMode.current = Pmode.Mode;
    DC.rememberLocation.current = DC.Location;
    if (Pmode.Mode[0] !== "Post") {
      DC.setLocation(0);
      Pmode.setMode(["Post"]);
    }
  };
  useEffect(() => {
    Pretreatment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PD]);
  useEffect(() => {
    if (List.length > 30) {
      Finish.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [List]);

  return (
    <RecentPostsPre
      List={List}
      PD={PD}
      UP={UP}
      SeeMode={SeeMode}
      OntTimeShow={OntTimeShow}
      Finish={Finish}
    />
  );
};
interface RecentPostsConProps {
  SeeMode?: string;
}
