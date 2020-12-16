import React from "react";
import styled from "styled-components";
import WH100per, {
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { url } from "../../../../GlobalLib/RecycleFunction/etc/Types";

const Header = styled(WH100per)`
  display: grid;
  grid-template-rows: 210px 1fr;
`;
const DfBgImg = styled(WH100per)`
  background-color: #dfe6e9;
`;
const BgImg = styled(WH100per)<url>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;
const MyStructure = styled.div`
  font-size: 1.3rem;
  padding: 7px 0 0 10px;
  color: white;
`;
const DownSide = styled(WH100per)`
  display: flex;
  padding: 0 0 0 11px;
`;
const UName = styled(H100per)`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 0 0 0 11px;
  overflow: hidden;
`;
const DACon = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  font-size: 3rem;
  border: 3px solid white;
  margin: -110px 0 0 0;
  background-color: #dfe6e9;
  cursor: default;
`;
const DefaultAvatar = styled.i`
  display: grid;
  padding: 0;
`;
const Avatar = styled(DACon)<url>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;

export default ({ G_Data }: HeaderConProps) => {
  return (
    <Header>
      {G_Data.identiti_back_img ? (
        <BgImg url={G_Data.identiti_back_img}>
          <MyStructure>Group</MyStructure>
        </BgImg>
      ) : (
        <DfBgImg>
          <MyStructure>Group</MyStructure>
        </DfBgImg>
      )}
      <DownSide>
        {G_Data.identiti_profile_img ? (
          <Avatar url={G_Data.identiti_profile_img} />
        ) : (
          <DACon>
            <DefaultAvatar className="icon-group" />
          </DACon>
        )}
        <UName>{G_Data.name}</UName>
      </DownSide>
    </Header>
  );
};

interface HeaderConProps {
  G_Data: any;
}
