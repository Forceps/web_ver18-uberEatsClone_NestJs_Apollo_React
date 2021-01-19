/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetOrderInput, OrderStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: getOrder
// ====================================================

export interface getOrder_getOrder_order_user_order_driverTouser {
  __typename: "user";
  email: string;
}

export interface getOrder_getOrder_order_user_order_customerTouser {
  __typename: "user";
  email: string;
}

export interface getOrder_getOrder_order_restaurant_orderTorestaurant {
  __typename: "restaurant";
  name: string;
}

export interface getOrder_getOrder_order {
  __typename: "order";
  id: number;
  status: OrderStatus;
  total: number;
  user_order_driverTouser: getOrder_getOrder_order_user_order_driverTouser | null;
  user_order_customerTouser: getOrder_getOrder_order_user_order_customerTouser | null;
  restaurant_orderTorestaurant: getOrder_getOrder_order_restaurant_orderTorestaurant | null;
}

export interface getOrder_getOrder {
  __typename: "GetOrderOutput";
  ok: boolean;
  error: string | null;
  order: getOrder_getOrder_order | null;
}

export interface getOrder {
  getOrder: getOrder_getOrder;
}

export interface getOrderVariables {
  input: GetOrderInput;
}
