import React, { useEffect } from "react";
import ShowImgOnlyPre from "./ShowImgOnlyPre";
import {
  ImgGetByDirIdRequest,
  ImgCountByDirIdRequest,
} from "../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Image/ImageR";
import { useProfileDetailMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { useDirMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/DirMode";
import { useProfileMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/ProfileMode";

const ShowImgOnlyCon = ({
  setAddImgScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowImgOnlyConProps) => {
  const PfDM = useProfileDetailMode();
  const PM = useProfileMode();
  const { Location } = useDirMode();
  const { data: Imgs, loading: ImgsLod } = ImgGetByDirIdRequest(
    0,
    Location,
    (PfDM.CurrentPage - 1) * PfDM.OneTimeShow,
    PfDM.OneTimeShow
  );
  const { data: ImgsC, loading: ImgsCLod } = ImgCountByDirIdRequest(
    0,
    Location
  );

  useEffect(() => {
    if (ImgsC) {
      PfDM.setTotalCount(ImgsC.imgCountByDirId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ImgsC, PM.Mode, Location, PfDM.Mode]);

  return (
    <ShowImgOnlyPre
      setAddImgScn={setAddImgScn}
      Imgs={Imgs}
      ImgsLod={ImgsLod || ImgsCLod}
      setShowOneOpen={setShowOneOpen}
      setDetailInfo={setDetailInfo}
    />
  );
};

interface ShowImgOnlyConProps {
  setAddImgScn: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}

export default React.memo(ShowImgOnlyCon);
