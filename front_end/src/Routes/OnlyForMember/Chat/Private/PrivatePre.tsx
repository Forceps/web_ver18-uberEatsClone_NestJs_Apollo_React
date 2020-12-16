import React from "react";
import styled from "styled-components";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import Avatar from "../../../../Components/User/HumanBlock/Avatar";
import WH100per, {
  W100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Private = styled(W100per)``;
const MyName = styled(W100per)`
  margin: 10px 0 0 0;
  font-size: 1.3rem;
`;
const Floor1 = styled(W100per)``;
const Floor2 = styled(W100per)`
  display: flex;
  flex-direction: column;
`;
const SubSbjF2 = styled(W100per)`
  display: flex;
  margin: 20px 0 0 0;
  height: 35px;
  align-items: center;
`;
const Chip = styled(W100per)`
  display: grid;
  grid-template-columns: 40px 1fr;
  margin: 0 0 10px 0;
`;
const Username = styled(WH100per)`
  display: flex;
  padding: 0 0 0 5px;
  align-items: center;
`;

export default ({ loading, data }: PrivatePreProps) => {
  const me = useMyInfo();
  return (
    <Private>
      <Floor1>
        <Avatar url={me.MEdata?.avatar} size={90} />
        <MyName>{me.MEdata?.username}</MyName>
      </Floor1>
      <Floor2>
        <SubSbjF2>Connected people</SubSbjF2>
        {!loading &&
          data.map((o: any) => (
            <Chip key={o.user_id}>
              <Avatar url={o.avatar} size={40} />
              <Username>{o.username}</Username>
            </Chip>
          ))}
      </Floor2>
    </Private>
  );
};
interface PrivatePreProps {
  loading: boolean;
  data: any;
}
