import React from "react";
import { useDispatch } from "react-redux";
import {  removeCollection, removeToast } from "../redux/features/CollectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
      dispatch(removeToast());
  };

  return (
    <div className="relative  group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {item.type === "photo" && (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
        />
      )}

      {item.type === "video" && (
        <video
          autoPlay
          loop
          muted
          src={item.src}
          className="w-full h-48 sm:h-56 md:h-64 object-cover cursor-pointer"
        />
      )}

      {item.type === "gif" && (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-linear-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4">
        <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base truncate flex-1 mr-3">
          {item.title || "Untitled"}
        </h3>

        <button
          className="bg-red-600 cursor-pointer text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition shrink-0"
          onClick={() => {
            removeFromCollection(item);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
