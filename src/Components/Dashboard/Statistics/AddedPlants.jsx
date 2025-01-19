import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import AdminAddedproperty from "../TableRows/AdminAddedproperty";

const AddedPlants = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: plants = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["plants"],
    queryFn: async () => {
      const { data } = await axiosSecure("/plants/admin");

      return data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>Properties</title>
      </Helmet>
      <div className="container mx-auto px-4 sm:px-8 border-2 border-purple-500 rounded-xl">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plants.map((plant) => (
                    <AdminAddedproperty
                      key={plant?._id}
                      plant={plant}
                      refetch={refetch}
                    ></AdminAddedproperty>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddedPlants;
