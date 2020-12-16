import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  W100per,
  WH100perLink,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../../../Components/User/HumanBlock/Avatar";

const Intro = styled(W100per)`
  position: relative;
  height: calc(17vw + 50px);
`;
interface TitleBackImgProps {
  FirstImgSrc: string;
}
const TitleBackImg = styled(WH100per)<TitleBackImgProps>`
  position: absolute;
  top: 0;
  left: 0;
  ${(p) => {
    if (p.FirstImgSrc) {
      return css`
        background-image: url(${p.FirstImgSrc});
        background-size: cover;
        background-position: center center;
      `;
    } else {
      return css`
        background-color: rgba(178, 190, 195, 0.3);
      `;
    }
  }}
`;
const Cover = styled(WH100per)<TitleBackImgProps>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  ${(p) => {
    if (p.FirstImgSrc) {
      return css`
        color: white;
        background-color: rgba(45, 52, 54, 0.3);
      `;
    }
  }}
`;
const CentreBox = styled.div`
  display: grid;
  grid-template-rows: 70px 60px;
  min-width: 500px;
  max-width: 700px;
  width: 60vw;
  padding: 25px 0 30px 0;
`;
const Title = styled(W100per)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;
const AuthorInfo = styled(W100per)`
  display: grid;
  height: 60px;
  grid-template-columns: 60px 1fr;
`;
const UserName = styled(WH100perLink)<TitleBackImgProps>`
  display: flex;
  padding: 0 0 0 10px;
  font-size: 1.1rem;
  word-break: normal;
  overflow: hidden;
  line-height: 1.8rem;
  color: ${(p) => (p.FirstImgSrc ? "white" : "black")};
  cursor: pointer;
`;

export default ({ post, FirstImgSrc }: IntroProps) => {
  return (
    <Intro>
      <TitleBackImg FirstImgSrc={FirstImgSrc} />
      <Cover FirstImgSrc={FirstImgSrc}>
        <CentreBox>
          <Title>{post.caption}</Title>
          <AuthorInfo>
            <Avatar
              url={post.user_postTouser?.avatar}
              size={60}
              link={`/blog/${post.user_postTouser.user_id}`}
            />
            <UserName
              to={`/blog/${post.user_postTouser.user_id}`}
              FirstImgSrc={FirstImgSrc}
            >
              {post.user_postTouser.username}
            </UserName>
          </AuthorInfo>
        </CentreBox>
      </Cover>
    </Intro>
  );
};

interface IntroProps {
  post: any;
  FirstImgSrc: string;
}
