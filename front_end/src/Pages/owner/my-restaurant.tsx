import { Link, useParams } from "react-router-dom";
import { useMe } from "../../GlobalLib/Apollo/GraphQL_Client/User/UserQ";

interface IParams {
  id: string;
}
export const MyRestaurant = () => {
  const { id } = useParams<IParams>();
  const { data } = useMe();
  const dataTarget = data?.me.restaurant?.filter((elem) => elem.id === +id)[0];
  console.log(dataTarget);
  return (
    <div>
      <div
        className="  bg-gray-700  py-28 bg-center bg-cover"
        style={{
          backgroundImage: `url(${dataTarget?.coverImg})`,
        }}
      ></div>
      <div className="container mt-10">
        <h2 className="text-4xl font-medium mb-10">
          {dataTarget?.name || "Loading..."}
        </h2>
        <Link to={``} className=" mr-8 text-white bg-gray-800 py-3 px-10">
          Add Dish &rarr;
        </Link>
        <Link to={``} className=" text-white bg-lime-700 py-3 px-10">
          Buy Promotion &rarr;
        </Link>
        <div className="mt-10">
          {dataTarget?.dish?.length === 0 ? (
            <h4 className="text-xl mb-5">Please upload a dish!</h4>
          ) : null}
        </div>
      </div>
    </div>
  );
};
