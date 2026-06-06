import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/SearchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault();

     dispatch(setQuery(text))
     
     setText('')
  };

  return (
    <div className="w-full flex justify-center px-4 py-6">
      <form
        onSubmit={(e)=>{
          handleSearch(e)
        }}
        className="w-full max-w-2xl flex items-center bg-white border border-gray-300 rounded-full shadow-md overflow-hidden"
      >
        <input
          required
          type="text"
          placeholder="Search here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-3 outline-none text-gray-700"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 transition cursor-pointer"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
