import React from "react";
import PDHeaderCon from "./PDHeader/PDHeaderCon";
import styled from "styled-components";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import ContentSectionCon from "./ContentSection/ContentSectionCon";
import UndersCon from "./Unders/UndersCon";
import LoginModalCon from "../../../Components/User/Auth/LoginModal/LoginModalCon";
import AuthorWorkQuestCon from "./AuthorWorkQuest/AuthorWorkQuestCon";

const Divistion = styled(WH100per)``;

export default ({
  post_id,
  post,
  AddCommentOpen,
  setAddCommentOpen,
  LoginOpen,
  setLoginOpen,
  AuthorWorkOpen,
  setAuthorWorkOpen,
  FirstImgSrc,
  setFirstImgSrc,
}: PostDetailPreProps) => {
  return (
    <Divistion>
      <PDHeaderCon
        post={post}
        setLoginOpen={setLoginOpen}
        setAuthorWorkOpen={setAuthorWorkOpen}
        FirstImgSrc={FirstImgSrc}
        zIndex={20}
      />
      <ContentSectionCon
        post_id={post_id}
        post={post}
        AddCommentOpen={AddCommentOpen}
        setAddCommentOpen={setAddCommentOpen}
        FirstImgSrc={FirstImgSrc}
        setFirstImgSrc={setFirstImgSrc}
      />
      <UndersCon post_id={post_id} AddCommentOpen={AddCommentOpen} />
      {LoginOpen && (
        <LoginModalCon zIndex={30} setLoginModalOpen={setLoginOpen} />
      )}
      {AuthorWorkOpen && (
        <AuthorWorkQuestCon
          setAuthorWorkOpen={setAuthorWorkOpen}
          zIndex={30}
          post={post}
        />
      )}
    </Divistion>
  );
};

interface PostDetailPreProps {
  post_id: number;
  post: any;
  AddCommentOpen: boolean;
  setAddCommentOpen: any;
  LoginOpen: boolean;
  setLoginOpen: any;
  AuthorWorkOpen: boolean;
  setAuthorWorkOpen: any;
  FirstImgSrc: any;
  setFirstImgSrc: any;
}
