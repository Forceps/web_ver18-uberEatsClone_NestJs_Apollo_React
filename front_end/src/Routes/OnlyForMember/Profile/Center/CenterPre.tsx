import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import PostMode from "./UnderHeader/Post/PostMode";
import { useProfileMode } from "../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import ArchiveMode from "./UnderHeader/Archive/ArchiveMode";
import SocialCon from "./UnderHeader/Social/SocialCon";
import SettingsMode from "./UnderHeader/Settings/SettingsModeCon";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  padding: 0 0 0 20px;
`;

export default () => {
  const { Mode } = useProfileMode();
  return (
    <Wrapper>
      <Header />
      {Mode[0] === "Archive" ? (
        <ArchiveMode />
      ) : Mode[0] === "Social" ? (
        <SocialCon />
      ) : Mode[0] === "Settings" ? (
        <SettingsMode />
      ) : (
        <PostMode />
      )}
    </Wrapper>
  );
};
