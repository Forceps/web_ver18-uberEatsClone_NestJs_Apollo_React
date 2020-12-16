import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import DirCtrlPanel from "./Section/DirCtrlPanel";
import Header from "./Section/Header";
import DirList from "./Section/DirList";
import ToggleScreen from "./ToggleScreen/ToggleScreen";
import IncludeScrollBar from "../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";

const ShowUp = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-width: 345px;
  width: 21vw;
  height: 100vh;
  z-index: 3;
  font-size: 1rem;
  background-color: rgba(223, 230, 233, 0.7);
  overflow: hidden;
`;
const ScrollArea = styled(IncludeScrollBar)`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
  width: 100%;
  max-height: calc(100% - 60px);
`;

export default ({
  MakeDirOpen,
  setMakeDirOpen,
  UpdateDirOpen,
  setUpdateDirOpen,
  UDirObj,
  setUDirObj,
  DeleteDirOpen,
  setDeleteDirOpen,
  DKeyActive,
  setDKeyActive,
}: RightPanelPreProps) => {
  return (
    <>
      <ShowUp>
        <Header />
        <ScrollArea>
          <DirList
            setUpdateDirOpen={setUpdateDirOpen}
            setUDirObj={setUDirObj}
            setDeleteDirOpen={setDeleteDirOpen}
          />
          <DirCtrlPanel setMakeDirOpen={setMakeDirOpen} />
        </ScrollArea>
      </ShowUp>
      <ToggleScreen
        MakeDirOpen={MakeDirOpen}
        setMakeDirOpen={setMakeDirOpen}
        UpdateDirOpen={UpdateDirOpen}
        setUpdateDirOpen={setUpdateDirOpen}
        UDirObj={UDirObj}
        DeleteDirOpen={DeleteDirOpen}
        setDeleteDirOpen={setDeleteDirOpen}
        DKeyActive={DKeyActive}
        setDKeyActive={setDKeyActive}
      />
    </>
  );
};
type RightPanelPreProps = {
  MakeDirOpen: boolean;
  setMakeDirOpen: Dispatch<SetStateAction<boolean>>;
  UpdateDirOpen: boolean;
  setUpdateDirOpen: Dispatch<SetStateAction<boolean>>;
  UDirObj: any;
  setUDirObj: Dispatch<SetStateAction<null>>;
  DeleteDirOpen: boolean;
  setDeleteDirOpen: Dispatch<SetStateAction<boolean>>;
  DKeyActive: boolean;
  setDKeyActive: Dispatch<SetStateAction<boolean>>;
};
