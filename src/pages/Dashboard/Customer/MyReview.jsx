import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import MyReviewCard from "../../../components/Dashboard/TableRows/MyReviewCard";
import { useQuery } from "@tanstack/react-query";

const MyReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: recommend = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["all-reviews", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/all-review/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
  });

  return (
    <>
      <div className="border-2 border-purple-500 rounded-xl">
        <div className="overflow-x-auto px-3 mt-10 ">
          <table className="w-full shadow-md border mx-auto border-gray-100 my-6">
            <tbody>
              {recommend.map((recomm, indx) => (
                <MyReviewCard
                  key={indx}
                  refetch={refetch}
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
