"use client";

import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { usePokemonData } from "./hooks/usePokemonData";
import PokemonCard from "../pokemon-card/PokemonCard";

const ITEMS_PER_PAGE = 20; // Number of items per page

const PokemonList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isError, isLoading } = usePokemonData({
    offset: 0,
    limit: 100000, // Fetch all Pokémon data initially
  });

  const searchPokemon = () => {
    setSearchQuery(inputValue.trim()); // Update searchQuery only on search icon click
    setCurrentPage(1); // Reset to the first page when searching
  };

  useEffect(() => {
    if (!data?.results || isLoading || isError) return;

    let processedData = [...data.results];

    // Sorting logic
    if (sortOrder === "A-Z") {
      processedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "Z-A") {
      processedData.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Searching logic
    if (searchQuery.trim() !== "") {
      processedData = processedData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredData(processedData);
  }, [data, sortOrder, searchQuery, isLoading, isError]);

  // Calculate paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <div className="pb-12 px-4 md:px-8 lg:px-16">
      {/* Search and Sort Section */}
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-2 justify-between items-center">
        <span>
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)} of{" "}
          {filteredData.length}
        </span>
        <div className="flex md:flex-row flex-col items-center  md:space-x-4 space-y-2">
          <div className="space-x-2">
            <span className="md:text-lg text-sm text-zinc-600">Sort by</span>
            <select
              className="md:py-2 py-1   px-4 rounded-sm border-2 border-gray-400 outline-none"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              className="md:py-2 py-1 px-2 rounded-sm outline-none border-2 border-gray-400"
              placeholder="Search by name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <IoSearchOutline
              onClick={searchPokemon}
              className="bg-orange-500 h-full md:w-10 w-9 p-2 text-white cursor-pointer rounded-sm"
            />
          </div>
        </div>
      </div>

      {/* Pokemon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
        {paginatedData.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
