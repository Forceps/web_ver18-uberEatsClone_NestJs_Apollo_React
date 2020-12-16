import React from "react";
import styled from "styled-components";
import { useDirMode } from "../../../../../GlobalLib/Context/ProfileContext/DirMode";
import { usePostDetail } from "../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useProfileDetailMode } from "../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { useDeletePost } from "../../../../../GlobalLib/Context/PostContext/PostCRUD/DeletePost";
import { useUpdatePost } from "../../../../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useDeleteFile } from "../../../../../GlobalLib/Context/FileContext/FileCRUD/DeleteFile";
import { mediaSummon } from "../../Center/UnderHeader/Archive/ShowWindow/ShowAll/ShowAllLib";
import { S_N_to_N } from "../../../../../GlobalLib/RecycleFunction/etc/type_convert";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`;
const Node = styled.div`
  display: grid;
  grid-template-columns: 1fr 70px;
  width: 100%;
  font-size: 1rem;
  & > .hov {
    display: none;
  }
  &:hover {
    background-color: rgba(178, 190, 195, 0.3);
    & > .hov {
      display: flex;
    }
  }
  cursor: pointer;
  overflow: hidden;
`;
const Select = styled.div`
  padding: 10px;
  word-break: break-all;
`;
const Icon = styled.i`
  margin: 0 5px 0 0;
`;
const EndPoint = styled(Node)`
  padding-left: 10px;
`;
const CtrlIcon = styled.i`
  display: grid;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(45, 52, 54, 0.2);
  }
  cursor: pointer;
`;
const Ctrl = styled.div`
  width: 100%;
  height: 100%;
`;

interface DirListProp {
  setUpdateDirOpen: any;
  setUDirObj: any;
  setDeleteDirOpen: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}
export default ({
  setUpdateDirOpen,
  setUDirObj,
  setDeleteDirOpen,
  setShowOneOpen,
  setDetailInfo,
}: DirListProp) => {
  const { DirData, setLocation } = useDirMode();
  const PfDM = useProfileDetailMode();
  const PD = usePostDetail();
  const DP = useDeletePost();
  const { FileDeleteProcess } = useDeleteFile();
  const UP = useUpdatePost();
  return (
    <Wrapper>
      {DirData?.other_directory?.map((dir: any) => (
        <Node
          key={dir.directory_id}
          onClick={(e: any) => {
            spaped(e);
            setLocation(S_N_to_N(dir.directory_id));
          }}
        >
          <Select>
            <Icon className="icon-folder" />
            {dir.name}
          </Select>
          <Ctrl className="hov">
            <CtrlIcon
              className="icon-pencil"
              onClick={(e: any) => {
                spaped(e);
                setUpdateDirOpen(true);
                setUDirObj(dir);
              }}
            />
            <CtrlIcon
              className="icon-noun_x_2939490"
              onClick={(e: any) => {
                spaped(e);
                setDeleteDirOpen(true);
                setUDirObj(dir);
              }}
            />
          </Ctrl>
        </Node>
      ))}
      {DirData?.post?.map((post: any) => (
        <EndPoint key={post.post_id}>
          <Select
            onClick={async (e: any) => {
              spaped(e);
              PfDM.recentState.current = PfDM.Mode;
              PD.setPostID(post.post_id);
              PD.setOpenSeePostDetail(true);
            }}
          >
            <Icon className="icon-doc-text-inv" />
            {post.caption}
          </Select>
          <Ctrl className="hov">
            <CtrlIcon
              className="icon-pencil"
              onClick={async (e: any) => {
                spaped(e);
                await PD.setPostID(post.post_id);
                UP.setUpdatePost(true);
              }}
            />
            <CtrlIcon
              className="icon-noun_x_2939490"
              onClick={(e: any) => {
                spaped(e);
                DP.PostDeleteProcess(post.post_id);
              }}
            />
          </Ctrl>
        </EndPoint>
      ))}
      {DirData?.image?.map((image: any) => (
        <EndPoint
          key={image.image_id}
          onClick={(e) => {
            spaped(e);
          }}
        >
          <Select
            onClick={(e) => {
              spaped(e);
              setDetailInfo({
                MediaType: "img",
                URL: mediaSummon(image.address),
                Title: image.caption,
              });
              setShowOneOpen(true);
            }}
          >
            <Icon className="icon-picture" />
            {image.caption}
          </Select>
          <Ctrl className="hov">
            <CtrlIcon
              className="icon-pencil"
              onClick={async (e: any) => {
                spaped(e);
              }}
            />
            <CtrlIcon
              className="icon-noun_x_2939490"
              onClick={(e: any) => {
                spaped(e);
                FileDeleteProcess(S_N_to_N(image.image_id), "image");
              }}
            />
          </Ctrl>
        </EndPoint>
      ))}
      {DirData?.video?.map((video: any) => (
        <EndPoint
          key={video.video_id}
          onClick={(e) => {
            spaped(e);
          }}
        >
          <Select
            onClick={(e) => {
              spaped(e);
              setDetailInfo({
                MediaType: "video",
                URL: mediaSummon(video.address, "video"),
                Title: video.caption,
              });
              setShowOneOpen(true);
            }}
          >
            <Icon className="icon-video" />
            {video.caption}
          </Select>
          <Ctrl className="hov">
            <CtrlIcon
              className="icon-pencil"
              onClick={async (e: any) => {
                spaped(e);
              }}
            />
            <CtrlIcon
              className="icon-noun_x_2939490"
              onClick={(e: any) => {
                spaped(e);
                FileDeleteProcess(S_N_to_N(video.video_id), "video");
              }}
            />
          </Ctrl>
        </EndPoint>
      ))}
      {DirData?.music?.map((music: any) => (
        <EndPoint
          key={music.music_id}
          onClick={(e) => {
            spaped(e);
          }}
        >
          <Select
            onClick={(e) => {
              spaped(e);
              setDetailInfo({
                MediaType: "audio",
                URL: mediaSummon(music.address, "audio"),
                Title: music.caption,
              });
              setShowOneOpen(true);
            }}
          >
            <Icon className="icon-music" />
            {music.caption}
          </Select>
          <Ctrl className="hov">
            <CtrlIcon
              className="icon-pencil"
              onClick={async (e: any) => {
                spaped(e);
              }}
            />
            <CtrlIcon
              className="icon-noun_x_2939490"
              onClick={(e: any) => {
                spaped(e);
                FileDeleteProcess(S_N_to_N(music.music_id), "audio");
              }}
            />
          </Ctrl>
        </EndPoint>
      ))}
    </Wrapper>
  );
};
