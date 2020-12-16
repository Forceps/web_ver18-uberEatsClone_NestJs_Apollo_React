import React, { useEffect } from "react";
import ShowAudioOnlyPre from "./ShowAudioOnlyPre";
import {
  AudioGetByDirIdRequest,
  AudioCountByDirIdRequest,
} from "../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Audio/AudioR";
import { useDirMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/DirMode";
import { useProfileMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { useProfileDetailMode } from "../../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";

export default ({
  setAddAudioScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowAudioOnlyConProps) => {
  const PfDM = useProfileDetailMode();
  const PM = useProfileMode();
  const { Location } = useDirMode();
  const { data: Audios, loading: AudiosLod } = AudioGetByDirIdRequest(
    0,
    Location,
    (PfDM.CurrentPage - 1) * PfDM.OneTimeShow,
    PfDM.OneTimeShow
  );
  const { data: AudioC, loading: AudioCLod } = AudioCountByDirIdRequest(
    0,
    Location
  );

  useEffect(() => {
    if (AudioC) {
      PfDM.setTotalCount(AudioC.musicCountByDirId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AudioC, PM.Mode, Location, PfDM.Mode]);

  return (
    <ShowAudioOnlyPre
      setAddAudioScn={setAddAudioScn}
      Audios={Audios}
      AudiosLod={AudiosLod || AudioCLod}
      setShowOneOpen={setShowOneOpen}
      setDetailInfo={setDetailInfo}
    />
  );
};
interface ShowAudioOnlyConProps {
  setAddAudioScn: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}
