import React from "react";
import PanelPre from "./PanelPre";
import { WhosePostDirRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryR";
import { S_N_to_N } from "../../../../../GlobalLib/RecycleFunction/etc/type_convert";

const PanelCon = ({
  post,
  setAuthorWorkOpen,
  ChoosedDir,
  setChoosedDir,
}: PanelConProps) => {
  const { data: RootDirData, loading: RootDirDataLoad } = WhosePostDirRequest(
    S_N_to_N(post.user_postTouser.user_id)
  );
  return (
    <PanelPre
      post={post}
      setAuthorWorkOpen={setAuthorWorkOpen}
      RootDirData={RootDirData?.whosePostDir}
      RootDirDataLoad={RootDirDataLoad}
      ChoosedDir={ChoosedDir}
      setChoosedDir={setChoosedDir}
    />
  );
};

interface PanelConProps {
  post: any;
  setAuthorWorkOpen: any;
  ChoosedDir: [number, string];
  setChoosedDir: any;
}

export default PanelCon;
