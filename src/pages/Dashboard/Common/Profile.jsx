import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import cvrImg from "../../../assets/images/logo.jpg";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
const Profile = () => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();
  if ((loading, isLoading)) return <LoadingSpinner />;
  return (
    <div className="flex justify-center items-center mt-16">
      <Helmet>
        <title>PROFILE</title>
      </Helmet>
      <div className="bg-white  rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          alt="cover photo"
          src={cvrImg}
          className="w-96 mx-auto  mb-4 rounded-t-lg h-52"
        />
        <div className="flex flex-col items-center justify-center p-4 border-2 rounded-xl  border-purple-500 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-blue-500 rounded-full">
            {role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 px-12">
              <div className="ml-44">
                <p>
                  Name: <span className="font-bold">{user.displayName}</span>
                </p>
                <p>
                  Email:{" "}
                  <span className="font-bold text-blue-500 ">{user.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
