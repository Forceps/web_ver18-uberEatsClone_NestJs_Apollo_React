import React, { useState } from "react";
import ProfileEditPre from "./ProfileEditPre";
import useInput from "../../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMyInfo } from "../../../../../../../../GlobalLib/Context/UserContext/Me";
import { useMutation } from "@apollo/client";
import {
  SET_USERNAME,
  SET_PHONE_NUMBER,
  USERNAME_DUPLICATE_CHECK,
} from "../../../../../../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";
import { ME } from "../../../../../../../../GlobalLib/Apollo/GraphQL_Client/User/UserRseries/UserR";
import { useShortMessage } from "../../../../../../../../GlobalLib/Context/EtcContext/ShortMessage/ShortMessage";

const ProfileEditCon = ({
  setProfileEditOpen,
  zIndex = 20,
}: ProfileEditConProps) => {
  const { addMessage } = useShortMessage();
  const { MEdata } = useMyInfo();
  const usernameStr = useInput(MEdata.username);
  const phoneNumberStr = useInput("");
  const [UsernameDuple, setUsernameDuple] = useState(true);
  const [setUsernameDuplicateMutation] = useMutation(USERNAME_DUPLICATE_CHECK, {
    variables: {
      username: usernameStr.value,
    },
  });
  const usernameDuplicateCheckFunc = async () => {
    if (UsernameDuple && usernameStr.value !== "") {
      try {
        const checkResult = await setUsernameDuplicateMutation();
        if (checkResult) {
          const bool = checkResult.data.usernameDuplicateCheck;
          setUsernameDuple(!bool);
          if (!bool) {
            addMessage("Username", "Username is duplicate. Please try again");
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  const invalidUsername = () => {
    if (usernameStr.value.length < 2 || usernameStr.value.length > 60) {
      addMessage(
        "Password",
        "must be at least 2 characters and less than 60 characters."
      );
    }
  };

  const [setUsernameMutation] = useMutation(SET_USERNAME, {
    variables: {
      username: usernameStr.value,
    },
    refetchQueries: () => [{ query: ME }],
  });
  const [setPhoneNumberMutation] = useMutation(SET_PHONE_NUMBER, {
    variables: {
      phone_number: phoneNumberStr.value,
    },
    refetchQueries: () => [{ query: ME }],
  });
  const saveProfileInfo = async () => {
    try {
      if (
        usernameStr.value !== "" &&
        usernameStr.value !== MEdata.username &&
        !UsernameDuple &&
        usernameStr.value.length >= 2 &&
        usernameStr.value.length <= 60
      ) {
        await setUsernameMutation();
      }
      if (phoneNumberStr.value !== "") {
        await setPhoneNumberMutation();
      }
      setProfileEditOpen(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ProfileEditPre
      setProfileEditOpen={setProfileEditOpen}
      zIndex={zIndex}
      usernameStr={usernameStr}
      phoneNumberStr={phoneNumberStr}
      saveProfileInfo={saveProfileInfo}
      UsernameDuple={UsernameDuple}
      usernameDuplicateCheckFunc={usernameDuplicateCheckFunc}
      invalidUsername={invalidUsername}
    />
  );
};
interface ProfileEditConProps {
  setProfileEditOpen: any;
  zIndex?: number;
}

export default React.memo(ProfileEditCon);
