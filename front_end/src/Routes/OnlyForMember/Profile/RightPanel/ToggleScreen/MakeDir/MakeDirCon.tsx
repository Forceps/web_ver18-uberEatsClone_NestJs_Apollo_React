import React, { useEffect } from "react";
import MakeDirPre from "./MakeDirPre";
import { useMutation } from "@apollo/client";
import useInput from "../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useDirMode } from "../../../../../../GlobalLib/Context/ProfileContext/DirMode";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { MAKE_DIRECTORY } from "../../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryCUD";
import { useMyInfo } from "../../../../../../GlobalLib/Context/UserContext/Me";
import {
  WHOSE_POST_DIR,
  FIND_DIR_BY_ID,
} from "../../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryR";
import { S_N_to_N } from "../../../../../../GlobalLib/RecycleFunction/etc/type_convert";

export default ({ setMakeDirOpen }: MakeDirCon) => {
  const { DirData, DirData_refetch } = useDirMode();
  const { MEdata } = useMyInfo();
  const DirName = useInput("");
  const [MakeDirMutation] = useMutation(MAKE_DIRECTORY, {
    refetchQueries: () => [
      {
        query: WHOSE_POST_DIR,
        variables: { user_id: S_N_to_N(MEdata.user_id) },
      },
      {
        query: FIND_DIR_BY_ID,
        variables: { directory_id: S_N_to_N(DirData.directory_id) },
      },
    ],
  });
  const MakeDirTrigger = async (e: any) => {
    spaped(e);
    try {
      await MakeDirMutation({
        variables: {
          name: DirName.value,
          parent_id: parseInt(DirData.directory_id),
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      DirData_refetch();
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
