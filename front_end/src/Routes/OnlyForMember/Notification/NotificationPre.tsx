import React from "react";
import styled from "styled-components";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import DataSpreadCon from "./DataSpread/DataSpreadCon";
import LeftSideMenuCon from "../../../Components/ElementEtc/LeftSideMenu/LeftSideMenuCon";
import NotificationDetailCon from "../../../Components/Notification/NotificationDetail/NotificationDetailCon";

const Packing = styled(W100per)`
  display: grid;
  grid-template-columns: 240px 1fr;
`;
const NonPop = styled(W100per)`
  display: flex;
  min-height: 100px;
  padding: 30px 0 0 0;
`;

export default ({
  NotiDetlOp,
  setNotiDetlOp,
  NotiId,
  setNotiId,
}: NotificationPreProps) => {
  return (
    <>
      <Packing>
        <LeftSideMenuCon Notification={false} />
        <NonPop>
          <DataSpreadCon setNotiDetlOp={setNotiDetlOp} setNotiId={setNotiId} />
        </NonPop>
      </Packing>
      {NotiDetlOp && (
        <NotificationDetailCon
          notification_id={NotiId}
          setNotificationDetailOpen={setNotiDetlOp}
        />
      )}
    </>
  );
};
interface NotificationPreProps {
  NotiDetlOp: boolean;
  setNotiDetlOp: any;
  NotiId: number;
  setNotiId: any;
}
