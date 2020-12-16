import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { LOCAL_LOG_OUT } from "../../../../../GlobalLib/Apollo/LocalState/auth/authQuery";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useProfileMode } from "../../../../../GlobalLib/Context/ProfileContext/ProfileMode";

const SubHMenu = styled.div`
  display: grid;
  width: 100%;
  padding: 10px 0 10px 0;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;

export default ({ setMore }: HiddenLMoreProps) => {
  const PfM = useProfileMode();
  const [localLogOutMutation] = useMutation(LOCAL_LOG_OUT);
  return (
    <>
      <SubHMenu
        onClick={() => {
          setMore(false);
        }}
      >
        <i className="icon-up-open" />
      </SubHMenu>
      <SubHMenu
        onClick={(e) => {
          spaped(e);
          PfM.setMode(["Form"]);
        }}
      >
        Form
      </SubHMenu>
      <SubHMenu
        onClick={(e) => {
          spaped(e);
          PfM.setMode(["Friends"]);
        }}
      >
        Friends
      </SubHMenu>
      <SubHMenu
        onClick={() => {
          localLogOutMutation();
        }}
      >
        Log Out
      </SubHMenu>
    </>
  );
};

type HiddenLMoreProps = {
  setMore: any;
};
