/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import {
  editOrder,
  editOrderVariables,
} from "../../GlobalLib/Apollo/ApolloTypes/editOrder";
import {
  getOrder,
  getOrderVariables,
} from "../../GlobalLib/Apollo/ApolloTypes/getOrder";
import {
  OrderStatus,
  UserRole,
} from "../../GlobalLib/Apollo/ApolloTypes/globalTypes";
import { orderUpdates } from "../../GlobalLib/Apollo/ApolloTypes/orderUpdates";
import { EDIT_ORDER } from "../../GlobalLib/Apollo/GraphQL_Client/Order/OrderM";
import { GET_ORDER } from "../../GlobalLib/Apollo/GraphQL_Client/Order/OrderQ";
import { ORDER_SUBSCRIPTION } from "../../GlobalLib/Apollo/GraphQL_Client/Order/OrderS";
import { useMe } from "../../GlobalLib/Apollo/GraphQL_Client/User/UserQ";

interface IParams {
  id: string;
}
export const Order = () => {
  const params = useParams<IParams>();
  const { data: userData } = useMe();
  const [editOrderMutation] = useMutation<editOrder, editOrderVariables>(
    EDIT_ORDER
  );
  const { data, subscribeToMore } = useQuery<getOrder, getOrderVariables>(
    GET_ORDER,
    {
      variables: {
        input: {
          id: +params.id,
        },
      },
    }
  );
  console.log(data);
  const onButtonClick = (newStatus: OrderStatus) => {
    editOrderMutation({
      variables: {
        input: {
          id: +params.id,
          status: newStatus,
        },
      },
    });
  };
  useEffect(() => {
    if (data?.getOrder.ok) {
      subscribeToMore({
        document: ORDER_SUBSCRIPTION,
        variables: {
          input: {
            id: +params.id,
          },
        },
        updateQuery: (
          prev,
          {
            subscriptionData: { data },
          }: { subscriptionData: { data: orderUpdates } }
        ) => {
          if (!data) return prev;
          return {
            getOrder: {
              ...prev.getOrder,
              order: {
                ...data.orderUpdates,
              },
            },
          };
        },
      });
    }
  }, [data]);

  return (
    <div className="mt-32 container flex justify-center">
      <Helmet>
        <title>Order #{params.id} | Nuber Eats</title>
      </Helmet>
      <div className="border border-gray-800 w-full max-w-screen-sm flex flex-col justify-center">
        <h4 className="bg-gray-800 w-full py-5 text-white text-center text-xl">
          Order #{params.id}
        </h4>
        <h5 className="p-5 pt-10 text-3xl text-center ">
          ${data?.getOrder.order?.total}
        </h5>
        <div className="p-5 text-xl grid gap-6">
          <div className="border-t pt-5 border-gray-700">
            Prepared By:{" "}
            <span className="font-medium">
              {data?.getOrder.order?.restaurant_orderTorestaurant?.name}
            </span>
          </div>
          <div className="border-t pt-5 border-gray-700 ">
            Deliver To:{" "}
            <span className="font-medium">
              {data?.getOrder.order?.user_order_customerTouser?.email}
            </span>
          </div>
          <div className="border-t border-b py-5 border-gray-700">
            Driver:{" "}
            <span className="font-medium">
              {data?.getOrder.order?.user_order_driverTouser?.email ||
                "Not yet."}
            </span>
          </div>
          {userData?.me.role === "client" && (
            <span className=" text-center mt-5 mb-3  text-2xl text-lime-600">
              Status: {data?.getOrder.order?.status}
            </span>
          )}
          {userData?.me.role === UserRole.owner && (
            <>
              {data?.getOrder.order?.status === OrderStatus.pending && (
                <button
                  onClick={() => onButtonClick(OrderStatus.cooking)}
                  className="btn"
                >
                  Accept Order
                </button>
              )}
              {data?.getOrder.order?.status === OrderStatus.cooking && (
                <button
                  onClick={() => onButtonClick(OrderStatus.cooked)}
                  className="btn"
                >
                  Order Cooked
                </button>
              )}
              {data?.getOrder.order?.status !== OrderStatus.cooking &&
                data?.getOrder.order?.status !== OrderStatus.pending && (
                  <span className=" text-center mt-5 mb-3  text-2xl text-lime-600">
                    Status: {data?.getOrder.order?.status}
                  </span>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
