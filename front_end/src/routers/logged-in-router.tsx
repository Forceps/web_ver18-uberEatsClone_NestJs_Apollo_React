import { useQuery } from "@apollo/client";
import { meQuery } from "../GlobalLib/Apollo/ApolloTypes/meQuery";
import { ME_QUERY } from "../GlobalLib/Apollo/GraphQL_Client/User/UserR";

export const LoggedInRouter = () => {
  const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <div>
      <h1>{data.me.email}</h1>
    </div>
  );
};
