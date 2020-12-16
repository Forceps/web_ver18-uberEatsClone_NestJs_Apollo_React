import React, { useState } from "react";
import NotificationPre from "./NotificationPre";

export default () => {
  const [NotiDetlOp, setNotiDetlOp] = useState(false);
  const [NotiId, setNotiId] = useState(0);
  return (
    <NotificationPre
      NotiDetlOp={NotiDetlOp}
      setNotiDetlOp={setNotiDetlOp}
      NotiId={NotiId}
      setNotiId={setNotiId}
    />
  );
};
