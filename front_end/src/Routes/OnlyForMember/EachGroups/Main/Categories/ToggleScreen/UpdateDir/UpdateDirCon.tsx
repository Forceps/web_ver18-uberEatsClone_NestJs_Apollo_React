import React, { useState, useRef, useEffect } from "react";
import { useMutation } from "@apollo/client";
import UpdateDirPre from "./UpdateDirPre";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import useInput from "../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useDirMode } from "../../../../../../../GlobalLib/Context/ProfileContext/DirMode";
import { UPDATE_DIR } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryCUD";

export default ({ setUpdateDirOpen, UDirObj }: UpdateDirCon) => {
  const DC = useDirMode();
  const DirName = useInput(UDirObj.name);
  const [DirApOpen, setDirApOpen] = useState(false);
  const InitialDir = useRef(DC.Location);
  const AfterwardsDir = useRef(DC.Location);
  const UpdateDirTrigger = async (e: any) => {
    spaped(e);
    try {
      await UpdateDirMutation();
      AfterwardsDir.current = DC.Location;
    } catch (e) {
      console.log(e);
    } finally {
      await DC.DirData_refetch();
      await DC.setLocation(InitialDir.current);
      await DC.DirData_refetch();
      await DC.setLocation(AfterwardsDir.current);
      setUpdateDirOpen(false);
    }
  };
  const [UpdateDirMutation] = useMutation(UPDATE_DIR, {
    variables: {
      directory_id: parseInt(UDirObj.directory_id),
      name: DirName.value,
      parent_id: parseInt(DC.DirData.directory_id),
    },
  });
  useEffect(() => {
    document.getElementById("UpdatingDirectory")?.focus();
  }, []);

  return (
    <UpdateDirPre
      setUpdateDirOpen={setUpdateDirOpen}
      DirName={DirName}
      UpdateDirTrigger={UpdateDirTrigger}
      DirApOpen={DirApOpen}
      setDirApOpen={setDirApOpen}
      DC={DC}
      InitialDir={InitialDir}
      UDirObj={UDirObj}
    />
  );
};
type UpdateDirCon = {
  setUpdateDirOpen: any;
  UDirObj: any;
};
