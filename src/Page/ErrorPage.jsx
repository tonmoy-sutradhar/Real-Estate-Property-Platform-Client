import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-center text-5xl text-red-500 mt-[180px]">
        PAGE NOT FOUND 404🎃
      </h1>
      <Link to="/">
        <button className="btn bg-lime-400 mt-8">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
