import React from "react";
import { useGlobalContext } from "../context";

const MainSearchbar = () => {
  const { searchText, search, changeSearchText } = useGlobalContext();

  return (
    <section className="w-full h-32 bg-searchbarBackground bg-center bg-cover flex justify-center items-center rounded-md mb-8">
      <form className="bg-white w-11/12 md:w-2/3 h-14 flex jusitfy-center p-1 pl-3 rounded">
        <input
          type="text"
          className="w-4/5 md:w-11/12 outline-none placeholder-gray-300 placeholder:text-xs md:placeholder:text-sm"
          placeholder="&#128188; Title, companies, expertise or benefits"
          value={searchText}
          onChange={(e) => changeSearchText(e)}
        />
        <button
          type="submit"
          className="bg-lightBlue text-white font-bold py-4 px-4 md:px-10 flex justify-center items-center rounded"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default MainSearchbar;
