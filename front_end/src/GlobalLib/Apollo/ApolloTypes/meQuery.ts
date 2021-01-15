/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_me_restaurant_category {
  __typename: "category";
  name: string;
}

export interface meQuery_me_restaurant {
  __typename: "restaurant";
  id: number;
  name: string;
  coverImg: string | null;
  category: meQuery_me_restaurant_category | null;
  address: string;
  isPromoted: number;
}

export interface meQuery_me {
  __typename: "user";
  id: number;
  email: string;
  role: UserRole;
  verified: boolean;
  restaurant: meQuery_me_restaurant[] | null;
}

export interface meQuery {
  me: meQuery_me;
}
