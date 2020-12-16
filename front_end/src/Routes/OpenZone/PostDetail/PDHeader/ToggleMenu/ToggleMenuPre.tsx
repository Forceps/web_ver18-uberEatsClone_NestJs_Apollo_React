import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { W100per } from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useMyInfo } from "../../../../../GlobalLib/Context/UserContext/Me";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const OutlineBox = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 150px;
  background-color: #fafafa;
  box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;
const Item = styled(W100per)`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 40px;
  font-size: 0.9rem;
  padding: 10px;
  color: black;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const Icon = styled.i`
  margin: 0 10px 0 0;
`;

export default ({ localLogOutMutation }: LeftSideMenuPreProps) => {
  const { MEdata, MEloading } = useMyInfo();

  return (
    <OutlineBox>
      <Item>
        <Icon className="icon-bell" /> Notification
      </Item>
      <Item>
        <Icon className="icon-comment-empty" /> Chat
      </Item>
      {MEloading ? (
        <>
          <Item />
          <Item />
        </>
      ) : (
        <>
          <Link to={`/bookmark/${MEdata?.user_id}`}>
            <Item>
              <Icon className="icon-bookmark-empty" /> Bookmark
            </Item>
          </Link>
          <Link to={`/profile`}>
            <Item>
              <Icon
                className="icon-noun_user_856030"
                style={{
                  fontSize: "1rem",
                }}
              />
              Profile
            </Item>
          </Link>
        </>
      )}
      <Item
        onClick={(e) => {
          spaped(e);
          localLogOutMutation();
        }}
      >
        Log out
      </Item>
    </OutlineBox>
  );
};

interface LeftSideMenuPreProps {
  localLogOutMutation: any;
}
