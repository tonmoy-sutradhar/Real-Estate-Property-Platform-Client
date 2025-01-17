import { Helmet } from "react-helmet-async";
import Heading from "../../components/Shared/Heading";
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
      {" "}
      <Helmet>
        <title>Property details</title>
      </Helmet>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12">
        {/* Header */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <div className="w-full overflow-hidden rounded-xl">
              <img
                className="object-cover w-full"
                src={image}
                alt="header image"
              />
            </div>
          </div>
        </div>
        <div className="md:gap-10 flex-1 mt-48">
          {/* <Heading title={name} subtitle={`Title: ${title}`} />
        
        <div
          className="
    text-lg font-light text-neutral-500"
        >
          Location: {location}
        </div> */}

          <div className="text-2xl font-bold mb-3">Title: {title}</div>
          <div className="text-2xl font-bold mb-3">Location: {location}</div>
          <div
            className="
          text-xl 
          font-semibold 
          flex 
          flex-row 
          items-center 
          gap-2
        "
          >
            <div>Agent: {agent?.name}</div>

            <img
              className="rounded-full"
              height="30"
              width="30"
              alt="Avatar"
              referrerPolicy="no-referrer"
              src={agent?.image}
            />
          </div>
          {/* <hr className="my-6" /> */}
          {/* <div>
          <p
            className="
          gap-4 
          font-light
          text-neutral-500
        "
          >
            Quantity: {quantity} Units Left Only!
          </p>
        </div> */}
          <hr className="my-6" />
          <div className="flex justify-between">
            <p className="font-bold text-3xl text-gray-500">Price: {price}$</p>
            <div>
              <Button
                disabled={
                  !user || user?.email === agent?.email || role != "customer"
                }
                onClick={() => setIsOpen(true)}
                // label={quantity > 0 ? "Purchase" : "Out Of Stock"}
                label={"Purchase"}
              />
            </div>
          </div>
          <hr className="my-6" />

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
