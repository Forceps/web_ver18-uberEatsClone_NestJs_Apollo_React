/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RestaurantParts
// ====================================================

export interface RestaurantParts_category {
  __typename: "category";
  name: string;
}

export interface RestaurantParts {
  __typename: "restaurant";
  id: number;
  name: string;
  coverImg: string | null;
  category: RestaurantParts_category | null;
  address: string;
  isPromoted: number;
}
