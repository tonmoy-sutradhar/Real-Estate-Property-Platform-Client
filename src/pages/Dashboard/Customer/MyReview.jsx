import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import MyReviewCard from "../../../components/Dashboard/TableRows/MyReviewCard";

const MyReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [recommend, setMyRecommend] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchAllBids(user.email);
    }
  }, [user?.email]);

  const fetchAllBids = async (email) => {
    try {
      const { data } = await axiosSecure.get(`/all-recommended/${email}`);
      setMyRecommend(data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <>
      <div>
        <div className="overflow-x-auto px-3 mt-10 ">
          <table className="w-full shadow-md border mx-auto border-gray-100 my-6">
            {/* <thead>
              <tr className="bg-[#0095FF] text-white">
                <th className="py-4 px-6 text-lg text-left border-b">
                  Recommend Image
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">
                  Recommend Product Name
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">
                  Recommend reason
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">
                  Actual Product Name
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">Date</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
              </tr>
            </thead> */}
            <tbody>
              {recommend.map((recomm, indx) => (
                <MyReviewCard
                  key={indx}
                  setMyRecommend={setMyRecommend}
                  recomm={recomm}
                ></MyReviewCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyReview;
