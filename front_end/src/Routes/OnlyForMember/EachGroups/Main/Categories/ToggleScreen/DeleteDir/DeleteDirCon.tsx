import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import DeleteDirPre from "./DeleteDirPre";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { DELETE_DIR } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryCUD";
import { S_N_to_N } from "../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { useDirMode } from "../../../../../../../GlobalLib/Context/ProfileContext/DirMode";

export default ({
  setDeleteDirOpen,
  UDirObj,
  DKeyActive,
  setDKeyActive,
}: DeleteDirConProps) => {
  const DC = useDirMode();
  const DeleteDirTrigger = async (e: any) => {
    spaped(e);
    try {
      await DeleteDirMutation();
    } catch (e) {
      console.log(e);
    } finally {
      setDeleteDirOpen(false);
      DC.DirData_refetch();
    }
  };
  const [DeleteDirMutation] = useMutation(DELETE_DIR, {
    variables: {
      directory_id: S_N_to_N(UDirObj.directory_id),
    },
  });
  const EnterKeyTrigger = (e: any) => {
    spaped(e);
    if (DKeyActive && e.keyCode === 13) {
      DeleteDirTrigger(e);
      setDKeyActive(false);
    }
  };
  useEffect(() => {
    setDKeyActive(true);
    document.addEventListener("keydown", EnterKeyTrigger);
    return () => document.removeEventListener("keydown", EnterKeyTrigger);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DeleteDirPre
      setDeleteDirOpen={setDeleteDirOpen}
      DeleteDirTrigger={DeleteDirTrigger}
      setDKeyActive={setDKeyActive}
    />
  );
};
type DeleteDirConProps = {
  setDeleteDirOpen: any;
  UDirObj: any;
  DKeyActive: boolean;
  setDKeyActive: any;
};
