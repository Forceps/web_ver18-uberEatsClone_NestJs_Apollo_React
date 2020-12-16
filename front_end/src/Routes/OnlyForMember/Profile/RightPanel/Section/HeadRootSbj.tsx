import React from "react";
import styled from "styled-components";
import { useProfileMode } from "../../../../../GlobalLib/Context/ProfileContext/ProfileMode";

const SbJ = styled.div`
  display: grid;
  align-items: center;
  padding: 0 0 0 10px;
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  overflow: hidden;
`;

export default () => {
  const PfM = useProfileMode();
  return (
    <>
      {PfM.Mode[0] === "Post" ? (
        <SbJ>My Post</SbJ>
      ) : PfM.Mode[0] === "Archive" ? (
        <SbJ>My Archive</SbJ>
      ) : (
        <div />
      )}
    </>
  );
};
