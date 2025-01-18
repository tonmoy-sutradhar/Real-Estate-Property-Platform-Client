// import React from 'react';

// const MyReviewCard = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default MyReviewCard;

// =================
const MyReviewCard = ({ recomm }) => {
  const {
    name,
    email,
    propertyLocation,
    propertyImage,
    propertyTitle,
    propertyId,
    rating,
    review,
    agentName,
    agentEmail,
  } = recomm;
  return (
    <>
      <div className="flex  justify-center w-full border-4 border-blue-500 items-center rounded-lg my-3 p-3">
        <div className="w-[100%] lg:w-[10%] mr-9">
          <img className="w-full " src={propertyImage} alt="" />
        </div>
        <div className="w-[80%]">
          <h1 className="text-gray-500">
            Property title: <span className="text-black">{propertyTitle}</span>
          </h1>
          <h1 className="text-gray-500">
            Review: <span className="text-black">{review}</span>
          </h1>
          <h1 className="text-gray-500">
            Rating: <span className="text-black">{rating}</span>
          </h1>
          <h1 className="text-gray-500">
            Reviewer email: <span className="text-blue-500">{email}</span>
          </h1>
          <h1 className="text-gray-500">
            Agent email: <span className="text-blue-500">{agentEmail}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default MyReviewCard;
