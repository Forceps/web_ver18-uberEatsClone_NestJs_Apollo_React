/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderStatus } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: coockedOrders
// ====================================================

export interface coockedOrders_cookedOrders_user_order_driverTouser {
  __typename: "user";
  email: string;
}

export interface coockedOrders_cookedOrders_user_order_customerTouser {
  __typename: "user";
  email: string;
}

export interface coockedOrders_cookedOrders_restaurant_orderTorestaurant {
  __typename: "restaurant";
  name: string;
}

export interface coockedOrders_cookedOrders {
  __typename: "order";
  id: number;
  status: OrderStatus;
  total: number;
  user_order_driverTouser: coockedOrders_cookedOrders_user_order_driverTouser | null;
  user_order_customerTouser: coockedOrders_cookedOrders_user_order_customerTouser | null;
  restaurant_orderTorestaurant: coockedOrders_cookedOrders_restaurant_orderTorestaurant | null;
}

export interface coockedOrders {
  cookedOrders: coockedOrders_cookedOrders;
}
