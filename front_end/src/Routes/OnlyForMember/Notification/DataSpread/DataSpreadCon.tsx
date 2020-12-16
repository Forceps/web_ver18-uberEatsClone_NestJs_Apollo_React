import React from "react";
import DataSpreadPre from "./DataSpreadPre";
import { SeeNotiRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Notification/NotificationR";

export default ({ setNotiDetlOp, setNotiId }: DataSpreadConProps) => {
  const { loading: NotiLoad, data: NotiData } = SeeNotiRequest(0, 9);
  return (
    <DataSpreadPre
      NotiLoad={NotiLoad}
      NotiData={NotiData?.seeNoti}
      setNotiDetlOp={setNotiDetlOp}
      setNotiId={setNotiId}
    />
  );
};
interface DataSpreadConProps {
  setNotiDetlOp: any;
  setNotiId: any;
}
