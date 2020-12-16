import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useSearchUser } from "../../../../../GlobalLib/Context/UserContext/SearchUser";
import { useMyInfo } from "../../../../../GlobalLib/Context/UserContext/Me";
import { useSeeFriends } from "../../../../../GlobalLib/Context/UserContext/SeeFriends";
import { FlexCenter } from "../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const Area = styled(W100per)`
  margin: 20px 0 0 0;
`;
const Cell = styled(W100per)`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 0 0 0 10px;
  margin: 0 0 20px 0;
`;
interface PfImgProps {
  url: string;
}
const DefaultPfImg = styled(FlexCenter)`
  width: 100%;
  height: 100px;
  background-color: #dfe6e9;
`;
const PfImg = styled(DefaultPfImg)<PfImgProps>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;
const PfIcon = styled.i`
  font-size: 5rem;
`;
const Info = styled(WH100per)`
  display: flex;
  padding: 0 0 0 10px;
`;
const UserName = styled.div`
  font-size: 1.2rem;
`;
const Contour = styled(W100per)`
  border-top: 1px solid #b2bec3;
`;
const AddFriend = styled.div`
  display: flex;
  justify-self: flex-end;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100px;
  height: 30px;
  margin: 0 0 0 11px;
  background-color: #dfe6e9;
  cursor: pointer;
  &:hover {
    background-color: #b2bec3;
  }
`;
const Icon = styled.i`
  margin: 0 0 0 -8px;
`;
const Already = styled.div`
  padding: 4px 0 0 15px;
  color: #b2bec3;
`;

export default ({ requestFriend }: SearchedUserPreProps) => {
  const SU = useSearchUser();
  const ME = useMyInfo();
  const SF = useSeeFriends();
  return (
    <Area>
      {!SU.loading &&
        SU.data.searchUser.map((item: any) => (
          <Cell key={item.user_id}>
            {item.avatar ? (
              <PfImg url={item.avatar} />
            ) : (
              <DefaultPfImg>
                <PfIcon className="icon-noun_user_856030" />
              </DefaultPfImg>
            )}
            <Info>
              <UserName>{item.username}</UserName>
              {ME.MEdata.user_id !== item.user_id && !SF.myF_load && (
                <>
                  {SF.myF?.seeFriends.findIndex((it: any) => {
                    return it.user_id === item.user_id;
                  }) === -1 ? (
                    <AddFriend
                      onClick={() => {
                        requestFriend(item.user_id);
                      }}
                    >
                      <Icon className="icon-plus" /> friends
                    </AddFriend>
                  ) : (
                    <Already>Already a friend</Already>
                  )}
                </>
              )}
            </Info>
          </Cell>
        ))}
      <Contour />
    </Area>
  );
};

interface SearchedUserPreProps {
  requestFriend: (partner: number) => void;
}
