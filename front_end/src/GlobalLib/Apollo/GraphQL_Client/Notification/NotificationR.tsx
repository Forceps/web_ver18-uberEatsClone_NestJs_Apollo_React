import { gql, useQuery } from "@apollo/client";

export const SEE_NOTI = gql`
  query seeNoti($skip: Int, $take: Int) {
    seeNoti(skip: $skip, take: $take) {
      notification_id
      title
      content
      user
      sender
      year
      month
      day
      hour
      minute
      second
    }
  }
`;
export const SeeNotiRequest = (skip: number, take: number) =>
  useQuery(SEE_NOTI, {
    variables: { skip: skip ? skip : 0, take: take ? take : 9 },
  });

export const NOTI_DETAIL = gql`
  query notiDetail($notification_id: Int!) {
    notiDetail(notification_id: $notification_id) {
      notification_id
      title
      content
      user
      sender
      year
      month
      day
      hour
      minute
      second
    }
  }
`;
export const NotiDetailRequest = (notification_id: number) =>
  useQuery(NOTI_DETAIL, {
    variables: { notification_id },
  });
