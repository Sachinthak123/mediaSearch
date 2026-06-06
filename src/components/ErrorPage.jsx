
import React from "react";

const ErrorPage = ({
  title = "Something went wrong",
  message = "Unable to load data.",
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
        alt="Error"
        className="w-24 h-24 sm:w-32 sm:h-32 mb-4"
      />

      <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>

      <p className="text-gray-500 mb-4">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2 bg-black text-white rounded-lg hover:opacity-90"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorPage;