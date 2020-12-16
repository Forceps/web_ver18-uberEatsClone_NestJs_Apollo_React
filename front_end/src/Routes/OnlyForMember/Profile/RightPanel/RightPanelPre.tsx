import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import DirCtrlPanel from "./Section/DirCtrlPanel";
import Header from "./Section/Header";
import DirList from "./Section/DirList";
import IncludeScrollBar from "../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { useDirSelectorMode } from "../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import ToggleScreen from "./ToggleScreen/ToggleScreen";
import ShowOne from "../Center/UnderHeader/Archive/ShowOne/ShowOne";

interface RightRootPanelProps {
  Mode: boolean;
}
const RightRootPanel = styled.div<RightRootPanelProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 345px;
  height: 100vh;
  z-index: 10;
  font-size: 1rem;
  margin-right: ${(p) => (p.Mode ? "0px" : "-345px")};
  backdrop-filter: blur(5px);
  background-color: rgba(223, 230, 233, 0.5);
  overflow: hidden;
  transition-property: margin-right;
  transition-duration: 0.2s;
  transition-timing-function: ease;
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
  const { Mode } = useDirSelectorMode();
  const [ShowOneOpen, setShowOneOpen] = useState(false);
  const [DetailInfo, setDetailInfo] = useState({
    MediaType: "img",
    URL: "",
    Title: "null",
  });
  return (
    <>
      <RightRootPanel Mode={Mode}>
        <Header />
        <ScrollArea>
          <DirList
            setUpdateDirOpen={setUpdateDirOpen}
            setUDirObj={setUDirObj}
            setDeleteDirOpen={setDeleteDirOpen}
            setShowOneOpen={setShowOneOpen}
            setDetailInfo={setDetailInfo}
          />
          <DirCtrlPanel setMakeDirOpen={setMakeDirOpen} />
        </ScrollArea>
      </RightRootPanel>
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
      {ShowOneOpen && (
        <ShowOne
          setOpen={setShowOneOpen}
          type={DetailInfo.MediaType}
          url={DetailInfo.URL}
          title={DetailInfo.Title}
        />
      )}
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
