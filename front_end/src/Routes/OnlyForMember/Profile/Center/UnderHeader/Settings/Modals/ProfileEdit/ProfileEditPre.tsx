import React from "react";
import styled, { css } from "styled-components";
import WH100per from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import TemporaryBackground from "../../../../../../../../Components/ElementEtc/Effect/TemporaryBackground";
import { spaped } from "../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useInputReturn } from "../../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { NOrU } from "../../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import {
  FlexCenter100per,
  FlexCenter,
} from "../../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

interface EncompassProps {
  zIndex: number;
}
const Encompass = styled(FlexCenter100per)<EncompassProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(p) => p.zIndex};
`;
const Consol = styled.div<EncompassProps>`
  display: grid;
  grid-template-rows: 40px 1fr 40px;
  width: 400px;
  min-height: 350px;
  padding: 10px;
  background-color: #fafafa;
  z-index: ${(p) => p.zIndex};
`;
const Sbj = styled(WH100per)`
  font-size: 1.2rem;
`;
const Decision = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
`;
const BtnGen = styled.button`
  display: flex;
  width: 70px;
  height: 100%;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-size: 0.9rem;
  outline-style: none;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const Submit = styled(BtnGen)`
  background-color: #2d3436;
  color: white;
  border: 0;
  &:hover {
    background-color: #636e72;
  }
`;
const Intent = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 10px 0 10px 5px;
`;
const UsernameEdit = styled(WH100per)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PhoneNumberEdit = styled(WH100per)`
  display: flex;
  align-items: center;
`;
interface EditTxtInputProps {
  UsernameDuple?: boolean;
}
const EditTxtInput = styled.input<EditTxtInputProps>`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #2d3436;
  ${(p) => {
    if (!NOrU(p.UsernameDuple) && !p.UsernameDuple) {
      return css`
        border-bottom: 0;
        border-left: 3px solid #2d3436;
      `;
    }
  }}
  background-color: transparent;
  width: 280px;
`;
interface UsernameDupleCheckBtnProps {
  UsernameDuple: boolean;
}
const UsernameDupleCheckBtn = styled(FlexCenter)<UsernameDupleCheckBtnProps>`
  align-self: flex-end;
  width: 120px;
  height: 28px;
  margin: 7px 0 0 0;
  background-color: #636e72;
  color: white;
  font-size: 0.9rem;
  ${(p) => {
    if (p.UsernameDuple) {
      return css`
        &:hover {
          background-color: #2d3436;
        }
        cursor: pointer;
      `;
    }
  }}
`;

const ProfileEditPre = ({
  setProfileEditOpen,
  zIndex,
  usernameStr,
  phoneNumberStr,
  saveProfileInfo,
  UsernameDuple,
  usernameDuplicateCheckFunc,
  invalidUsername,
}: ProfileEditPreProps) => {
  return (
    <Encompass zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setProfileEditOpen(false);
        }}
        zIndex={zIndex + 1}
      />
      <Consol zIndex={zIndex + 2}>
        <Sbj>Profile edit</Sbj>
        <Intent>
          <UsernameEdit>
            <EditTxtInput
              type="text"
              placeholder="user name"
              spellCheck="false"
              {...usernameStr}
              readOnly={!UsernameDuple}
              UsernameDuple={UsernameDuple}
              onBlur={() => {
                invalidUsername();
              }}
            />
            <UsernameDupleCheckBtn
              onClick={(e) => {
                spaped(e);
                usernameDuplicateCheckFunc();
              }}
              UsernameDuple={UsernameDuple}
            >
              Duplicate check
            </UsernameDupleCheckBtn>
          </UsernameEdit>
          <PhoneNumberEdit>
            <EditTxtInput
              type="text"
              placeholder="phone number"
              spellCheck="false"
              {...phoneNumberStr}
            />
          </PhoneNumberEdit>
        </Intent>
        <Decision>
          <Submit
            onClick={(e) => {
              spaped(e);
              saveProfileInfo();
            }}
          >
            Save
          </Submit>
          <BtnGen
            onClick={(e) => {
              spaped(e);
              setProfileEditOpen(false);
            }}
          >
            Cancel
          </BtnGen>
        </Decision>
      </Consol>
    </Encompass>
  );
};
interface ProfileEditPreProps {
  setProfileEditOpen: any;
  zIndex: number;
  usernameStr: useInputReturn;
  phoneNumberStr: useInputReturn;
  saveProfileInfo: () => Promise<void>;
  UsernameDuple: boolean;
  usernameDuplicateCheckFunc: () => Promise<void>;
  invalidUsername: () => void;
}

export default React.memo(ProfileEditPre);
