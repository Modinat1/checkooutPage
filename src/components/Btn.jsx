import React from "react";
// import { Spinner } from "react-activity";

const Btn = ({ text, type, className, onClick, loadingState, icon }) => {
  return (
    <button
      type={type}
      className={`rounded-3xl py-2 hover:scale-105 whitespace-nowrap w-fit ${className} flex justify-center items-center`}
      onClick={onClick}
      disabled={loadingState}
    >
      {loadingState ? (
        <h3>Loading...</h3>
        // <Spinner />
      ) : (
        <div className="flex items-center gap-x-2">
          {icon && <img src={icon} alt="icon"/>}
          <span>{text}</span>
        </div>
      )}
    </button>
  );
};

export default Btn;
