/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CategoryParts
// ====================================================

export interface CategoryParts_restaurant_category {
  __typename: "category";
  name: string;
}

export interface CategoryParts_restaurant {
  __typename: "restaurant";
  id: number;
  name: string;
  coverImg: string | null;
  category: CategoryParts_restaurant_category | null;
  address: string;
  isPromoted: number;
}

export interface CategoryParts {
  __typename: "category";
  id: number;
  name: string;
  coverImg: string | null;
  slug: string;
  restaurantCount: number;
  restaurant: CategoryParts_restaurant[] | null;
}
