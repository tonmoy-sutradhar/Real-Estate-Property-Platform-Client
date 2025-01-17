import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const CustomerOrderDataRow = ({ orderData, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const { title, image, location, price, _id, status, propertyId } = orderData;
  console.log(orderData);

  // handle order delete/cancellation
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
      console.log(err);
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
          className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-black leading-tight"
        >
          <span className="absolute cursor-pointer inset-0 bg-red-500  rounded-full"></span>
          <span className="relative cursor-pointer">Cancel</span>
        </button>

        <DeleteModal
          handleDelete={handleDelete}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;

// ------------------------------
// import PropTypes from "prop-types";
// import { useState } from "react";
// import DeleteModal from "../../Modal/DeleteModal";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import toast from "react-hot-toast";

// const CustomerOrderDataRow = ({ orderData, refetch }) => {
//   const axiosSecure = useAxiosSecure();
//   const [isOpen, setIsOpen] = useState(false);
//   const closeModal = () => setIsOpen(false);

//   // Ensure properties exist before destructuring
//   const {
//     name = "Unknown Plant",
//     image = "https://via.placeholder.com/150", // Fallback image
//     address = "Unknown Location",
//     price = "N/A",
//     _id,
//     status = "Pending",
//     propertyId,
//   } = orderData || {};

//   // Debugging: Log orderData to identify issues
//   console.log("Rendering orderData:", orderData);

//   // Handle order delete/cancellation
//   const handleDelete = async () => {
//     try {
//       // Fetch delete request
//       await axiosSecure.delete(`/orders/${_id}`);

//       // Uncomment if quantity update logic is required
//       // await axiosSecure.patch(`/plants/quantity/${propertyId}`, {
//       //   quantityToUpdate: quantity,
//       //   status: "increase",
//       // });

//       // Refresh UI (fetch orders data again)
//       refetch();
//       toast.success("Order Cancelled.");
//     } catch (err) {
//       console.error("Error cancelling order:", err);
//       toast.error(err.response?.data || "Failed to cancel order.");
//     } finally {
//       closeModal();
//     }
//   };

//   return (
//     <tr>
//       {/* Plant Image */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <div className="flex items-center">
//           <div className="flex-shrink-0">
//             <img
//               alt={name}
//               src={image}
//               className="mx-auto object-cover rounded h-10 w-15"
//             />
//           </div>
//         </div>
//       </td>

//       {/* Plant Name */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 whitespace-no-wrap">{name}</p>
//       </td>

//       {/* Location */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 whitespace-no-wrap">{address}</p>
//       </td>

//       {/* Price */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 whitespace-no-wrap">${price}</p>
//       </td>

//       {/* Status */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 whitespace-no-wrap">{status}</p>
//       </td>

//       {/* Actions */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight"
//         >
//           <span className="absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full"></span>
//           <span className="relative cursor-pointer">Cancel</span>
//         </button>

//         {/* Delete Confirmation Modal */}
//         <DeleteModal
//           handleDelete={handleDelete}
//           isOpen={isOpen}
//           closeModal={closeModal}
//         />
//       </td>
//     </tr>
//   );
// };

// CustomerOrderDataRow.propTypes = {
//   orderData: PropTypes.object.isRequired, // Updated prop type to reflect the expected data
//   refetch: PropTypes.func.isRequired,
// };

// export default CustomerOrderDataRow;
