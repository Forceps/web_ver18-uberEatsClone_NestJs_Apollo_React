import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useMe } from "../../GlobalLib/Apollo/GraphQL_Client/User/UserQ";

export const MyRestaurants = () => {
  const { data } = useMe();
  return (
    <div>
      <Helmet>
        <title>My Restaurants | Nuber Eats</title>
      </Helmet>
      <div className="max-w-screen-2xl mx-auto mt-32">
        <h2 className="text-4xl font-medium mb-10">My Restaurants</h2>
        {data?.me.restaurant && data?.me.restaurant.length === 0 && (
          <>
            <h4 className="text-xl mb-5">You have no restaurants.</h4>
            <Link
              className="text-lime-600 hover:underline"
              to="/add-restaurant"
            >
              Create one &rarr;
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
