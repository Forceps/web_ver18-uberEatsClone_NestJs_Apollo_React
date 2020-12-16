import { gql, useQuery } from "@apollo/client";

export const SEE_MY_GROUPS = gql`
  {
    seeGroups {
      group_id
      name
      purpose
      identiti_back_img
      identiti_profile_img
    }
  }
`;

export const GROUP_DETAIL = gql`
  query groupDetail($group_id: Int!) {
    groupDetail(group_id: $group_id) {
      name
      purpose
      user {
        user_id
        username
      }
      participation_system
      withdrawal_system
      identiti_back_img
      identiti_profile_img
    }
  }
`;
export const GroupDetailRequest = (group_id: number) =>
  useQuery(GROUP_DETAIL, {
    variables: { group_id },
  });
