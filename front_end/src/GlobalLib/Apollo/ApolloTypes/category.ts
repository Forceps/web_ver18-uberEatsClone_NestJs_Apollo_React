/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: category
// ====================================================

export interface category_category_category_restaurant_category {
  __typename: "category";
  name: string;
}

export interface category_category_category_restaurant {
  __typename: "restaurant";
  id: number;
  name: string;
  coverImg: string | null;
  category: category_category_category_restaurant_category | null;
  address: string;
  isPromoted: number;
}

export interface category_category_category {
  __typename: "category";
  id: number;
  name: string;
  coverImg: string | null;
  slug: string;
  restaurantCount: number;
  restaurant: category_category_category_restaurant[] | null;
}

export interface category_category {
  __typename: "CategoryOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalResults: number | null;
  category: category_category_category | null;
}

export interface category {
  category: category_category;
}

export interface categoryVariables {
  input: CategoryInput;
}
