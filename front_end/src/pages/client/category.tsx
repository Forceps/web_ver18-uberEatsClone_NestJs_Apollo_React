import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  category,
  categoryVariables,
} from "../../GlobalLib/Apollo/ApolloTypes/category";
import { CATEGORY_QUERY } from "../../GlobalLib/Apollo/GraphQL_Client/Category/CategoryQ";

interface ICategoryParams {
  slug: string;
}

export const Category = () => {
  const params = useParams<ICategoryParams>();
  const { data, loading } = useQuery<category, categoryVariables>(
    CATEGORY_QUERY,
    {
      variables: {
        input: {
          page: 1,
          slug: params.slug,
        },
      },
    }
  );
  console.log(data);
  return <h1>Category</h1>;
};
