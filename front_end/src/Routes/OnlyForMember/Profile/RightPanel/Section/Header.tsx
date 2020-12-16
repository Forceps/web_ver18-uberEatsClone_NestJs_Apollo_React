import React from "react";
import styled from "styled-components";
import { useDirMode } from "../../../../../GlobalLib/Context/ProfileContext/DirMode";
import { useDirSelectorMode } from "../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import HeadRootSbj from "./HeadRootSbj";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { WH100perI } from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const SbJCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  width: 100%;
  height: 40px;
  align-items: center;
`;
const SbJ = styled.div`
  display: grid;
  align-items: center;
  padding: 0 0 0 10px;
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  overflow: hidden;
`;
const Folding = styled(WH100perI)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(45, 52, 54, 0.8);
    color: white;
  }
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.18s;
  transition-timing-function: ease;
`;
const SbJCon2 = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 30px;
  width: 100%;
  height: 40px;
  align-items: center;
`;
const BackStep = styled.div`
  display: grid;
  justify-content: center;
  padding: 11px;
  font-size: 1rem;
  height: 100%;
  width: 100%;
  &:hover {
    background-color: rgba(178, 190, 195, 0.5);
  }
  cursor: pointer;
`;

export default () => {
  const { DirData, setLocation } = useDirMode();
  const { setMode } = useDirSelectorMode();
  return (
    <>
      {!DirData || !DirData?.directory ? (
        <SbJCon>
          <HeadRootSbj />
          <Folding
            className="icon-right-open"
            onClick={(e) => {
              spaped(e);
              setMode(false);
            }}
          />
        </SbJCon>
      ) : (
        <SbJCon2>
          <BackStep
            onClick={(e) => {
              spaped(e);
              const Test = parseInt(DirData?.parent_id);
              if (!DirData?.directory.root) {
                setLocation(Test);
              } else {
                setLocation(0);
              }
            }}
          >
            <i className="icon-left-big" />
          </BackStep>
          <SbJ>{DirData?.name}</SbJ>
          <Folding
            className="icon-right-open"
            onClick={(e) => {
              spaped(e);
              setMode(false);
            }}
          />
        </SbJCon2>
      )}
    </>
  );
};
