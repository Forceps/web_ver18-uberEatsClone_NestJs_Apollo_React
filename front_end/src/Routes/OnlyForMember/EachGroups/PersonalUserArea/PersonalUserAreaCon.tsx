import React from "react";
import styled from "styled-components";
import WH100per, {
  H100per,
  W100per,
  WH100perLink,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { url } from "../../../../GlobalLib/RecycleFunction/etc/Types";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import Loading from "../../../../Components/ElementEtc/Effect/Loading";

const Wrapper = styled(W100per)`
  display: grid;
  grid-template-rows: 190px 1fr;
  height: 100vh;
  background-color: #dfe6e9;
`;
const Header = styled(WH100perLink)`
  display: grid;
  grid-template-rows: 165px 1fr;
`;
const DfBgImg = styled(WH100per)`
  background-color: #dfe6e9;
`;
const BgImg = styled(WH100per)<url>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;
const DownSide = styled(WH100per)`
  display: flex;
  padding: 0 0 0 11px;
  cursor: default;
`;
const UName = styled(H100per)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 0 0 0 11px;
  overflow: hidden;
`;
const DACon = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  font-size: 3rem;
  border: 1.5px solid white;
  margin: -65px 0 0 0;
  background-color: #dfe6e9;
  cursor: pointer;
`;
const DefaultAvatar = styled.i`
  display: grid;
  padding: 0;
`;
const Avatar = styled(DACon)<url>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
`;

export default () => {
  const ME = useMyInfo();
  return (
    <Wrapper>
      {ME.MEloading ? (
        <Loading />
      ) : (
        <Header to={`/profile`}>
          {ME.MEdata.back_img ? (
            <BgImg url={ME.MEdata.back_img} />
          ) : (
            <DfBgImg />
          )}
          <DownSide>
            {ME.MEdata.avatar ? (
              <Avatar url={ME.MEdata.avatar} />
            ) : (
              <DACon>
                <DefaultAvatar className="icon-group" />
              </DACon>
            )}
            <UName>{ME.MEdata.username}</UName>
          </DownSide>
        </Header>
      )}
    </Wrapper>
  );
};
