import React from "react";
import PrivatePre from "./PrivatePre";
import { TalkComradesRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";

export default () => {
  const { loading, data } = TalkComradesRequest();
  return <PrivatePre loading={loading} data={data?.talkComrades} />;
};
