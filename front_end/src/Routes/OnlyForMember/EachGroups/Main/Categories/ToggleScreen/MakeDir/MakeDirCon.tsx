import React, { useEffect } from "react";
import MakeDirPre from "./MakeDirPre";
import { useMutation } from "@apollo/client";
import { useDirMode } from "../../../../../../../GlobalLib/Context/ProfileContext/DirMode";
import useInput from "../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { MAKE_DIRECTORY } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryCUD";

export default ({ setMakeDirOpen }: MakeDirCon) => {
  const DC = useDirMode();
  const DirName = useInput("");
  const [MakeDirMutation] = useMutation(MAKE_DIRECTORY, {
    variables: {
      name: DirName.value,
      parent_id: parseInt(DC.DirData.directory_id),
    },
  });
  const MakeDirTrigger = async (e: any) => {
    spaped(e);
    try {
      await MakeDirMutation();
    } catch (e) {
      console.log(e);
    } finally {
      DC.DirData_refetch();
      setMakeDirOpen(false);
    }
  };
  useEffect(() => {
    document.getElementById("MakingDirectory")?.focus();
  }, []);

  return (
    <MakeDirPre
      setMakeDirOpen={setMakeDirOpen}
      DirName={DirName}
      MakeDirTrigger={MakeDirTrigger}
    />
  );
};
type MakeDirCon = {
  setMakeDirOpen: any;
};
