import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { CREATE_DISH_MUTATION } from "../../GlobalLib/Apollo/GraphQL_Client/Dish/DishM";

interface IParams {
  restaurantId: string;
}

export const AddDish = () => {
  const { restaurantId } = useParams<IParams>();
  const [createDishMutation, { loading }] = useMutation(CREATE_DISH_MUTATION);
  return <h1>a</h1>;
};
