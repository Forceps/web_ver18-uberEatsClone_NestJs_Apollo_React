import React from "react";
import styled from "styled-components";
import RecentPostsCon from "./ParallelTiles/RecentPosts/RecentPostsCon";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useSearchUser } from "../../../../GlobalLib/Context/UserContext/SearchUser";
import SearchedUser from "./SearchedUser/SearchedUserCon";
import RecommendPostsCon from "./ParallelTiles/RecommendPosts/RecommendPostsCon";
import { useLoginCheck } from "../../../../GlobalLib/Context/UserContext/IsLoggedIn";

const Wrapper = styled(W100per)`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  min-height: 92vh;
`;
const SmallTitle = styled(W100per)`
  display: grid;
  align-items: center;
  padding: 14px 0 0 10px;
  font-size: 1.3rem;
`;
const SmallerTitle = styled(W100per)`
  display: grid;
  align-items: center;
  padding: 14px 0 0 10px;
  font-size: 1.1rem;
`;

export default ({ SeeMode }: MiddleConProps) => {
  const SU = useSearchUser();
  const { isLoggedIn } = useLoginCheck();
  return (
    <Wrapper>
      {SeeMode === "Search" && SU.called ? (
        <>
          <SmallTitle>Search</SmallTitle>
          <SmallerTitle>User</SmallerTitle>
          <SearchedUser />
          <RecentPostsCon SeeMode={SeeMode} />
        </>
      ) : (
        <>
          {isLoggedIn && <RecommendPostsCon />}
          <RecentPostsCon />
        </>
      )}
    </Wrapper>
  );
};

interface MiddleConProps {
  SeeMode: string;
}
