import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-4 border-blue-500 rounded-full animate-spin">
        hi
      </div>
    </div>
  );
};

export default Loader;
