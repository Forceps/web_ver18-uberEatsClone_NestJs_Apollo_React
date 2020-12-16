import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import BlogPostCon from "./Post/BlogPostCon";
import BlogRelationCon from "./Relation/BlogRelationCon";

const Cover = styled(W100per)`
  display: flex;
  min-height: 100px;
`;

export default ({ user_id, Mode }: DisplayPreProps) => {
  return (
    <Cover>
      {Mode === "relation" ? (
        <BlogRelationCon user_id={user_id} />
      ) : (
        <BlogPostCon user_id={user_id} />
      )}
    </Cover>
  );
};

interface DisplayPreProps {
  user_id: number;
  Mode: string;
}
