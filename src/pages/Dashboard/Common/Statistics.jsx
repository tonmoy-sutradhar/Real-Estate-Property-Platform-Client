import { Helmet } from "react-helmet-async";
import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import useRole from "../../../hooks/useRole";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import MyInventory from "../Seller/MyInventory";
import AddedPlants from "../../../components/Dashboard/Statistics/AddedPlants";
const Statistics = () => {
  const [role, isLoading] = useRole();
  if (isLoading) return <LoadingSpinner />;
  if (role === "customer") return <Navigate to="/dashboard/my-orders" />;
  // if (role === "agent") return <Navigate to="/dashboard/my-inventory" />;
  if (role === "agent") return <Navigate to="/dashboard/add-plant" />;
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {role === "admin" && <AddedPlants></AddedPlants>}
    </div>
  );
};

export default Statistics;
