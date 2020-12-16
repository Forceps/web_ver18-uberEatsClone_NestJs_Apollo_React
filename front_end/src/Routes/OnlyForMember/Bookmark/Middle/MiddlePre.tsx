import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import PostTimelineCon from "./PostTimeline/PostTimelineCon";

const Wrapper = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 20px 0 0 0;
`;

export default ({ List, LoadCount, Finish }: MiddlePreProps) => {
  return (
    <Wrapper>
      {List.map((t) => (
        <PostTimelineCon
          key={t}
          turn={t}
          LoadCount={LoadCount}
          Finish={Finish}
        />
      ))}
    </Wrapper>
  );
};

interface MiddlePreProps {
  List: number[];
  LoadCount: number;
  Finish: any;
}
