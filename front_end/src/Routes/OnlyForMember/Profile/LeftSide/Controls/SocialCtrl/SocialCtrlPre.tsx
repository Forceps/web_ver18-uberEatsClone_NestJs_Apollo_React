import React from "react";
import styled from "styled-components";
import WH100per, {
  WH100perInput,
  W100per,
} from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useInputReturn } from "../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useProfileDetailMode } from "../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import AtFriends from "./SocialType/AtFriends";
import AtSubscribe from "./SocialType/AtSubscribe";

const Wrapper = styled(W100per)`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 30px 10px 0 10px;
`;
const SearchBox = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 35px;
  height: 35px;
  margin: 10px 0 15px 0;
`;
const SearchTxt = styled(WH100perInput)`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #2d3436;
`;
const SearchBtn = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
`;

export default ({
  GroupMakeOpen,
  setGroupMakeOpen,
  SearchKeyWord,
  Search,
}: SocialCtrlPreProps) => {
  const { ScMode } = useProfileDetailMode();
  return (
    <>
      <Wrapper>
        <SearchBox>
          <SearchTxt
            type="text"
            placeholder="Search"
            {...SearchKeyWord}
            onKeyUp={(e: any) => {
              if (e.keyCode === 13) {
                spaped(e);
                Search();
              }
            }}
          />
          <SearchBtn
            onClick={(e: any) => {
              Search();
            }}
          >
            <i className="icon-search" />
          </SearchBtn>
        </SearchBox>
        {ScMode === "Friends" ? (
          <AtFriends />
        ) : (
          <AtSubscribe
            GroupMakeOpen={GroupMakeOpen}
            setGroupMakeOpen={setGroupMakeOpen}
          />
        )}
      </Wrapper>
    </>
  );
};

interface SocialCtrlPreProps {
  GroupMakeOpen: boolean;
  setGroupMakeOpen: any;
  SearchKeyWord: useInputReturn;
  Search: () => Promise<void>;
}
