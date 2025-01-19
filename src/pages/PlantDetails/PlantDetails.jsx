import { Helmet } from "react-helmet-async";
import Button from "../../components/Shared/Button/Button";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import Container from "../../components/Shared/Container";

const PlantDetails = () => {
  const [role] = useRole();
  const { user } = useAuth();
  const { id } = useParams();
  let [isOpen, setIsOpen] = useState(false);

  const {
    data: plant = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["plant", id],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/plants/${id}`
      );
      return data;
    },
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const { title, location, image, price, agent } = plant;

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <Helmet>
        <title>Property Details</title>
      </Helmet>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12 my-3">
        {/* Image Section */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <div className="w-full overflow-hidden rounded-3xl shadow-lg">
              <img
                className="object-cover w-full h-96"
                src={image}
                alt="Plant"
              />
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1 mt-10 lg:mt-0">
          <div className="mb-8">
            <div className="text-3xl font-bold text-gray-800 mb-4">{title}</div>
            <div className="text-lg font-medium text-gray-600 mb-4">
              Location: {location}
            </div>
            <p className="font-bold text-xl text-green-600">Price: ${price}</p>
            <div className="flex items-center gap-4 text-lg font-medium text-gray-600">
              <span>Agent: {agent?.name}</span>
              <img
                className="rounded-full h-10 w-10"
                alt="Agent Avatar"
                referrerPolicy="no-referrer"
                src={agent?.image}
              />
            </div>
          </div>

          <div className="border-t border-gray-300 my-6"></div>

          <div className="flex justify-between items-center mb-6">
            {/* <p className="font-bold text-3xl text-green-600">Price: ${price}</p> */}
            <Button
              disabled={
                !user || user?.email === agent?.email || role !== "customer"
              }
              onClick={() => setIsOpen(true)}
              label="Purchase"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium text-lg rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="border-t border-gray-300 my-6"></div>

          <PurchaseModal
            plant={plant}
            closeModal={closeModal}
            isOpen={isOpen}
            refetch={refetch}
          />
        </div>
      </div>
    </Container>
  );
};

export default PlantDetails;
