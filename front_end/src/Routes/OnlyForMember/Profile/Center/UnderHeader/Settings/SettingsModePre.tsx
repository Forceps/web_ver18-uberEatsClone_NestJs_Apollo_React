import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useMyInfo } from "../../../../../../GlobalLib/Context/UserContext/Me";
import ProfileEditCon from "./Modals/ProfileEdit/ProfileEditCon";
import AccountEditCon from "./Modals/AccountEdit/AccountEditCon";

const SettingsMain = styled(WH100per)`
  display: flex;
  justify-content: center;
`;
const Territory = styled(W100per)`
  display: grid;
  grid-template-rows: 40px 1fr;
  flex-wrap: wrap;
  padding: 10px 0 0 10px;
`;
const Theme = styled.div`
  display: grid;
  grid-template-rows: 35px 1fr;
  width: 270px;
  height: 250px;
  background-color: #dfe6e9;
  padding: 2px;
  margin: 5px;
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
`;
const Sbj = styled(WH100per)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 7px 0 7px;
`;
const CurrentSet = styled(WH100per)`
  display: flex;
  flex-direction: column;
  padding: 15px 7px 7px 7px;
`;
const InfoPiece = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 0 4px 0 4px;
`;
const InfoSbj = styled(WH100per)`
  display: flex;
  align-items: center;
`;
const InfoData = styled(WH100per)`
  display: flex;
  padding: 0 7px 0 7px;
`;
const Tsub = styled(WH100per)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 0 0 5px;
`;
const Themes = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const SettingsModePre = ({
  ProfileEditOpen,
  setProfileEditOpen,
  AccountEditOpen,
  setAccountEditOpen,
}: SettingsModePreProps) => {
  const {
    MEdata: { username, email },
  } = useMyInfo();
  return (
    <SettingsMain>
      <Territory>
        <Tsub>Basic</Tsub>
        <Themes>
          <Theme
            onClick={() => {
              setProfileEditOpen(true);
            }}
          >
            <Sbj>Profile</Sbj>
            <CurrentSet>
              <InfoPiece>
                <InfoSbj>username</InfoSbj>
                <InfoData>{username}</InfoData>
              </InfoPiece>
              <InfoPiece>
                <InfoSbj>phone number</InfoSbj>
                <InfoData>none</InfoData>
              </InfoPiece>
            </CurrentSet>
          </Theme>
          {ProfileEditOpen && (
            <ProfileEditCon setProfileEditOpen={setProfileEditOpen} />
          )}
          <Theme
            onClick={() => {
              setAccountEditOpen(true);
            }}
          >
            <Sbj>Account</Sbj>
            <CurrentSet>
              <InfoPiece>
                <InfoSbj>email</InfoSbj>
                <InfoData>{email}</InfoData>
              </InfoPiece>
              <InfoPiece>
                <InfoSbj>password</InfoSbj>
                <InfoData>*******</InfoData>
              </InfoPiece>
            </CurrentSet>
          </Theme>
          {AccountEditOpen && (
            <AccountEditCon setAccountEditOpen={setAccountEditOpen} />
          )}
        </Themes>
      </Territory>
    </SettingsMain>
  );
};

interface SettingsModePreProps {
  ProfileEditOpen: boolean;
  setProfileEditOpen: any;
  AccountEditOpen: boolean;
  setAccountEditOpen: any;
}

export default React.memo(SettingsModePre);
