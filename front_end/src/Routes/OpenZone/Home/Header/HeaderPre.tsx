import React from "react";
import styled from "styled-components";
import WH100per, {
  WH100perInput,
  W100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import useSearch from "../../../../GlobalLib/RecycleFunction/Hooks/useSearch";
import LoginModalCon from "../../../../Components/User/Auth/LoginModal/LoginModalCon";
import { useLoginCheck } from "../../../../GlobalLib/Context/UserContext/IsLoggedIn";
import { FlexCenter100per } from "../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const Wrapper = styled(WH100per)`
  display: grid;
  grid-template-columns: 400px 1fr;
  align-items: center;
  padding: 0 0 0 11px;
`;
const SearchBox = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 35px;
  height: 35px;
`;
const SearchTxt = styled(WH100perInput)`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #636e72;
`;
const SearchBtn = styled(FlexCenter100per)`
  font-size: 1.2rem;
  cursor: pointer;
`;
const AreYouLogined = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 15px;
  font-size: 1.1rem;
`;
const JumpToLogin = styled.div`
  color: black;
  cursor: pointer;
`;

export default ({ setSeeMode, LoginOpen, setLoginOpen }: RightPreProps) => {
  const ME = useMyInfo();
  const { isLoggedIn } = useLoginCheck();
  const { SearchKeyWord, Search } = useSearch(setSeeMode);
  return (
    <Wrapper>
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
        <SearchBtn
          onClick={(e: any) => {
            Search(e);
          }}
        >
          <i className="icon-search" />
        </SearchBtn>
      </SearchBox>
      <AreYouLogined>
        {isLoggedIn ? (
          ME?.MEloading ? (
            <div>Loading...</div>
          ) : (
            <div>{ME.MEdata?.username}</div>
          )
        ) : (
          <JumpToLogin
            onClick={() => {
              setLoginOpen(true);
            }}
          >
            Login
          </JumpToLogin>
        )}
      </AreYouLogined>
      {LoginOpen && (
        <LoginModalCon zIndex={13} setLoginModalOpen={setLoginOpen} />
      )}
    </Wrapper>
  );
};

interface RightPreProps {
  setSeeMode: any;
  LoginOpen: boolean;
  setLoginOpen: any;
}
