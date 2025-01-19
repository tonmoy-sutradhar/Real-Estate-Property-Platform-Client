import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import DeleteModal from "../../Modal/DeleteModal";
const CustomerOrderDataRow = ({ orderData, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const { title, image, location, price, _id, status, propertyId } = orderData;

  // handle order delete
  const handleDelete = async () => {
    try {
      //fetch delete request
      await axiosSecure.delete(`/orders/${_id}`);
      // increase quantity from plant collection
      // await axiosSecure.patch(`/plants/quantity/${propertyId}`, {
      //   quantityToUpdate: quantity,
      //   status: "increase",
      // });
      // call refetch to refresh ui(fetch orders data again)
      refetch();
      toast.success("Order Cancelled.");
    } catch (err) {
      // console.log(err);
      toast.error(err.response.data);
    } finally {
      closeModal();
    }
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{title}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{location}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${price}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
        ></DeleteModal>
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;
