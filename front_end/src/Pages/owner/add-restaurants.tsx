import { useApolloClient, useMutation } from "@apollo/client";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../../Components/button";
import { FormError } from "../../Components/form-error";
import {
  createRestaurant,
  createRestaurantVariables,
} from "../../GlobalLib/Apollo/ApolloTypes/createRestaurant";
import { CREATE_RESTAURANT_MUTATION } from "../../GlobalLib/Apollo/GraphQL_Client/Restaurant/RestaurantM";
import { ME_QUERY } from "../../GlobalLib/Apollo/GraphQL_Client/User/UserQ";

interface IFormProps {
  name: string;
  address: string;
  categoryName: string;
  file: FileList;
}
export const AddRestaurant = () => {
  const client = useApolloClient();
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState("");
  const [createRestaurantMutation, { data }] = useMutation<
    createRestaurant,
    createRestaurantVariables
  >(CREATE_RESTAURANT_MUTATION, {
    onCompleted: (data: createRestaurant) => {
      const {
        createRestaurant: { ok, restaurantId },
      } = data;
      if (ok) {
        const { name, categoryName, address } = getValues();
        setUploading(false);
        const queryResult = client.readQuery({ query: ME_QUERY });
        console.log(queryResult);
        client.writeQuery({
          query: ME_QUERY,
          data: {
            me: {
              ...queryResult.me,
              restaurant: [
                {
                  address,
                  category: {
                    name: categoryName,
                    __typename: "Category",
                  },
                  coverImg: imageUrl,
                  id: restaurantId,
                  isPromoted: false,
                  name,
                  __typename: "Restaurant",
                },
                ...queryResult.me.restaurant,
              ],
            },
          },
        });
      }
      history.push("/");
    },
  });
  const { register, getValues, formState, handleSubmit } = useForm<IFormProps>({
    mode: "onChange",
  });
  const [uploading, setUploading] = useState(false);
  const onSubmit = async () => {
    try {
      setUploading(true);
      const { file, name, categoryName, address } = getValues();
      const actualFile = file[0];
      const formBody = new FormData();
      formBody.append("file", actualFile);
      const { url: coverImg } = await (
        await fetch("http://localhost:4000/uploads/", {
          method: "POST",
          body: formBody,
        })
      ).json();
      setImageUrl(coverImg);
      createRestaurantMutation({
        variables: {
          input: {
            name,
            categoryName,
            address,
            coverImg,
          },
        },
      });
    } catch (e) {}
  };

  return (
    <div className="container flex flex-col items-center mt-52">
      <Helmet>
        <title>Add Restaurant | Nuber Eats</title>
      </Helmet>
      <h4 className="font-semibold text-2xl mb-3">Add Restaurant</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid max-w-screen-sm gap-3 mt-5 w-full mb-5"
      >
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          ref={register({ required: "Name is required." })}
        />
        <input
          className="input"
          type="text"
          name="address"
          placeholder="Address"
          ref={register({ required: "Address is required." })}
        />
        <input
          className="input"
          type="text"
          name="categoryName"
          placeholder="Category Name"
          ref={register({ required: "Category Name is required." })}
        />
        <div>
          <input
            type="file"
            name="file"
            accept="image/*"
            ref={register({ required: true })}
          />
        </div>
        <Button
          loading={uploading}
          canClick={formState.isValid}
          actionText="Create Restaurant"
        />
        {data?.createRestaurant?.error && (
          <FormError errorMessage={data.createRestaurant.error} />
        )}
      </form>
    </div>
  );
};