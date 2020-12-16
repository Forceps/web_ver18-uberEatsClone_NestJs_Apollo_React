import React from "react";
import styled, { css } from "styled-components";
import WH100per from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import TemporaryBackground from "../../../../../../../../Components/ElementEtc/Effect/TemporaryBackground";
import { spaped } from "../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useInputReturn } from "../../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { NOrU } from "../../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { useShortMessage } from "../../../../../../../../GlobalLib/Context/EtcContext/ShortMessage/ShortMessage";
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
  min-height: 550px;
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
  grid-template-rows: 1fr 1fr 1.7fr;
  padding: 10px 0 10px 5px;
`;
const EmailEdit = styled(WH100per)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PasswordEdit = styled(WH100per)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
interface EditTxtInputProps {
  CurPwConfirmed?: boolean;
  reverse?: boolean;
  EmailDuple?: boolean;
}
const EditTxtInput = styled.input<EditTxtInputProps>`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #2d3436;
  background-color: transparent;
  width: 280px;
  margin: 5px 0 5px 0;
  ${(p) => {
    const bool = !NOrU(p.CurPwConfirmed) && !p.CurPwConfirmed;
    if (p.reverse ? !bool : bool) {
      return css`
        border-bottom: 0;
        border-left: 3px solid #2d3436;
      `;
    }
    if (!NOrU(p.EmailDuple) && !p.EmailDuple) {
      return css`
        border-bottom: 0;
        border-left: 3px solid #2d3436;
      `;
    }
  }}
`;
const Entrance = styled(WH100per)`
  display: grid;
  grid-template-columns: 8fr 2fr;
`;
const EntInputZone = styled(WH100per)`
  display: flex;
  align-items: center;
`;
const EntBtnZone = styled(WH100per)`
  display: flex;
  align-items: center;
`;
interface CheckEntPasswordBtnProps {
  CurPwConfirmed: boolean;
}
const CheckEntPasswordBtn = styled(FlexCenter)<CheckEntPasswordBtnProps>`
  width: 100%;
  height: 35px;
  background-color: #636e72;
  color: white;
  ${(p) => {
    if (!p.CurPwConfirmed) {
      return css`
        &:hover {
          background-color: #2d3436;
        }
        cursor: pointer;
      `;
    }
  }}
`;
interface EmailDupleCheckBtnProps {
  EmailDuple: boolean;
}
const EmailDupleCheckBtn = styled(FlexCenter)<EmailDupleCheckBtnProps>`
  align-self: flex-end;
  width: 120px;
  height: 28px;
  margin: 7px 0 0 0;
  background-color: #636e72;
  color: white;
  font-size: 0.9rem;
  ${(p) => {
    if (p.EmailDuple) {
      return css`
        &:hover {
          background-color: #2d3436;
        }
        cursor: pointer;
      `;
    }
  }}
`;

const AccountEditPre = ({
  setAccountEditOpen,
  zIndex,
  EnPasswordStr,
  emailStr,
  passwordStr,
  password2Str,
  CurPwConfirmed,
  setCurPwConfirmed,
  currntPasswordConfirm,
  invalidEmail,
  invalidPassword,
  invalidCfmPw,
  saveAccountInfo,
  EmailDuple,
  emailDuplicateCheckFunc,
}: AccountEditProps) => {
  const { addMessage } = useShortMessage();
  return (
    <Encompass zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setCurPwConfirmed(false);
          setAccountEditOpen(false);
        }}
        zIndex={zIndex + 1}
      />
      <Consol zIndex={zIndex + 2}>
        <Sbj>Account edit</Sbj>
        <Intent>
          <Entrance>
            <EntInputZone>
              <EditTxtInput
                type="password"
                placeholder="current password"
                spellCheck="false"
                {...EnPasswordStr}
                readOnly={CurPwConfirmed}
                CurPwConfirmed={CurPwConfirmed}
                reverse={true}
              />
            </EntInputZone>
            <EntBtnZone>
              <CheckEntPasswordBtn
                onClick={(e) => {
                  spaped(e);
                  currntPasswordConfirm();
                }}
                CurPwConfirmed={CurPwConfirmed}
              >
                Confirm
              </CheckEntPasswordBtn>
            </EntBtnZone>
          </Entrance>
          <EmailEdit>
            <EditTxtInput
              type="text"
              placeholder="email"
              spellCheck="false"
              {...emailStr}
              readOnly={!CurPwConfirmed || !EmailDuple}
              CurPwConfirmed={CurPwConfirmed}
              onBlur={() => {
                invalidEmail();
              }}
              EmailDuple={EmailDuple}
            />
            <EmailDupleCheckBtn
              onClick={(e) => {
                spaped(e);
                if (CurPwConfirmed) emailDuplicateCheckFunc();
              }}
              EmailDuple={EmailDuple && CurPwConfirmed}
            >
              Duplicate check
            </EmailDupleCheckBtn>
          </EmailEdit>
          <PasswordEdit>
            <EditTxtInput
              type="password"
              placeholder="new password"
              spellCheck="false"
              {...passwordStr}
              readOnly={!CurPwConfirmed}
              CurPwConfirmed={CurPwConfirmed}
              onBlur={() => {
                if (CurPwConfirmed) invalidPassword();
              }}
            />
            <EditTxtInput
              type="password"
              placeholder="confirm password"
              spellCheck="false"
              {...password2Str}
              readOnly={!CurPwConfirmed}
              CurPwConfirmed={CurPwConfirmed}
              onBlur={() => {
                if (CurPwConfirmed) invalidCfmPw();
              }}
            />
          </PasswordEdit>
        </Intent>
        <Decision>
          <Submit
            onClick={(e) => {
              spaped(e);
              if (CurPwConfirmed) {
                saveAccountInfo();
                setAccountEditOpen(false);
              } else {
                addMessage(
                  "Before save",
                  "Please verify your current password"
                );
              }
              setCurPwConfirmed(false);
            }}
          >
            Save
          </Submit>
          <BtnGen
            onClick={(e) => {
              spaped(e);
              setCurPwConfirmed(false);
              setAccountEditOpen(false);
            }}
          >
            Cancel
          </BtnGen>
        </Decision>
      </Consol>
    </Encompass>
  );
};
interface AccountEditProps {
  setAccountEditOpen: any;
  zIndex: number;
  EnPasswordStr: useInputReturn;
  emailStr: useInputReturn;
  passwordStr: useInputReturn;
  password2Str: useInputReturn;
  CurPwConfirmed: boolean;
  setCurPwConfirmed: any;
  currntPasswordConfirm: () => void;
  invalidEmail: () => void;
  invalidPassword: () => void;
  invalidCfmPw: () => void;
  saveAccountInfo: () => void;
  EmailDuple: boolean;
  emailDuplicateCheckFunc: () => void;
}

export default React.memo(AccountEditPre);
