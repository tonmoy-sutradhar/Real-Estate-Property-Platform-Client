import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyReviewCard = ({ recomm, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const {
    name,
    email,
    propertyLocation,
    propertyImage,
    propertyTitle,
    propertyId,
    rating,
    review,
    agentName,
    agentEmail,
    _id,
  } = recomm;

  // handle order delete/cancellation
  const handleDelete = async () => {
    try {
      await axiosSecure.delete(`/review-delete/${_id}`);
      refetch();
      toast.success("Order Cancelled.");
    } catch (err) {
      toast.error(err.response.data);
    } finally {
      closeModal();
    }
  };
  return (
    <>
      <div className="flex  justify-center w-full border-4 border-blue-500 items-center rounded-lg my-3 p-3">
        <div className="w-[100%] lg:w-[10%] mr-9">
          <img className="w-full " src={propertyImage} alt="" />
        </div>
        <div className="w-[80%]">
          <h1 className="text-gray-500">
            Property title: <span className="text-black">{propertyTitle}</span>
          </h1>
          <h1 className="text-gray-500">
            Review: <span className="text-black">{review}</span>
          </h1>
          <h1 className="text-gray-500">
            Rating: <span className="text-black">{rating}</span>
          </h1>
          <h1 className="text-gray-500">
            Reviewer email: <span className="text-blue-500">{email}</span>
          </h1>
          <h1 className="text-gray-500">
            Agent email: <span className="text-blue-500">{agentEmail}</span>
          </h1>
        </div>
        <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => setIsOpen(true)}
            className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-4 py-1 font-semibold text-black leading-tight"
          >
            <span className="absolute cursor-pointer inset-0 bg-red-500  rounded-full"></span>
            <span className="relative cursor-pointer">Cancel</span>
          </button>

          <DeleteModal
            handleDelete={handleDelete}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        </div>
      </div>
    </>
  );
};

export default MyReviewCard;
