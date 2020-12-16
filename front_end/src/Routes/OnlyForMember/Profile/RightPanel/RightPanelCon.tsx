import React, { useState, useEffect } from "react";
import RightPanelPre from "./RightPanelPre";
import { useDummyState } from "../../../../GlobalLib/Context/Lib/DummyState";
import { useProfileMode } from "../../../../GlobalLib/Context/ProfileContext/ProfileMode";

export default () => {
  const Mode = useProfileMode();
  const DS = useDummyState();
  const [MakeDirOpen, setMakeDirOpen] = useState(false);
  const [UpdateDirOpen, setUpdateDirOpen] = useState(false);
  const [UDirObj, setUDirObj] = useState(null);
  const [DeleteDirOpen, setDeleteDirOpen] = useState(false);
  const [DKeyActive, setDKeyActive] = useState(false);
  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Mode]);

  return (
    <RightPanelPre
      MakeDirOpen={MakeDirOpen}
      setMakeDirOpen={setMakeDirOpen}
      UpdateDirOpen={UpdateDirOpen}
      setUpdateDirOpen={setUpdateDirOpen}
      UDirObj={UDirObj}
      setUDirObj={setUDirObj}
      DeleteDirOpen={DeleteDirOpen}
      setDeleteDirOpen={setDeleteDirOpen}
      DKeyActive={DKeyActive}
      setDKeyActive={setDKeyActive}
    />
  );
};
