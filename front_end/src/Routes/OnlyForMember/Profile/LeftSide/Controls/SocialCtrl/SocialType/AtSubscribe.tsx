import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";
import OrganizeCon from "../Organize/OrganizeCon";

const OrganizeBtn = styled(FlexCenter)`
  width: 100%;
  height: 33px;
  padding: 5px;
  margin: 20px 15px 10px 0;
  background-color: #dfe6e9;
  cursor: pointer;
  &:hover {
    background-color: #b2bec3;
  }
`;

const AtSubscribe = ({ GroupMakeOpen, setGroupMakeOpen }: AtSubscribeProps) => {
  return (
    <>
      <OrganizeBtn
        onClick={() => {
          setGroupMakeOpen(true);
        }}
      >
        Organize
      </OrganizeBtn>
      {GroupMakeOpen && <OrganizeCon setGroupMakeOpen={setGroupMakeOpen} />}
    </>
  );
};

interface AtSubscribeProps {
  GroupMakeOpen: boolean;
  setGroupMakeOpen: any;
}

export default AtSubscribe;
