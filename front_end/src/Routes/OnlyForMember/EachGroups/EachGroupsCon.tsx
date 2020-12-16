import React from "react";
import EachGroupsPre from "./EachGroupsPre";
import { withRouter, useParams } from "react-router-dom";
import { GroupDetailRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Group/GroupR";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";

export default withRouter(() => {
  const { group_id: group_id_extract }: any = useParams();
  const group_id = S_N_to_N(group_id_extract);
  const { data: G_Data, loading: G_Loading } = GroupDetailRequest(group_id);
  return <EachGroupsPre G_Data={G_Data?.groupDetail} G_Loading={G_Loading} />;
});
