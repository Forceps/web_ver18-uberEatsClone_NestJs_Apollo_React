/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderUpdatesInput, OrderStatus } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: orderUpdates
// ====================================================

export interface orderUpdates_orderUpdates_user_order_driverTouser {
  __typename: "user";
  email: string;
}

export interface orderUpdates_orderUpdates_user_order_customerTouser {
  __typename: "user";
  email: string;
}

export interface orderUpdates_orderUpdates_restaurant_orderTorestaurant {
  __typename: "restaurant";
  name: string;
}

export interface orderUpdates_orderUpdates {
  __typename: "order";
  id: number;
  status: OrderStatus;
  total: number;
  user_order_driverTouser: orderUpdates_orderUpdates_user_order_driverTouser | null;
  user_order_customerTouser: orderUpdates_orderUpdates_user_order_customerTouser | null;
  restaurant_orderTorestaurant: orderUpdates_orderUpdates_restaurant_orderTorestaurant | null;
}

export interface orderUpdates {
  orderUpdates: orderUpdates_orderUpdates;
}

export interface orderUpdatesVariables {
  input: OrderUpdatesInput;
}
