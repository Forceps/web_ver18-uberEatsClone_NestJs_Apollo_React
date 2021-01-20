/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderStatus } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: pendingOrders
// ====================================================

export interface pendingOrders_pendingOrders_user_order_driverTouser {
  __typename: "user";
  email: string;
}

export interface pendingOrders_pendingOrders_user_order_customerTouser {
  __typename: "user";
  email: string;
}

export interface pendingOrders_pendingOrders_restaurant_orderTorestaurant {
  __typename: "restaurant";
  name: string;
}

export interface pendingOrders_pendingOrders {
  __typename: "order";
  id: number;
  status: OrderStatus;
  total: number;
  user_order_driverTouser: pendingOrders_pendingOrders_user_order_driverTouser | null;
  user_order_customerTouser: pendingOrders_pendingOrders_user_order_customerTouser | null;
  restaurant_orderTorestaurant: pendingOrders_pendingOrders_restaurant_orderTorestaurant | null;
}

export interface pendingOrders {
  pendingOrders: pendingOrders_pendingOrders;
}
