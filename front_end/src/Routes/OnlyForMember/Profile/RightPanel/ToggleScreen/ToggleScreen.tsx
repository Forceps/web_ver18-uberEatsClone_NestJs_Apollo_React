import React from "react";
import MakeDirCon from "./MakeDir/MakeDirCon";
import UpdateDirCon from "./UpdateDir/UpdateDirCon";
import DeleteDirCon from "./DeleteDir/DeleteDirCon";

export default ({
  MakeDirOpen,
  setMakeDirOpen,
  UpdateDirOpen,
  setUpdateDirOpen,
  UDirObj,
  DeleteDirOpen,
  setDeleteDirOpen,
  DKeyActive,
  setDKeyActive
}: RightPanelPreProps) => {
  return (
    <>
      {MakeDirOpen && <MakeDirCon setMakeDirOpen={setMakeDirOpen} />}
      {UpdateDirOpen && (
        <UpdateDirCon setUpdateDirOpen={setUpdateDirOpen} UDirObj={UDirObj} />
      )}
      {DeleteDirOpen && (
        <DeleteDirCon
          setDeleteDirOpen={setDeleteDirOpen}
          UDirObj={UDirObj}
          DKeyActive={DKeyActive}
          setDKeyActive={setDKeyActive}
        />
      )}
    </>
  );
};
type RightPanelPreProps = {
  MakeDirOpen: boolean;
  setMakeDirOpen: any;
  UpdateDirOpen: boolean;
  setUpdateDirOpen: any;
  UDirObj: any;
  DeleteDirOpen: boolean;
  setDeleteDirOpen: any;
  DKeyActive: boolean;
  setDKeyActive: any;
};
