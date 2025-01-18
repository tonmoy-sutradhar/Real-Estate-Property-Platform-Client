import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BsGraphUp } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { IoHome } from "react-icons/io5";
const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdHomeWork}
        label="Added properties"
        // address="/dashboard"
        address="adminAddedProperty"
      />
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem icon={IoHome} label="" address="/dashboard" />
    </>
  );
};

export default AdminMenu;
