import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import LoginModalCon from "../../../../../Components/User/Auth/LoginModal/LoginModalCon";

const MetaInfo = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  bottom: 0;
  height: 40px;
  font-size: 1rem;
  margin: 60px 0 0 0;
`;
const NearUnderI = styled.i`
  margin: 0 5px 0 0;
`;
const IntegerInfo = styled(WH100per)`
  display: flex;
  align-items: center;
`;
const NonIntegerInfo = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Commentable = styled.div`
  display: flex;
  font-size: 1.4rem;
  color: #b2bec3;
  cursor: pointer;
`;
const Shareable = styled(Commentable)`
  margin: 0 0 0 11px;
`;
const ILike = styled.div`
  display: flex;
  margin: 0 0 0 11px;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
const CountNum = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export default ({
  post,
  setAddCommentOpen,
  postLikeIncrease,
  InitLikes,
  LikeClicked,
  LoginOpen,
  setLoginOpen,
  commentsCount,
}: MetaInfoPreProps) => {
  return (
    <>
      <MetaInfo>
        <IntegerInfo>
          Views {post.views}
          {!LikeClicked ? (
            <ILike
              onClick={(e) => {
                spaped(e);
                postLikeIncrease();
              }}
            >
              <i className="icon-heart-empty" /> Likes {InitLikes}
            </ILike>
          ) : (
            <ILike>
              <i className="icon-heart" /> Likes {InitLikes}
            </ILike>
          )}
        </IntegerInfo>
        <NonIntegerInfo>
          <Commentable
            onClick={(e) => {
              spaped(e);
              setAddCommentOpen((p: boolean) => !p);
            }}
          >
            <CountNum>{commentsCount}</CountNum>
            <NearUnderI className="icon-commenting-o" />
          </Commentable>
          <Shareable>
            <NearUnderI className="icon-share" />
          </Shareable>
        </NonIntegerInfo>
      </MetaInfo>
      {LoginOpen && <LoginModalCon setLoginModalOpen={setLoginOpen} />}
    </>
  );
};

interface MetaInfoPreProps {
  post: any;
  setAddCommentOpen: any;
  postLikeIncrease: () => void;
  InitLikes: number;
  LikeClicked: boolean;
  LoginOpen: boolean;
  setLoginOpen: any;
  commentsCount: number;
}
