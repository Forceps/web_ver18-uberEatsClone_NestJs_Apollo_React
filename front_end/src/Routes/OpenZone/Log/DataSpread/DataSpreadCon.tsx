import React, { useEffect } from "react";
import DataSpreadPre from "./DataSpreadPre";
import { MyWatchingLogRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostR";
import { useLoginCheck } from "../../../../GlobalLib/Context/UserContext/IsLoggedIn";

export default () => {
  const { isLoggedIn } = useLoginCheck();
  const [
    watchingDataQueryLoad,
    { called, loading, data },
  ] = MyWatchingLogRequest();
  useEffect(() => {
    if (isLoggedIn) {
      watchingDataQueryLoad();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DataSpreadPre loading={!called || loading} data={data?.myWatchingLog} />
  );
};
