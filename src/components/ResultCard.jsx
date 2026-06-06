import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/CollectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch()
  const addToCollection = (item) => {
    dispatch(addCollection(item))
    dispatch(addedToast())
  } 


  return (
    <div className="relative group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full">
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

  <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition shrink-0"
  
  onClick={()=>{
    addToCollection(item)
  }}
  
  >
    Save
  </button>
</div>
    </div>
  );
};

export default ResultCard;
