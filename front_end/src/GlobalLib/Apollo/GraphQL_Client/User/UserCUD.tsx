import { gql } from "@apollo/client";

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(username: $username, email: $email, password: $password)
  }
`;
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;
export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
export const SET_AVATAR = gql`
  mutation setAvatar($avatar: String!) {
    setAvatar(avatar: $avatar)
  }
`;
export const SET_BACKIMG = gql`
  mutation setBackImg($back_img: String!) {
    setBackImg(back_img: $back_img)
  }
`;
export const CURRENT_PASSWORD_CONFIRM = gql`
  mutation currentPasswordConfirm($current_password: String!) {
    currentPasswordConfirm(current_password: $current_password)
  }
`;
export const SET_USERNAME = gql`
  mutation setUsername($username: String!) {
    setUsername(username: $username)
  }
`;
export const SET_PHONE_NUMBER = gql`
  mutation setPhonNnumber($phone_number: String!) {
    setPhonNnumber(phone_number: $phone_number)
  }
`;
export const SET_EMAIL = gql`
  mutation setEmail($email: String!) {
    setEmail(email: $email)
  }
`;
export const SET_PASSWORD = gql`
  mutation setPassword($password: String!) {
    setPassword(password: $password)
  }
`;
export const USERNAME_DUPLICATE_CHECK = gql`
  mutation usernameDuplicateCheck($username: String!) {
    usernameDuplicateCheck(username: $username)
  }
`;
export const EMAIL_DUPLICATE_CHECK = gql`
  mutation emailDuplicateCheck($email: String!) {
    emailDuplicateCheck(email: $email)
  }
`;
