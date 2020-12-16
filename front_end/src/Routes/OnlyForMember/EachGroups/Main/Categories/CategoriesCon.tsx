import React, { useState } from "react";
import CategoriesPre from "./CategoriesPre";

export default () => {
  const [MakeDirOpen, setMakeDirOpen] = useState(false);
  const [UpdateDirOpen, setUpdateDirOpen] = useState(false);
  const [UDirObj, setUDirObj] = useState(null);
  const [DeleteDirOpen, setDeleteDirOpen] = useState(false);
  const [DKeyActive, setDKeyActive] = useState(false);

  return (
    <CategoriesPre
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
