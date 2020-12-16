import React from "react";
import styled from "styled-components";
import TemporaryBackground from "../../../../../../../Components/ElementEtc/Effect/TemporaryBackground";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const Consol = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 30vh;
  left: calc(50% - 200px);
  width: 400px;
  height: 270px;
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
  display: grid;
  grid-template-columns: 1fr 47px;
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
  height: 100%;
  text-align: center;
  align-items: center;
  background-color: #2d3436;
  color: white;
  user-select: none;
  font-size: 0.9rem;
  border: 0;
  outline-style: none;
  &:hover {
    background-color: #636e72;
  }
  cursor: pointer;
`;

export default ({
  setMakeDirOpen,
  DirName,
  MakeDirTrigger,
}: MakeDirPreProps) => {
  return (
    <>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setMakeDirOpen(false);
        }}
      />
      <Consol>
        <Text>Making Directory</Text>
        <IURapper>
          <Input
            type="text"
            id="MakingDirectory"
            placeholder="Name"
            {...DirName}
            onKeyDown={(e: any) => {
              if (e.keyCode === 13) {
                spaped(e);
                MakeDirTrigger(e);
              }
            }}
            spellCheck={false}
          />
          <Submit
            onClick={(e) => {
              MakeDirTrigger(e);
            }}
          >
            make
          </Submit>
        </IURapper>
      </Consol>
    </>
  );
};
type MakeDirPreProps = {
  setMakeDirOpen: any;
  DirName: any;
  MakeDirTrigger: any;
};
