import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/SearchSlice";

const Tabs = () => {
  const tabs = ["photos","videos","gif"];
  const [active, setActive] = useState("photos");

  const dispatch =useDispatch()

  const activeTab = useSelector((state)=>state.search.activeTab)
  
  

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex bg-gray-900 rounded-lg p-1">
        {tabs.map((tabs,index) => (
          <button
            key={index}
            onClick={() =>{ setActive(tabs), dispatch(setActiveTabs(tabs))}}
            className={`flex-1 py-3 rounded-md font-medium cursor-pointer transition-all ${
              active === tabs
                ? "bg-white text-black"
                : "text-white hover:bg-gray-800"
            }`}
          >
            {tabs}
          </button>
        ))}
      </div>

      <div className="mt-6 text-center text-white">
        <h2 className="text-2xl font-bold">{active} Section</h2>
      </div>
    </div>
  );
};

export default Tabs;