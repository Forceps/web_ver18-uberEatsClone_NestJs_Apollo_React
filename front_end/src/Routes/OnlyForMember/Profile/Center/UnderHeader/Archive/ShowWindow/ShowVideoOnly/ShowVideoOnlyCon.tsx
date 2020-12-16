import React, { useEffect } from "react";
import ShowVideoOnlyPre from "./ShowVideoOnlyPre";
import {
  VideoGetByDirIdRequest,
  VideoCountByDirIdRequest,
} from "../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Video/VideoR";
import { useProfileDetailMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { useProfileMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { useDirMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/DirMode";

export default ({
  setAddVideoScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowVideoOnlyConProps) => {
  const PfDM = useProfileDetailMode();
  const PM = useProfileMode();
  const { Location } = useDirMode();
  const { data: Videos, loading: VideosLod } = VideoGetByDirIdRequest(
    0,
    Location,
    (PfDM.CurrentPage - 1) * PfDM.OneTimeShow,
    PfDM.OneTimeShow
  );
  const { data: VideosC, loading: VideosCLod } = VideoCountByDirIdRequest(
    0,
    Location
  );

  useEffect(() => {
    if (VideosC) {
      PfDM.setTotalCount(VideosC.videoCountByDirId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [VideosC, PM.Mode, Location, PfDM.Mode]);

  return (
    <ShowVideoOnlyPre
      setAddVideoScn={setAddVideoScn}
      Videos={Videos}
      VideosLod={VideosLod || VideosCLod}
      setShowOneOpen={setShowOneOpen}
      setDetailInfo={setDetailInfo}
    />
  );
};
interface ShowVideoOnlyConProps {
  setAddVideoScn: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}
