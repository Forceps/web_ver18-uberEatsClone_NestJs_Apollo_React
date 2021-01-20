/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: FullOrderParts
// ====================================================

export interface FullOrderParts_user_order_driverTouser {
  __typename: "user";
  email: string;
}

export interface FullOrderParts_user_order_customerTouser {
  __typename: "user";
  email: string;
}

export interface FullOrderParts_restaurant_orderTorestaurant {
  __typename: "restaurant";
  name: string;
}

export interface FullOrderParts {
  __typename: "order";
  id: number;
  status: OrderStatus;
  total: number;
  user_order_driverTouser: FullOrderParts_user_order_driverTouser | null;
  user_order_customerTouser: FullOrderParts_user_order_customerTouser | null;
  restaurant_orderTorestaurant: FullOrderParts_restaurant_orderTorestaurant | null;
}
