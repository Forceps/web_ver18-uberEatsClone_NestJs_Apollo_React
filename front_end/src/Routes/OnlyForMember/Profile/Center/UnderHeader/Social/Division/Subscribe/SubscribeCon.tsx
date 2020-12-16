import React, { useState } from "react";
import SubscribePre from "./SubscribePre";
import {
  See_I_subsRequest,
  AM_I_SUBSCRIBE_ONE,
} from "../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Subscriber/SubscriberR";
import { REMOVE_SUBSCRIBER } from "../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Subscriber/SubscriberCUD";
import { useMutation } from "@apollo/client";

const SubscribeCon = () => {
  const [ScbRemoveModalOp, setScbRemoveModalOp] = useState(false);
  const [DeleteTarget, setDeleteTarget] = useState(0);
  const {
    data: I_SubsData,
    loading: I_SubsLoading,
    refetch: I_SubsRefetch,
  } = See_I_subsRequest(0);
  const [addSubscriberMutation] = useMutation(REMOVE_SUBSCRIBER);
  const removeSubscribe = async () => {
    if (DeleteTarget !== 0) {
      try {
        await addSubscriberMutation({
          variables: {
            author: DeleteTarget,
          },
          refetchQueries: [
            {
              query: AM_I_SUBSCRIBE_ONE,
              variables: { author: DeleteTarget },
            },
          ],
        });
        I_SubsRefetch();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return I_SubsLoading ? (
    <div />
  ) : (
    <SubscribePre
      I_SubsData={I_SubsData?.see_I_Subs}
      setDeleteTarget={setDeleteTarget}
      ScbRemoveModalOp={ScbRemoveModalOp}
      setScbRemoveModalOp={setScbRemoveModalOp}
      removeSubscribe={removeSubscribe}
    />
  );
};

export default React.memo(SubscribeCon);
