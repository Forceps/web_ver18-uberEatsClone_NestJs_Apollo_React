import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  WH100perInput,
} from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import WritePostCon from "../../../../../../Components/Post/WritePost/WritePostCon";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { FlexCenter } from "../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";
import PaginationCon from "../Pagination/PaginationCon";

const Suburb = styled(W100per)`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 30px 10px 0 10px;
`;
const AvailTotal = styled(W100per)`
  padding: 10px 0 15px 0;
`;
const Achievement = styled.div``;
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
const WrBtn = styled(FlexCenter)`
  width: 100%;
  height: 35px;
  padding: 5px;
  margin: 0 15px 10px 0;
  background-color: #dfe6e9;
  cursor: pointer;
  &:hover {
    background-color: #b2bec3;
  }
`;
const Icon = styled.i`
  margin: 0 0 0 8px;
`;
const ScaleInfoSbj = styled(W100per)`
  margin: 0 0 10px 0;
`;
const ScaleInfoMain = styled(W100per)`
  padding: 0 0 0 7px;
`;
const SelectModeBtn = styled(FlexCenter)`
  width: 50%;
  height: 35px;
  padding: 5px;
  margin: 0 15px 10px 0;
  background-color: #dfe6e9;
  cursor: pointer;
  &:hover {
    background-color: #b2bec3;
  }
`;

const PostCtrlPre = ({
  data: { postCount },
  createPost,
  create_post_toggle,
  SearchKeyWord,
  Search,
}: PostCtrlPreProps) => {
  return (
    <Suburb>
      <SearchBox>
        <SearchTxt
          type="text"
          placeholder="Search"
          {...SearchKeyWord}
          onKeyUp={(e: any) => {
            if (e.keyCode === 13) {
              Search(e);
            }
          }}
          spellCheck="false"
        />
        <SearchBtn onClick={(e: any) => {}}>
          <i className="icon-search" />
        </SearchBtn>
      </SearchBox>
      <PaginationCon />
      <WrBtn
        onClick={(e) => {
          spaped(e);
          create_post_toggle();
        }}
      >
        Write
        <Icon className="icon-pencil-alt" />
      </WrBtn>
      <Achievement>
        <AvailTotal>
          <ScaleInfoSbj>Scale</ScaleInfoSbj>
          <ScaleInfoMain>
            {postCount} {postCount === 1 ? "post" : "posts"}
          </ScaleInfoMain>
        </AvailTotal>
      </Achievement>
      <SelectModeBtn>Select mode</SelectModeBtn>
      {createPost && <WritePostCon create_post_toggle={create_post_toggle} />}
    </Suburb>
  );
};

interface PostCtrlPreProps {
  data: any;
  createPost: boolean;
  create_post_toggle: () => void;
  Search: (e: any) => void;
  SearchKeyWord: any;
}

export default React.memo(PostCtrlPre);
