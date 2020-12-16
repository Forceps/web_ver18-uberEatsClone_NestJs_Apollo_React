import React from "react";
import { useMyInfo } from "../../../../../GlobalLib/Context/UserContext/Me";
import TileCon from "../../../../../Components/Post/Shape/Tile/TileCon";

interface PostTimelinePreProps {
  loading: boolean;
  data: any;
}
export default ({ loading, data }: PostTimelinePreProps) => {
  const me = useMyInfo();
  const Initiation = !loading && !me.MEloading;
  return Initiation ? (
    data.map((post: any) => <TileCon key={post.post_id} post={post} />)
  ) : (
    <div />
  );
};
