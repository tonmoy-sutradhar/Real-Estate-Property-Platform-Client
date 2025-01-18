// Review section --------------------->>>
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import "react-datepicker/dist/react-datepicker.css";
// import { toast } from "react-toastify";

const Review = () => {
  const navi = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const [job, setJob] = useState({});

  useEffect(() => {
    fetchJobData();
  }, [id]);

  const fetchJobData = async () => {
    // const { data } = await axiosSecure.get(`/all-quires/${id}`);
    try {
      const { data } = await axiosSecure.get(`/all-quires/${id}`);
      setJob(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // setStartDate(new Date(data.deadline));
  };
  // console.log(job);

  const { title, location, price, image, agent, _id } = job || {};

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const form = e.target;
  //   const rTitle = form.rTitle.value;
  //   const rProductName = form.rProductName.value;
  //   const rReason = form.rReason.value;
  //   const rProductImage = form.rProductImage.value;
  //   const queryId = _id;
  //   const queryTi = queryTitle;
  //   const queryPrName = productName;
  //   const email = user?.email;
  //   const name = user?.displayName;

  //   // Bid user validation
  //   if (user?.email === recommendInfo?.recommendEmail) {
  //     return toast.error("Action not permitted.");
  //   }

  //   const recommendData = {
  //     name,
  //     email,
  //     productName,
  //     queryTitle,
  //     queryId,
  //     rProductImage,
  //     rReason,
  //     rTitle,
  //     rProductName,
  //     currentDate: startDate,
  //     rName: recommendInfo?.recommendName,
  //     rEmail: recommendInfo?.recommendEmail,
  //   };
  //   console.table(recommendData);

  //   try {
  //     await axios.post(
  //       `${import.meta.env.VITE_API_URL}/add-recommended`,
  //       recommendData
  //     );
  //     form.reset();
  //     navi("/myRecommended");
  //     toast.success("Recommended added Successful!!");
  //   } catch (err) {
  //     // console.log(err);
  //     // Backend side theke err data paour jonno --> err?.rresponse?.data use korci
  //     toast.error(err?.response?.data);
  //   }
  // };

  return (
    <div className="flex flex-col my-6 md:flex-row justify-around gap-5 border-4 border-purple-500 rounded-xl  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Recommender Information */}
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div>
          {/* <img className="w-16 h-16   src={image} rounded-lg" alt="" /> */}
          <img className="w-16 h-16" src={image} alt="Property Image" />
        </div>
        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {/* {job_title} */}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">Title: {title}</p>
          <p className="mt-2 text-lg text-gray-600 ">Location: {location}</p>
          <p className="mt-2 text-lg text-gray-600 ">Price:{price}</p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Agent Information:
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">
                {/* Name: {recommendInfo?.recommendName} */}
              </p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: <span className="text-blue-500">{agent?.email}</span>
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img
                referrerPolicy="no-referrer" //In the case in google url img don't show use this
                src={agent?.image}
                alt="Buyer photo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recommend Form */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Add your Recommendation
        </h2>

        {/* onSubmit={handleSubmit} */}
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <div>
                <label className="text-gray-700 " htmlFor="price">
                  Recommendation Title
                </label>
                <input
                  type="text"
                  name="rTitle"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="comment">
                  Recommended product Name
                </label>
                <input
                  id="comment"
                  name="rProductName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="comment">
                  Recommended Product Image
                </label>
                <input
                  id="comment"
                  name="rProductImage"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="comment">
                  Recommendation reason
                </label>
                <input
                  id="comment"
                  name="rReason"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>

            {/* -------email div */}
            <div>
              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  // defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-lime-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Review;
