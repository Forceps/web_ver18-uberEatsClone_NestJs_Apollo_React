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
const Sbj = styled.div`
  display: grid;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  padding: 10px;
  margin-top: 22px;
`;
const Submit = styled.button`
  display: grid;
  width: 100%;
  margin-top: 40px;
  padding: 10px;
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
const Explain = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #636e72;
`;
export default ({
  setDeleteDirOpen,
  DeleteDirTrigger,
  setDKeyActive,
}: DeleteDirPreProps) => {
  return (
    <>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setDeleteDirOpen(false);
          setDKeyActive(false);
        }}
        zIndex={10}
      />
      <Consol>
        <Sbj>Delete Directory</Sbj>
        <Explain>
          Are you sure you want to delete the folder and its sub-contents as
          well?
        </Explain>
        <Submit
          onClick={(e) => {
            DeleteDirTrigger(e);
            setDKeyActive(false);
          }}
        >
          Delete
        </Submit>
      </Consol>
    </>
  );
};
type DeleteDirPreProps = {
  setDeleteDirOpen: any;
  DeleteDirTrigger: any;
  setDKeyActive: any;
};
