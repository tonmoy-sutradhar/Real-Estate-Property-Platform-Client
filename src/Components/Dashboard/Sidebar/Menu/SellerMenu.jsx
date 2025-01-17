import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";
const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Property"
        address="add-plant"
      />
      <MenuItem
        icon={MdHomeWork}
        label="My added property"
        address="my-inventory"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="My sold property"
        address="manage-orders"
      />
    </>
  );
};

export default SellerMenu;
