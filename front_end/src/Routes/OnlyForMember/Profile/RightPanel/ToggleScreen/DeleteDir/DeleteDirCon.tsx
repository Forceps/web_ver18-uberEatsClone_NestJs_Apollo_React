import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useDirMode } from "../../../../../../GlobalLib/Context/ProfileContext/DirMode";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { DELETE_DIR } from "../../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryCUD";
import { S_N_to_N } from "../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import ConfirmationModal from "../../../../../../Components/ElementEtc/Effect/ConfirmationModal";

export default ({
  setDeleteDirOpen,
  UDirObj,
  DKeyActive,
  setDKeyActive,
}: DeleteDirConProps) => {
  const DC = useDirMode();
  const DeleteDirTrigger = async () => {
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
    if (DKeyActive === true && e.keyCode === 13) {
      DeleteDirTrigger();
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
    <ConfirmationModal
      setConfirmationModalOpen={setDeleteDirOpen}
      subject={"Delete Directory"}
      message={
        "Are you sure you want to delete the folder and its sub-contents as well?"
      }
      functionExecute={DeleteDirTrigger}
      zIndex={36}
      yesName={"Delete"}
    />
  );
};
type DeleteDirConProps = {
  setDeleteDirOpen: any;
  UDirObj: any;
  DKeyActive: boolean;
  setDKeyActive: any;
};
