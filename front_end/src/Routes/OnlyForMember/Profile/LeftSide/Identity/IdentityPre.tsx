import React from "react";
import styled from "styled-components";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import ImgIsScnCon from "../../../../../Components/Media/Insert/ImgInsertScreen/ImgInSCon";
import {
  W100per,
  H100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../../../Components/User/HumanBlock/Avatar";
import { useProfileMode } from "../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { useMyInfo } from "../../../../../GlobalLib/Context/UserContext/Me";

const Identi = styled(W100per)`
  padding: 0 20px 0 10px;
  display: grid;
  justify-self: right;
  @media (max-width: 1300px) {
    padding: 0;
  }
`;
const Positioning = styled.div`
  margin: -96px 0 0 0;
  justify-self: right;
`;
const Con = styled.div`
  display: grid;
  width: 120px;
  height: 120px;
  margin: -96px 0 0 0;
  border: 2px solid white;
  justify-self: right;
  background-color: #dfe6e9;
  cursor: default;
`;
const DACon = styled(Con)`
  font-size: 88px;
`;
const DefaultAvatar = styled.i`
  display: grid;
  margin: 24px 0 0 -4.5px;
  padding: 0;
  @media (max-width: 1300px) {
    margin: 19px -5px 0 0;
  }
`;
const UserNameCon = styled.div`
  display: grid;
  justify-content: right;
  width: 100%;
`;
const UserName = styled.div`
  display: inline-block;
  min-width: 120px;
  font-size: 1.2rem;
  word-break: normal;
  overflow: hidden;
  line-height: 1.6rem;
  text-align: left;
`;
const Upside = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 150px;
  height: 30px;
`;
const Menu = styled(H100per)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
`;
const SelectText = styled.div`
  font-size: 0.9rem;
  padding: 0 0 0 5px;
`;

export default ({
  DesignateAvatar,
  setDesignateAvatar,
  AvatarPathInsert,
  MenuMode,
  setMenuMode,
}: IdentityProps) => {
  const { MEdata } = useMyInfo();
  const { Mode } = useProfileMode();
  return (
    <Identi>
      <Upside>
        {Mode[0] === "Post" || Mode[0] === "Archive" || Mode[0] === "Social" ? (
          <Menu
            onClick={() => {
              setMenuMode((p: boolean) => !p);
            }}
          >
            <i className={MenuMode ? "icon-wrench" : "icon-th-list"} />
            <SelectText>{MenuMode ? "Control" : "Menu"}</SelectText>
          </Menu>
        ) : (
          <div />
        )}
        {MEdata.avatar ? (
          <Positioning>
            <Avatar
              size={120}
              url={MEdata.avatar}
              func={() => {
                setDesignateAvatar(true);
              }}
            />
          </Positioning>
        ) : (
          <DACon
            onClick={(e: any) => {
              spaped(e);
              setDesignateAvatar(true);
            }}
          >
            <DefaultAvatar className="icon-noun_user_856030" />
          </DACon>
        )}
      </Upside>
      <UserNameCon>
        <UserName>{MEdata.username}</UserName>
      </UserNameCon>
      {DesignateAvatar && (
        <ImgIsScnCon
          setImgSubMenuOp={setDesignateAvatar}
          ImgInsert={AvatarPathInsert}
          zIndex={30}
        />
      )}
    </Identi>
  );
};

type IdentityProps = {
  DesignateAvatar: boolean;
  setDesignateAvatar: any;
  AvatarPathInsert: any;
  MenuMode: boolean;
  setMenuMode: any;
};
