import MenuItem from "./MenuItem";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";
import BecomeSellerModal from "../../../Modal/BecomeSellerModal";
import { RiLuggageCartLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
const CustomerMenu = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const requestHandler = async () => {
    try {
      const { data } = await axiosSecure.patch(`/users/${user?.email}`);
      toast.success("Successfully Applied to become a Agent");
    } catch (err) {
      // console.log(err.response.data);
      toast.error(err.response.data + "👊");
    } finally {
      closeModal();
    }
  };

  return (
    <>
      <MenuItem
        icon={RiLuggageCartLine}
        label="My Orders"
        address="my-orders"
      />
      <MenuItem icon={MdRateReview} label="My Review" address="my-review" />

      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
      >
        <MdOutlineSupportAgent className="w-5 h-5" />

        <span className="mx-4 font-medium">Become A Agent</span>
      </button>

      <BecomeSellerModal
        requestHandler={requestHandler}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default CustomerMenu;
