import React, { useEffect } from "react";
import ProfileSectionPre from "./ProfileSectionPre";
import { useMutation } from "@apollo/client";
import { ADD_SUBSCRIBER } from "../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Subscriber/SubscriberCUD";
import {
  AmISubscribeOneRequest,
  AM_I_SUBSCRIBE_ONE,
  SEE_I_SUBS,
} from "../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Subscriber/SubscriberR";
import { useLoginCheck } from "../../../../GlobalLib/Context/UserContext/IsLoggedIn";

export default ({
  user_id,
  UserData,
  UserDataLoading,
  Mode,
  setMode,
}: ProfileSectionCon) => {
  const { isLoggedIn } = useLoginCheck();
  const [
    loadGreeting,
    {
      called: ysCalled,
      data: yesISubscribeData,
      loading: yesISubscribeLoading,
    },
  ] = AmISubscribeOneRequest(user_id);
  const yesISubscribeLoad = yesISubscribeLoading || !ysCalled;
  const yesISubscribe =
    !yesISubscribeLoad && yesISubscribeData?.amISubscribeOne.length !== 0;
  const [addSubscriberMutation] = useMutation(ADD_SUBSCRIBER, {
    refetchQueries: [
      {
        query: AM_I_SUBSCRIBE_ONE,
        variables: { author: user_id },
      },
      {
        query: SEE_I_SUBS,
        variables: { user_id: 0 },
      },
    ],
  });
  const addSubscriber = () => {
    try {
      addSubscriberMutation({
        variables: {
          author: user_id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      loadGreeting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return (
    <ProfileSectionPre
      user_id={user_id}
      UserData={UserData?.seeUser}
      UserDataLoading={UserDataLoading}
      addSubscriber={addSubscriber}
      yesISubscribe={yesISubscribe}
      Mode={Mode}
      setMode={setMode}
    />
  );
};

interface ProfileSectionCon {
  user_id: number;
  UserData: any;
  UserDataLoading: boolean;
  Mode: string;
  setMode: any;
}
