import React from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const DirCtrlPanel = styled.div`
  display: grid;
  width: 100%;
  height: 40px;
  margin: 10px 0 0 0;
  padding-right: 5px;
  justify-content: right;
`;
const DCPItems = styled.div`
  display: flex;
`;
const DirMakeBtn = styled.div`
  display: flex;
  align-items: center;
  background-color: #b2bec3;
  padding: 10px;
  margin: 0 0 0 5px;
  &:hover {
    background-color: #636e72;
    color: white;
  }
  cursor: pointer;
`;

export default ({ setMakeDirOpen }: DirCtrlPanelProps) => {
  return (
    <DirCtrlPanel>
      <DCPItems>
        <DirMakeBtn
          onClick={(e) => {
            spaped(e);
            setMakeDirOpen(true);
          }}
        >
          <i className="icon-plus" />
          <i className="icon-folder" />
        </DirMakeBtn>
      </DCPItems>
    </DirCtrlPanel>
  );
};
type DirCtrlPanelProps = {
  setMakeDirOpen: any;
};
