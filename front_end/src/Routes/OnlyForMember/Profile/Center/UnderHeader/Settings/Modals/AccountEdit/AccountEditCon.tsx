import React, { useState } from "react";
import AccountEditPre from "./AccountEditPre";
import useInput from "../../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMyInfo } from "../../../../../../../../GlobalLib/Context/UserContext/Me";
import { useMutation } from "@apollo/client";
import {
  CURRENT_PASSWORD_CONFIRM,
  SET_EMAIL,
  SET_PASSWORD,
  EMAIL_DUPLICATE_CHECK,
} from "../../../../../../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";
import { useShortMessage } from "../../../../../../../../GlobalLib/Context/EtcContext/ShortMessage/ShortMessage";
import { ME } from "../../../../../../../../GlobalLib/Apollo/GraphQL_Client/User/UserRseries/UserR";
import { emailRegex } from "../../../../../../../../Components/User/Auth/CreateAccount/CreateAccountCon";

const AccountEditCon = ({
  setAccountEditOpen,
  zIndex = 20,
}: AccountEditProps) => {
  const { addMessage } = useShortMessage();
  const { MEdata } = useMyInfo();
  const [CurPwConfirmed, setCurPwConfirmed] = useState(false);
  const [EmailDuple, setEmailDuple] = useState(true);
  const EnPasswordStr = useInput("");
  const emailStr = useInput(MEdata.email);
  const passwordStr = useInput("");
  const password2Str = useInput("");
  const [currentPasswordConfirmMutation] = useMutation(
    CURRENT_PASSWORD_CONFIRM,
    {
      variables: {
        current_password: EnPasswordStr.value,
      },
    }
  );
  const currntPasswordConfirm = async () => {
    if (!CurPwConfirmed && EnPasswordStr.value !== "") {
      try {
        const checkResult = await currentPasswordConfirmMutation();
        if (checkResult) {
          const bool = checkResult.data.currentPasswordConfirm;
          setCurPwConfirmed(bool);
          if (!bool) {
            addMessage(
              "Current password",
              "Current password is incorrect. Please try again"
            );
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  const [setEmailDuplicateMutation] = useMutation(EMAIL_DUPLICATE_CHECK, {
    variables: {
      email: emailStr.value,
    },
  });
  const emailDuplicateCheckFunc = async () => {
    if (EmailDuple && emailStr.value !== "") {
      try {
        const checkResult = await setEmailDuplicateMutation();
        if (checkResult) {
          const bool = checkResult.data.emailDuplicateCheck;
          setEmailDuple(!bool);
          if (!bool) {
            addMessage("e-mail", "email is duplicate. Please try again");
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const [setEmailMutation] = useMutation(SET_EMAIL, {
    variables: {
      email: emailStr.value,
    },
    refetchQueries: () => [{ query: ME }],
  });
  const [setPasswordMutation] = useMutation(SET_PASSWORD, {
    variables: {
      password: passwordStr.value,
    },
    refetchQueries: () => [{ query: ME }],
  });
  const invalidEmail = () => {
    if (emailStr.value !== "" && emailStr.value !== MEdata.email) {
      if (emailStr.value.length > 150) {
        addMessage("e-mail", "must be less than 150 characters.");
      } else if (!emailRegex.test(emailStr.value)) {
        addMessage("e-mail", "email is invalid");
      }
    }
  };
  const invalidPassword = () => {
    if (passwordStr.value.length < 7 || passwordStr.value.length > 45) {
      addMessage(
        "Password",
        "must be at least 10 characters and less than 45 characters."
      );
    }
  };
  const invalidCfmPw = () => {
    if (passwordStr.value !== password2Str.value) {
      addMessage(
        "Confirm Password",
        "password and confirm password do not match"
      );
    }
  };
  const saveAccountInfo = async () => {
    try {
      if (
        emailStr.value !== "" &&
        emailStr.value !== MEdata.email &&
        emailRegex.test(emailStr.value) &&
        emailStr.value.length <= 150 &&
        !EmailDuple
      ) {
        await setEmailMutation();
      }
      if (
        passwordStr.value.length >= 10 &&
        passwordStr.value.length <= 45 &&
        passwordStr.value === password2Str.value
      ) {
        await setPasswordMutation();
      }
      setAccountEditOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AccountEditPre
      setAccountEditOpen={setAccountEditOpen}
      zIndex={zIndex}
      EnPasswordStr={EnPasswordStr}
      emailStr={emailStr}
      passwordStr={passwordStr}
      password2Str={password2Str}
      CurPwConfirmed={CurPwConfirmed}
      setCurPwConfirmed={setCurPwConfirmed}
      currntPasswordConfirm={currntPasswordConfirm}
      invalidEmail={invalidEmail}
      invalidPassword={invalidPassword}
      invalidCfmPw={invalidCfmPw}
      saveAccountInfo={saveAccountInfo}
      EmailDuple={EmailDuple}
      emailDuplicateCheckFunc={emailDuplicateCheckFunc}
    />
  );
};
interface AccountEditProps {
  setAccountEditOpen: any;
  zIndex?: number;
}

export default React.memo(AccountEditCon);
