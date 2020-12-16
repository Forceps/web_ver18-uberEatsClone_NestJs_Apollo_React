import React from "react";
import styled from "styled-components";
import WH100per, {
  H100per,
  W100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import BookmarkHeaderCon from "./BookmarkHeader/BookmarkHeaderCon";
import MiddleCon from "./Middle/MiddleCon";

const Body = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 1100px 1fr;
  position: relative;
  z-index: 0;
  padding: 100px 0 0 0;
`;
const Center = styled(W100per)`
  display: grid;
  grid-template-rows: 40px 1fr 50px;
  height: 100px;
`;
const SbjArea = styled(WH100per)`
  display: flex;
`;
const Sbj = styled(H100per)`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding: 0 0 0 2px;
`;

export default ({ SeeMode, setSeeMode }: BookmarkPreProps) => {
  return (
    <Body>
      <BookmarkHeaderCon zIndex={20} />
      <div />
      <Center>
        <SbjArea>
          <Sbj>Bookmark</Sbj>
        </SbjArea>
        <MiddleCon SeeMode={SeeMode} />
        <div />
      </Center>
    </Body>
  );
};

interface BookmarkPreProps {
  SeeMode: string;
  setSeeMode: any;
}
