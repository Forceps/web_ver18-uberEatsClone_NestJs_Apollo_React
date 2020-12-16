import React from "react";
import ArchiveCtrlPre from "./ArchiveCtrlPre";
import { FileManageRequest } from "../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Manage/FileManage";
import { useMyInfo } from "../../../../../../GlobalLib/Context/UserContext/Me";

export default () => {
  const { MEdata, MEloading } = useMyInfo();
  const { data, loading } = FileManageRequest();
  return MEloading || loading ? (
    <div />
  ) : (
    <ArchiveCtrlPre MEdata={MEdata} data={data?.fileManage} />
  );
};
