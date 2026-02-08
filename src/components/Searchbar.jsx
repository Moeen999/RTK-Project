import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const inputValue = useSelector((state)=>state.search.query);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(input));
    console.log(inputValue)
    setInput("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 py-10 px-14 bg-gray-900"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md text-white bg-gray-800 border-2 outline-none w-full"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Search
        </button>
      </form>
    </>
  );
};

export default Searchbar;
