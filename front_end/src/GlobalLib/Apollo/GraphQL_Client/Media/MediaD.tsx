import { gql } from "@apollo/client";

export const IMG_DELETE = gql`
  mutation imgDelete($image_id: Int!) {
    imgDelete(image_id: $image_id)
  }
`;

export const MUSIC_DELETE = gql`
  mutation musicDelete($music_id: Int!) {
    musicDelete(music_id: $music_id)
  }
`;

export const VIDEO_DELETE = gql`
  mutation videoDelete($video_id: Int!) {
    videoDelete(video_id: $video_id)
  }
`;
