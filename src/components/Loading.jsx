import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useGlobalContext } from "../context";

const Loading = () => {
  const { loading } = useGlobalContext();

  return (
    <div className="flex justify-center items-center">
      <PulseLoader color={"#1e86ff"} loading={loading} size={20} />
    </div>
  );
};

export default Loading;
