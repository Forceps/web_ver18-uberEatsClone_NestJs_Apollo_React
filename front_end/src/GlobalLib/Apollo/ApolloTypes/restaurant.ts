/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RestaurantInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: restaurant
// ====================================================

export interface restaurant_restaurant_restaurant_category {
  __typename: "category";
  name: string;
}

export interface restaurant_restaurant_restaurant_dish_options_choice {
  __typename: "DishChoice";
  name: string;
  extra: number | null;
}

export interface restaurant_restaurant_restaurant_dish_options {
  __typename: "DishOption";
  name: string;
  extra: number | null;
  choice: restaurant_restaurant_restaurant_dish_options_choice[] | null;
}

export interface restaurant_restaurant_restaurant_dish {
  __typename: "dish";
  id: number;
  name: string;
  price: number;
  photo: string | null;
  description: string;
  options: restaurant_restaurant_restaurant_dish_options[] | null;
}

export interface restaurant_restaurant_restaurant {
  __typename: "restaurant";
  id: number;
  name: string;
  coverImg: string | null;
  category: restaurant_restaurant_restaurant_category | null;
  address: string;
  isPromoted: number;
  dish: restaurant_restaurant_restaurant_dish[] | null;
}

export interface restaurant_restaurant {
  __typename: "RestaurantOutput";
  ok: boolean;
  error: string | null;
  restaurant: restaurant_restaurant_restaurant | null;
}

export interface restaurant {
  restaurant: restaurant_restaurant;
}

export interface restaurantVariables {
  input: RestaurantInput;
}
