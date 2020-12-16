import React from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import TemporaryBackground from "../../../../../../../Components/ElementEtc/Effect/TemporaryBackground";
import DirAppoint from "../../../../../../../Components/Post/Editor/RightControl/DirSetting/DirAppoint";
import { FlexCenter } from "../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const Consol = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 22vh;
  left: calc(50% - 170px);
  width: 340px;
  height: 400px;
  padding: 30px;
  background-color: white;
  z-index: 24;
`;
const Text = styled.div`
  display: grid;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  padding: 10px;
  margin-top: 22px;
`;
const IURapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
`;
const Input = styled.input`
  display: grid;
  width: 100%;
  height: 35px;
  padding: 4px;
  border: 0;
  border-bottom: 1px solid #2d3436;
  font-size: 1rem;
`;
const Submit = styled.button`
  display: grid;
  width: 100%;
  height: 40px;
  margin: 45px 0 0 0;
  text-align: center;
  align-items: center;
  background-color: #636e72;
  user-select: none;
  font-size: 0.9rem;
  border: 0;
  outline-style: none;
  color: white;
  &:hover {
    background-color: #2d3436;
  }
  cursor: pointer;
`;
const DirSetting = styled.div`
  display: flex;
  width: 100%;
  font-size: 1rem;
  margin: 30px 0 0 0;
  align-items: center;
`;
const DirLocation = styled(FlexCenter)`
  width: calc(100% - 70px);
  height: 40px;
  background-color: #dfe6e9;
  margin: 0 0 0 10px;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;

export default ({
  setUpdateDirOpen,
  DirName,
  UpdateDirTrigger,
  DirApOpen,
  setDirApOpen,
  DC,
  InitialDir,
  UDirObj,
}: UpdateDirPre) => {
  return (
    <>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          DC.setLocation(InitialDir.current);
          setUpdateDirOpen(false);
        }}
      />
      <Consol>
        <Text>Update Directory</Text>
        <IURapper>
          <Input
            type="text"
            id="UpdatingDirectory"
            placeholder="Name"
            {...DirName}
            onKeyUp={(e: any) => {
              if (e.keyCode === 13) {
                spaped(e);
                UpdateDirTrigger(e);
              }
            }}
            spellCheck={false}
          />
          <DirSetting>
            Located
            <DirLocation
              onClick={(e) => {
                spaped(e);
                setDirApOpen(true);
              }}
            >
              <i className="icon-folder" />
              {DC.DirData.name}
            </DirLocation>
          </DirSetting>
          <Submit
            onClick={(e) => {
              UpdateDirTrigger(e);
            }}
          >
            Update
          </Submit>
        </IURapper>
        {DirApOpen && (
          <DirAppoint setDirApOpen={setDirApOpen} UDirObj={UDirObj} />
        )}
      </Consol>
    </>
  );
};
type UpdateDirPre = {
  setUpdateDirOpen: any;
  DirName: any;
  UpdateDirTrigger: any;
  DirApOpen: boolean;
  setDirApOpen: any;
  DC: any;
  InitialDir: any;
  UDirObj: any;
};
